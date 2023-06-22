import countStrings from "./countstring";

test("basic tests", () => {
  expect(countStrings([-2, -2, "ukulele", "bottle"])).toBe(2);
  expect(countStrings(["ukulele", "bottle"])).toBe(2);
  expect(countStrings([])).toBe(0);
  expect(countStrings([2, 2, 4])).toBe(0);
}
);