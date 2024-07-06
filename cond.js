//Task 1

let userLogged = false
if (userLogged == true) {
    console.log("Continuing to Cart");
} else {
    console.log("Please log in to continue");
}

//Task 2

const prod_array = ["T-shirt", "Jeans", "Hat"]
for (const product in prod_array) {
    console.log("Product:", prod_array[product]);
}

let user_cart = [prod_array[1], prod_array[2], prod_array[1]]

if (user_cart == "") {
    console.log("Try adding something to the cart first");
} else {
    console.log("They following products are in your cart:");
    for (const prod in user_cart) {
        console.log(user_cart[prod]);
    }
}

//Task 3

const shirt = 20
const jeans = 45
const hat = 15

let total = 0
for (const prod in user_cart) {
    if (user_cart[prod] == "T-shirt") {
        total += shirt
    } else if (user_cart[prod] == "Jeans") {
        total += jeans
    } else {
        total += hat
    }
}
console.log("Total cost for your cart is $", total);