

function book_purchase(title, price, discount, tax, quantity, stock, term) {
    const amountDiscount = price * discount / 100
    let priceAfterDiscount = price - amountDiscount

    let totalPrice = priceAfterDiscount * quantity

    const amountTax = totalPrice * tax / 100
    let priceAfterTax = totalPrice + amountTax

    let stockMessage = "The book is still in stock."

    stockTemp = stock
    for(let i = 1; i <= quantity; i++) {
        stockTemp -= 1
        if(quantity >= stock) {
            stockMessage = "The book is run out of stock. \nYou can only purchase " + stock + " books."
            break
        }
    }

    let creditPayment = new Array()
    for(let i = 0; i < term; i++) {
        creditPayment[i] = totalPrice / term
    }

    console.log("Book Purchased       : " + title)
    console.log("Original Price       : " + price)
    console.log("Amount of discount   : " + amountDiscount)
    console.log("Price after discount : " + priceAfterDiscount)
    console.log("Quantity             : " + quantity + "\n")

    console.log("Total Payment            : " + totalPrice)
    console.log("Amount of tax            : " + amountTax)
    console.log("Total Payment after tax  : " + priceAfterTax + "\n")
    console.log("Credit Payment per month : ")
    for(let i = 0; i < creditPayment.length; i++) {
        process.stdout.write(creditPayment[i] + " ");
    }
    
    console.log("\n")
    console.log(stockMessage + "\n")
}


book_purchase("Norwegian Woods", 100000, 20, 5, 10, 9, 8)
book_purchase("Lelaki Harimau", 85000, 20, 5, 2, 20, 10)
