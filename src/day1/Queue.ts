interface Node<T> {
    value: T;
    next: Node<T> | undefined;
}

export default class Queue<T> {
    public length: number = 0;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    enqueue(item: T): void {
        const node: Node<T> = {
            value: item,
            next: undefined,
        };

        if (!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        ++this.length;
    }
    deque(): T | undefined {
        const value = this.head?.value;

        if (this.head == this.tail) {
            this.head = undefined;
            this.tail = undefined;
            this.length = 0;
        } else {
            this.head = this.head?.next;
            --this.length;
        }

        return value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
