//"Нарциссические числа" - это n-значные числа, где сумма всех n-й степени их цифр равна этому числу.

function narcissistic(value) {
    const arrVal = value.toString().split("")
    let arr = []
    arrVal.forEach((cur, index, array) => {
    arr.push(Math.pow(+cur, array.length))
    })
    
    const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue) ;
    if(result === value) {
    return true
    } else {
    return false
    }
    
    }