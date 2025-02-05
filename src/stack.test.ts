describe("Stack", () => {
  it("should return true for a new stack when checked if empty", () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
});
