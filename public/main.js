"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} ows ${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('Maria', 'work on the Maria website', 450);
const invoiceTwo = new Invoice('`Ali', 'work on the Ali website', 300);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
