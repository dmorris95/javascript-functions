//Task 1

let bank_account = 1000
function deposit_bank (amount, account) {
    account += amount
    check_bank(account)
}
deposit_bank(250, bank_account)

//Task 2
function withdraw_bank (amount, account) {
    if (amount > account) {
        console.log("You don't have enough in the account to withdraw.");
    } else {
        account -= amount
    }
    check_bank(account)
}
withdraw_bank(750, bank_account)

//Task 3

function check_bank (account) {
    console.log("You have $", account, "in your account.");
}

check_bank(bank_account)