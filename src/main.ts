// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}
const me: IsPerson = {
    name: 'Hossein',
    age: 5,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spend', amount);
        return amount;
    }
};
console.log(me)

import { Invoice } from "./classes/Invoice.js";

const invoiceOne = new Invoice('Maria', 'work on the Maria website', 450);
const invoiceTwo = new Invoice('`Ali', 'work on the Ali website', 300);

let invoices : Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

console.log(invoices)