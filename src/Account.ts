export class Account {
  id: number;
  startingBalance: number;
  private _currentBalance: number;

  constructor(
    id: number,
    startingBalance: number,
    currentBalance: number = startingBalance
  ) {
    this.id = id;
    this.startingBalance = startingBalance;
    this._currentBalance = currentBalance;
  }

  deposit(cashIn: number) {
    this._currentBalance += cashIn;
  }
  withdraw(chashOut: number) {
    this._currentBalance -= chashOut;
  }

  toString() {
    return `Account id: ${this.id}, balance: ${this._currentBalance}`;
  }
}
