class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor( c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} ows ${this.amount} for ${this.details}`
    }
}

const invoiceOne = new Invoice('Maria', 'work on the Maria website', 450);
const invoiceTwo = new Invoice('`Ali', 'work on the Ali website', 300);

let invoices : Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log(invoices)