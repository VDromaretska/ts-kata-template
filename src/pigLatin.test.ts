import pigIt from "./pigLatin";

test.skip("Base test", () => {
  expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
});

test.skip("Empty string test", () => {
  expect(pigIt("")).toBe("");
});
