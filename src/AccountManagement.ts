import { Account } from "./Account";

// const yourAccount = new Account(42, 999); //id: 42, starting balance: 999
// yourAccount.withdraw(900);

// console.log(yourAccount.toString());

const myAccount = new Account(123, 100); //id: 123, starting balance: 100

myAccount.deposit(20);
//TODO: Code your class so that TypeScript rejects the following code.
// myAccount.currentBalance = 12;

//let's check that it is still possible to manipulate the balance
//indirectly, via the deposit() function
myAccount.deposit(1_000_000); //ka-ching!
console.log(myAccount.toString());
