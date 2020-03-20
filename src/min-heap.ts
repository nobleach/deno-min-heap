export class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private bubbleUp(idx: number) {
    while (idx > 0) {
      // Get parent index
      let parent = Math.floor((idx + 1) / 2) - 1;

      // if parent is greater than child
      if (this.heap[parent] > this.heap[idx]) {
        // swap
        const temp = this.heap[parent];
        this.heap[parent] = this.heap[idx];
        this.heap[idx] = temp;
      }

      idx = parent;
    }
  }

  private sinkDown(idx: number) {
    while (true) {
      let child = (idx + 1) * 2;
      let sibling = child - 1;
      let toSwap = null;

      // if current value is greater than child value
      if (this.heap[idx] > this.heap[child]) {
        toSwap = child;
      }

      // if sibling is less than child and current value
      if (this.heap[idx] > this.heap[sibling] && (this.heap[child] == null || (this.heap[child] !== null && this.heap[sibling] < this.heap[child]))) {
        toSwap = sibling;
      }

      // otherwise break
      if (toSwap === null) {
        break;
      }

      let temp = this.heap[toSwap];
      this.heap[toSwap] = this.heap[idx];
      this.heap[idx] = temp;

      idx = toSwap;
    }
  }

  getMin(): number {
    return this.heap[0];
  }

  extractMin(): number | null {
    if (this.heap.length === 0) {
      return null;
    }

    let min = this.heap[0];

    // set first element to last element
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return min;
  }

  insert(val: number): void {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

}
