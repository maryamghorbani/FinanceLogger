const me = {
    name: 'Hossein',
    age: 5,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend', amount);
        return amount;
    }
};
console.log(me);
import { Invoice } from "./classes/Invoice.js";
const invoiceOne = new Invoice('Maria', 'work on the Maria website', 450);
const invoiceTwo = new Invoice('`Ali', 'work on the Ali website', 300);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
