import { assert, describe, it } from "vitest";

function sayhello(name: string): string {
  return `hello ${name}!`;
}

describe("sayHello", () => {
  it("should return name", () => {
    assert.equal("hello joko!", sayhello("joko"));
  });
});
