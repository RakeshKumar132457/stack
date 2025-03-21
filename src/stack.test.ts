import { Stack } from "./stack";

describe("Stack", () => {
  describe("Common operations", () => {
    let stack: Stack<number>;
    beforeEach(() => {
      stack = new Stack<number>();
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

    it("should return false when we push an element into the stack", () => {
      stack.push(4);
      expect(stack.isEmpty()).toBe(false);
    });

    it("should return non-zero value when we push an element into the stack", () => {
      stack.push(4);
      expect(stack.size()).toBe(1);
    });

    it("should throw error top pop element from empty list", () => {
      expect(() => stack.pop()).toThrow("Cannot pop from empty stack");
    });

    it("should return the most recent item", () => {
      stack.push(4);
      expect(stack.pop()).toBe(4);
    });
  });

  describe("Generic type support", () => {
    it("should work with strings", () => {
      const stringStack = new Stack<string>();
      stringStack.push("hello");
      expect(stringStack.pop()).toBe("hello");
    });
  });
});
