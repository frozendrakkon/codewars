// transfer some arr, and delete value 0 and push in the end

var moveZeros = function (arr) {
    let i = 0
    arr.map((cur) => {
      if(cur === 0) {
        i++
      } 
    })
    const result = arr.filter(cur => cur !== 0)
    
    for(let n = 0; n < i; n++) {
      result.push(0)
    }
    
    return result
  }