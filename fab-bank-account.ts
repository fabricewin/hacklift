export class BankAccount {
    accountType: string;
    accountName: string;
    firstName: string;
    lastName:string;
    address: string;
    accountNumber: number;
    balance:number;
    history:number[];
    status:Enumerator;
    private generateAccountNumber(){
        
            const min = 1000000000;
            const max = 9999999999;
            return Math.floor(Math.random()*(max-min))+min;
        
    }

    constructor (accountType:string, accountName:string, firstName:string, lastName:string, address:string) {
        this.accountType = accountType;
        this.accountName = accountName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.accountNumber = this.generateAccountNumber();

    }

}
 const louis = new BankAccount ("Savings", )


// bank-account.ts

// export enum TransactionType {
//     DEPOSIT = "Deposit",
//     WITHDRAWAL = "Withdrawal"
// }

// export enum AccountStatus {
//     ACTIVE = "Active",
//     SUSPENDED = "Suspended",
//     DEACTIVATED = "Deactivated"
// }

// export type Transaction = {
//     transactionType: TransactionType; // The type of transaction, deposit or withdrawal
//     amount: number;
//     performedBy: string, // who deposited or withdrew the money
//     date: Date // the date of the transaction
// }

// export class BankAccount {
//     accountType: string;
//     accountName: string;
//     firstName: string;
//     lastName: string;
//     address: string;
//     accountNumber: number;
//     balance: number;
//     history: Transaction[];
//     status: AccountStatus;

//     constructor(
//         accountType: string,
//         accountName: string,
//         firstName: string,
//         lastName: string,
//         address: string,
//         balance: number
//     ) {
//         this.accountType = accountType;
//         this.accountName = accountName;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//         this.accountNumber = Math.floor(Math.random() * 1000000000); // Generate random account number
//         this.balance = balance;
//         this.history = [];
//         this.status = AccountStatus.ACTIVE;
//     }

//     deposit(amount: number, depositedBy: string) {
//         if (amount <= 0) {
//             console.log("Deposit amount must be greater than zero.");
//             return;
//         }

//         this.balance += amount;
//         this.history.push({
//             transactionType: TransactionType.DEPOSIT,
//             amount,
//             performedBy: depositedBy,
//             date: new Date()
//         });
//     }

//     withdraw(amount: number, withdrawnBy: string) {
//         if (amount <= 0) {
//             console.log("Withdrawal amount must be greater than zero.");
//             return;
//         }
//         if (amount > this.balance) {
//             console.log("Insufficient funds.");
//             return;
//         }

//         this.balance -= amount;
//         this.history.push({
//             transactionType: TransactionType.WITHDRAWAL,
//             amount,
//             performedBy: withdrawnBy,
//             date: new Date()
//         });
//     }

//     suspend() {
//         this.status = AccountStatus.SUSPENDED;
//     }

//     deactivate() {
//         this.status = AccountStatus.DEACTIVATED;
//     }

//     reactivate() {
//         if (this.status === AccountStatus.ACTIVE) {
//             console.log("Account is already in the active state");
//             return;
//         }
//         this.status = AccountStatus.ACTIVE;
//     }
// }
