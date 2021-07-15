function maiorOuIgual(num1, num2) {
    if (typeof num1 != typeof num2) {
        return console.log(false)
    } else if (num1 >= num2) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}


maiorOuIgual( 3, 2)
maiorOuIgual( 3, 3)
maiorOuIgual( 1, 3)
maiorOuIgual( 3, "3")

