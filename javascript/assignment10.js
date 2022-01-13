var price=200;
var quantity=5;
var tax=price*(18/100);
var discount=price*(20/100);
var tip=price*(30/100);

var total_bill_amount = (price*quantity)+tax+tip-discount;

console.log("Price: ₹",price);
console.log("Tax amount (18%): ₹",tax);
console.log("Discount (20%): ₹",discount);
console.log("Tip: ₹",tip);
console.log("Total bill amount: ₹",total_bill_amount);