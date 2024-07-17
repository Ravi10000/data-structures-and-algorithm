let description = "An Amazon Shopping Voucher is a prepaid payment instrument that can be used to purchase physical products from Amazon. An Amazon Shopping Voucher has an expiry of 12 months from the date of activation, subject to applicable terms. An Amazon Shopping Voucher cannot be transferred or cancelled once it is issued<br/>Amazon Shopping Vouchers (\"Vouchers\") are issued by Pine Labs under the brand name of Qwikcilver. Credit and Debit Cards issued outside India cannot be used to purchase Amazon Vouchers<br/>Beneficiary can apply the 13-digit numeric code on https://www.amazon.in/vouchers and add the voucher balance in his/her Amazon.in account<br/>Amazon Shopping Vouchers must be used only towards the purchase of eligible products on amazon.in<br/>The Vouchers, including any unused Amazon Shopping Voucher balance, expire one year from the date of issuance<br/>Vouchers cannot be transferred for value or redeemed for the cash<br/>Pine Labs, Amazon Seller Services Private Limited (Amazon) or their affiliates are not responsible if a voucher is lost, stolen, destroyed or used without permission<br/>For Complete terms and conditions, please visit https://www.amazon.in/gp/help/customer/display.html?nodeId=GT4BFAMD9JJJCMSK<br/>Amazon.in logo/trademark is an IP of Amazon or its affiliates and the Pine Labs trademark/logo is an IP of Pine Labs<br/>E-Vouchers Cards are normally delivered instantly. But sometimes due to system issues, the delivery can be delayed up-to 24 - 48 hours<br/>No returns and no refunds on gift cards, e-gift cards and gift vouchers. Please refer to Returns & Refund policies for more details. "
const links = [];
// console.log({description})

// do{
// let link = description.match(/https?:\/\/[^\s]+/)?.[0]; 
//     if(link) {
//         links.push(link);
//         description = description.slice(description.search(link) + link.length);
//     }else break;
// }while(description?.length)

const urlRegex = /(https?|ftp):\/\/[^\(<br/>)/$.?#][^\s/$.?#].[^\s]*/gi;
const foundLinks = description.match(urlRegex);
    
console.table(foundLinks)
// console.log({description})