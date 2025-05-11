type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head?: Node<T>ƒ;

    constructor() {}

    prepend(item: T): void {
      const node: Node<T> = {
        value: item,
      }
      this.length++;

      if (!this.head) {
        this.head = node;
        return;
      }

      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
