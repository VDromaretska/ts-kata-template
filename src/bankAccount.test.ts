import { Account } from "./Account";

test("Test deposit operation", () => {
  const myAccount = new Account(123, 100); //id: 123, starting balance: 100
  myAccount.deposit(50);
  expect(myAccount.#currentBalance).toEqual(150);
});
