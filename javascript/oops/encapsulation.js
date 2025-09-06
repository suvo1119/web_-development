class BankAccount {
    #balance; // private property

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance; // controlled access
    }
}

let acc = new BankAccount("Suvo", 500);
acc.deposit(200);
console.log(acc.getBalance()); // 700
// acc.#balance; // ❌ Error: Private field



//abstraction


class cofeemachine{
    start (){
        return `turning on the coffe machine`

    }
    brewcoffe (){
        return `brewing the coffe`
    }
    startthebutton(){
        let msg1=this.start();
        let msg2=this.brewcoffe();
        return `${msg1 } ....... ${ msg2}`
    }

    
}
let pressthebutton =new cofeemachine();
console.log(pressthebutton.startthebutton());




