import { BankAccount } from './bank-account'

// Fabrice's Personal Account
const frabriceAccount = new BankAccount(
    'Savings',
    'Fabrice Big Boy ' ,
    'Fabrice',
    'Big',
    '3 John Street, New York'
)
frabriceAccount.withdraw(5000, 'Fabrice')
console.log(frabriceAccount.accountName)
console.log(frabriceAccount.balance)