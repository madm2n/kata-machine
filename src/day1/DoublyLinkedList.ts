type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>;

    constructor() {}

    prepend(item: T): void {
        const node: Node<T> = {
            value: item,
        };
        this.length++;

        if (!this.head) {
            this.head = node;
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
    append(item: T): void {}
    remove(item: T): T | undefined {
        return undefined;
    }
    get(idx: number): T | undefined {
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        return undefined;
    }
}
