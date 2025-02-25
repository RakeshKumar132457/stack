export class Stack<T> {
  private items: Array<T>;
  constructor() {
    this.items = new Array<T>();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  push(item: T): T {
    this.items.push(item);
    return item;
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot pop from empty stack");
    }
    return this.items.pop()!;
  }
}
