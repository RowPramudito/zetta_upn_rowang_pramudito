

function book_purchase(title, price, discount, tax) {
    const amountDiscount = price * discount / 100
    let priceAfterDiscount = price - amountDiscount

    const amountTax = price * tax / 100
    let priceAfterTax = priceAfterDiscount + amountTax

    console.log("Book Purchased       : " + title)
    console.log("Original Price       : " + price)
    console.log("Amount of discount   : " + amountDiscount)
    console.log("Price after discount : " + priceAfterDiscount)
    console.log("Amount of tax        : " + amountTax)
    console.log("Price after tax      : " + priceAfterTax)
}

book_purchase("Norwegian Woods", 100000, 20, 5)



// the task asks us to use bool
// but there's no way in hell bool would be used in a function this simple.