type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {}

    prepend(item: T): void {
        const node: Node<T> = {
            value: item,
        };
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length || idx < 0) {
            throw new Error("Index out of range!");
        }

        if (idx === this.length) {
            return this.prepend(item);
        }

        if (idx === 0) {
            return this.append(item);
        }

        let node: Node<T> | undefined = this.head;

        for (let i = 0; i < idx; i++) {
            node = node?.next;
        }

        if (!node) {
            return;
        }

        this.length++;

        const newNode: Node<T> = {
            value: item,
            next: node,
            prev: node.prev,
        };

        if (node.prev) {
            node.prev.next = newNode;
        }

        node.prev = newNode;
    }
    append(item: T): void {
        this.length++;

        const node: Node<T> = {
            value: item,
        };

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr: Node<T> | undefined = this.head;
        let node: Node<T> | undefined;

        for (let i = 0; i < this.length; i++) {
            if (curr?.value === item) {
                node = curr;
                break;
            }

            curr = curr?.next;
        }

        if (!node) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) {
            const value = this.head?.value;
            this.head = this.tail = undefined;
            return value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = node.prev = undefined;
        return node.value;
    }
    get(idx: number): T | undefined {
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        return undefined;
    }
}
