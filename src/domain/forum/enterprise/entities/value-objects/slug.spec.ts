import { Slug } from "./slug";

test("it should create a slug from a string", () => {
  const slug = Slug.createFromText("this is a slug");

  expect(slug.value).toBe("this-is-a-slug");
});
