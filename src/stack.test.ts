import { Stack } from "./stack";

describe("Stack", () => {
  it("should return true for a new stack when checked if empty", () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should return 0 when new stack size is checked", () => {
    let stack = new Stack();
    expect(stack.size()).toBe(0);
  });
});
