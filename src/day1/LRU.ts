type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class LRU<K, V> {
    private length: number = 0;
    private head?: Node<V> = undefined;
    private tail?: Node<V> = undefined;
    private lookup: Map<K, Node<V>> = new Map<K, Node<V>>();
    private reverseLookup: Map<Node<V>, K> = new Map<Node<V>, K>();

    constructor(private capacity: number = 10) {}

    update(key: K, value: V): void {
        let node = this.lookup.get(key);

        if (!node) {
            node = { value: value };
            this.length++;
            this.prepend(node);
            this.trimCache();
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
            return;
        }

        this.detach(node);
        this.prepend(node);
        node.value = value;
    }

    get(key: K): V | undefined {
        const node = this.lookup.get(key);

        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);
        return node.value;
    }

    private detach(node: Node<V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = this.head.next;
        }

        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    private prepend(node: Node<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }

        const tail = this.tail as Node<V>;
        this.detach(this.tail as Node<V>);

        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--;
    }
}
