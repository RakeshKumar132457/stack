import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("should return true for a new stack when checked if empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("should return 0 when new stack size is checked", () => {
    expect(stack.size()).toBe(0);
  });

  it("should allow us to push element", () => {
    expect(stack.push(4)).toBe(4);
  });

  it("should throw error top pop element from empty list", () => {
    expect(() => stack.pop()).toThrow("Cannot pop from empty stack");
  });

  it("should return the most recent item", () => {
    stack.push(4);
    expect(stack.pop()).toBe(4);
  });
});
