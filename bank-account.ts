export enum TransactionType {
    DEPOSIT = 'Deposit',
    WITHDRAWAL = 'Withdrawal',
}

export enum AccountStatus {
    ACTIVE = 'Active',
    SUSPENDED = 'Suspended',
    DEACTIVATED = 'Deactivated',
}

export type Transaction = {
    trasactionType: TransactionType // The type of transaction, deposit or withdrawal
    amount: number
    performedBy: string // who deposited or withdrew the money
    date: Date // the date of the transaction
}

export class BankAccount {
    accountType: string
    accountName: string
    firstName: string
    lastName: string
    address: string
    accountNumber: string
    balance: number
    history: Array<Transaction>
    status: AccountStatus

    private generateAccountNumber() {
        const min = 1000000000
        const max = 9999999999
        return Math.floor(Math.random() * (max - min)) + min
    }

    constructor(
        accountType: string,
        accountName: string,
        firstName: string,
        lastName: string,
        address: string,
    ) {
        this.accountType = accountType
        this.accountName = accountName
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.accountNumber = `${this.generateAccountNumber()}`
        this.balance = 7000
        this.history = []
        this.status = AccountStatus.ACTIVE
    }

    deposit(amount: number, depositedBy: string) {
        if (this.status != AccountStatus.ACTIVE) {
            console.log(
                `Sorry this account is not active . Please contact the customer care!`
            )
            return
        }
        if (amount <= 0) {
            console.log(
                `${amount} cannot be deposited. Please check the amount and try again!`
            )
            return
        }
        this.balance += amount
        this.history.push({
            amount,
            performedBy: depositedBy,
            trasactionType: TransactionType.DEPOSIT,
            date: new Date(),
        })
        console.log(`${amount} successfully deposited by ${depositedBy}!`)

        // if(amount <= 0) {
        //     console.log(`${amount} cannot be deposited. Please check the amount and try again!`);
        // } else {
        //     this.balance += amount;
        //     this.history.push({
        //         amount,
        //         performedBy: depositedBy,
        //         trasactionType: TransactionType.DEPOSIT,
        //         date: new Date()
        //     })
        //     console.log(`${amount} successfully deposited by ${depositedBy}!`);
        // }
    }

    withdraw(amount: number, withdrawnBy: string) {
        if (this.status != AccountStatus.ACTIVE) {
            console.log(
                `Sorry this account is not active . Please contact the customer care!`
            )
            return
        }
        if (amount <= 0) {
            console.log(
                `${amount} cannot be withrawn. Please check the amount and try again!`
            )
            return
        }
        if (amount > this.balance) {
            console.log(`Insufficient fund`)
            return
        }

        this.history.push({
            amount,
            performedBy: withdrawnBy,
            trasactionType: TransactionType.WITHDRAWAL,
            date: new Date(),
        })
        this.balance -= amount

        console.log(
            `${amount} successfully withdrawn by ${withdrawnBy} et votre solde actuel est ${this.balance}!`
        )
    }

    suspend() {
        this.status = AccountStatus.SUSPENDED
    }

    deactivate() {
        this.status = AccountStatus.DEACTIVATED
    }

    reactivate() {
        if (this.status == AccountStatus.ACTIVE) {
            console.log('Account is already active!')
            return
        }
        this.status = AccountStatus.ACTIVE
    }
}
