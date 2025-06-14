export default class MinHeap {
    public length: number = 0;
    private data: number[] = [];

    public insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }

    public delete(): number {
        if (this.length == 0) {
            return NaN;
        }

        this.length--;
        const value = this.data[0];

        if (this.length == 0) {
            return value;
        }

        this.data[0] = this.data.pop() as number;
        this.heapifyDown(0);

        return value;
    }

    private heapifyUp(idx: number): void {
        if (idx <= 0) {
            return;
        }

        const parent = this.parent(idx);
        const pValue = this.data[parent];
        const value = this.data[idx];

        if (pValue > value) {
            this.data[idx] = pValue;
            this.data[parent] = value;
            this.heapifyUp(parent);
        }
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const rightIdx = this.rightChild(idx);
        const rightValue: number = this.data[rightIdx];
        const leftValue = this.data[leftIdx];
        const currValue = this.data[idx];

        if (leftValue < rightValue) {
            this.data[idx] = leftValue;
            this.data[leftIdx] = currValue;
            this.heapifyDown(leftIdx);
        } else if (rightValue < leftValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = currValue;
            this.heapifyDown(rightIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
