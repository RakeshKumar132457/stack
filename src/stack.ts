export class Stack {
  private items: Array<number>;
  constructor() {
    this.items = new Array<number>();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return 0;
  }

  push(item: number): number {
    this.items.push(item);
    return item;
  }

  pop(): number {
    if (!this.items.length) {
      throw new Error("Cannot pop from empty stack");
    }
    return this.items.pop()!;
  }
}
