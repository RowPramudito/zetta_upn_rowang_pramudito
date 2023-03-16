

function book_purchase(title, price, discount, tax, quantity, stock) {
    const amountDiscount = price * discount / 100
    let priceAfterDiscount = price - amountDiscount

    const amountTax = price * tax / 100
    let priceAfterTax = priceAfterDiscount + amountTax

    let canIbuyMore = "You can still buy more books."
    for(let i = 1; i <= quantity; i++) {
        stock -= 1
        if(quantity >= stock) {
            break
            canIbuyMore = "The book is out of stock!"
        }
    }

    console.log("Book Purchased       : " + title)
    console.log("Original Price       : " + price)
    console.log("Amount of discount   : " + amountDiscount)
    console.log("Price after discount : " + priceAfterDiscount)
    console.log("Amount of tax        : " + amountTax)
    console.log("Price after tax      : " + priceAfterTax + "\n")
    console.log(canIbuyMore)
}

book_purchase("Norwegian Woods", 100000, 20, 5)



// the task asks us to use bool
// but there's no way in hell bool would be used in a function this simple.