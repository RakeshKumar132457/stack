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
});
