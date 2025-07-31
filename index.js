// // Part 1: Login & Access Control
// let username = prompt("Enter your username (admin/user):");
// let password = prompt("Enter your password:");

// let role = "";
// let securityLevel = "";

// if ((username === "admin" || username === "user") && password === "1234") {
//   role = username;
//   securityLevel = (username === "admin") ? "high" : "low";
// } else {
//   alert("Incorrect username or password. Access denied.");
//   throw new Error("Access denied");
// }

// // Part 2: Coffee Shop Order Calculator
// let customerName = prompt("What's your name?");
// let age = parseInt(prompt("What's your age?"));
// let coffeeType = prompt("What type of coffee would you like?\n (espresso ($2.5)\n, latte ($3.5)\n, cappuccino ($4.0))");
// let quantity = parseInt(prompt("How many cups would you like?"));

// let pricePerCup = 0;

// if (coffeeType === "espresso") {
//   pricePerCup = 2.5;
// } else if (coffeeType === "latte") {
//   pricePerCup = 3.5;
// } else if (coffeeType === "cappuccino") {
//   pricePerCup = 4.0;
// } else {
//   alert("Invalid coffee type.");
//   throw new Error("Invalid coffee type");
// }

// let originalTotal = pricePerCup * quantity;
// let discount = 0;

// if (age < 18 || age > 60) {
//   discount = originalTotal * 0.10;
// }

// let finalTotal = originalTotal - discount;

// // Part 3: Bill Splitter with Tip
// let split = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
// let tipPercent = parseInt(prompt("What tip percentage would you like to give? (0, 5, 10, or 15)"));

// let tipAmount = finalTotal * (tipPercent / 100);
// let totalWithTip = finalTotal + tipAmount;
// let perPerson = totalWithTip / split;

// // Final Output
// alert(`Hello ${customerName}!\n` +
//       `You ordered ${quantity} ${coffeeType}(s).\n` +
//       `Original total: $${originalTotal.toFixed(2)}\n` +
//       `Discount: $${discount.toFixed(2)}\n` +
//       `Tip: $${tipAmount.toFixed(2)}\n` +
//       `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
//       `Split between ${split} person(s): $${perPerson.toFixed(2)} each`);

     





// Login & Access Control
let username = prompt("Enter your username (admin/user):");
let password = prompt("Enter your password:");

if ((username === "admin" || username === "user") && password === "1234") {
  console.log(`Logged in as ${username}`);
} else {
  alert("Incorrect username or password. Access denied.");
  throw new Error("Access denied");
}

// Coffee Order System
document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-now");

  orderButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const customerName = prompt("What's your name?");
      const age = parseInt(prompt("What's your age?"));
      const coffeeType = prompt("Which coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
      const quantity = parseInt(prompt("How many cups?"));

      let price = 0;
      if (coffeeType === "espresso") price = 2.5;
      else if (coffeeType === "latte") price = 3.5;
      else if (coffeeType === "cappuccino") price = 4.0;
      else {
        alert("Invalid coffee type.");
        return;
      }

      let originalTotal = price * quantity;
      let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
      let finalTotal = originalTotal - discount;

      const split = parseInt(prompt("Split between how many people? (1, 2, 3)"));
      const tipPercent = parseInt(prompt("Tip percentage? (0, 5, 10, 15)"));
      const tip = finalTotal * (tipPercent / 100);
      const totalWithTip = finalTotal + tip;
      const perPerson = totalWithTip / split;

      alert(`Thank you, ${customerName}!\n` +
        `Order: ${quantity} ${coffeeType}(s)\n` +
        `Total: $${originalTotal.toFixed(2)}\n` +
        `Discount: $${discount.toFixed(2)}\n` +
        `Tip: $${tip.toFixed(2)}\n` +
        `Total with tip: $${totalWithTip.toFixed(2)}\n` +
        `Each person pays: $${perPerson.toFixed(2)}`);
    });
  });
});