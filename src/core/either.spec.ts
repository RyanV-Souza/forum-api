import { Either, left, right } from "./either";

function doSomething(x: boolean): Either<string, number> {
  if (x) {
    return right(10);
  }

  return left("error");
}

test("success result", () => {
  const result = doSomething(true);

  expect(result.isRight()).toBe(true);
});

test("failure result", () => {
  const result = doSomething(false);

  expect(result.isLeft()).toBe(true);
});
