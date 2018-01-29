export type CompareFunc<T> = (a: T, b: T) => number;

export class Heap<T> {
  data: T[] = [];

  constructor(private compareFunc: CompareFunc<T>) {}

  left(index: number) {
    return 2 * index + 1;
  }

  right(index: number) {
    return 2 * index + 2;
  }

  parent(index: number) {
    return index % 2 ? (index - 1) / 2 : (index - 2) / 2;
  }

  add(node: T) {
    this.data.push(node);

    this.siftUp(this.data.length - 1);
  }

  private siftUp(index: number) {
    console.log(`before siftUp: `);
    console.log(this.data);
    // parent is the index of the input index
    let parent = this.parent(index);
    
    while (
        index > 0 &&
        this.compareFunc(this.data[parent], this.data[index]) > 0
    ) {
        [this.data[parent], this.data[index]] = [this.data[index],this.data[parent]];
        index = parent;
        parent = this.parent(index);
    }
    console.log(`after siftUp: `);
    console.log(this.data);
  }

  extract(): T | undefined {
    if (this.data.length > 0) {
      let root = this.data[0];
      let last = this.data.pop();

      if (this.data.length > 0) {
        this.data[0] = last;
        this.siftDown(0);
      }
      return root;
    }
  }

  private siftDown(idx: number) {
    const minIndex = (left: number, right: number) => {
      if (right >= this.data.length) {
        if (left >= this.data.length) {
          return -1;
        } else {
          return left;
        }
      } else {
        if (this.compareFunc(this.data[left], this.data[right]) <= 0) {
          return left;
        } else {
          return right;
        }
      }
    };

    let min: number = minIndex(this.left(idx), this.right(idx));

    while (min > 0 && this.compareFunc(this.data[idx], this.data[min]) > 0) {
      [this.data[idx], this.data[min]] = [this.data[min], this.data[idx]];
      idx = min;
      min = minIndex(this.left(idx), this.right(idx));
    }
  }

  size() {
    return this.data.length;
  }

  peek(): T {
    return this.data[0];
  }
}

const heap = new Heap<number>((a, b) => a - b);

heap.add(90);
heap.add(1);
heap.add(7);
heap.add(80);

console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());


