// Написать функцию, которая возвращает количество повторно встречающихся элементов,нечувствительных к регистру

function duplicateCount(text) {
    let newArr = []

    const arrayElementTextLowerSort = text.toLowerCase().split("").sort()

    arrayElementTextLowerSort.map((cur, index, array) => {
        if (array[index] === array[index + 1]) {
            newArr.push(array[index])
        }
    })

    const result = newArr.filter((cur, index, array) => array[index] !== array[index + 1])
    return result.length
}
duplicateCount("Indivisibilities")