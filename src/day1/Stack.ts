type Node<T> = {
    prev?: Node<T>;
    value: T;
};

export default class Stack<T> {
    public length: number = 0;
    private head?: Node<T>;

    push(item: T): void {
        const node: Node<T> = {
            value: item,
        };
        this.length++;
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const node = this.head;
        this.head = node.prev;
        node.prev = undefined;

        this.length--;

        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
