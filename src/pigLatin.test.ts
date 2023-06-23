import pigIt from "./pigLatin";

test ("Base test", () => {
expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
});

test ("Empty string test", () => {
    expect(pigIt("")).toBe("");
}
);