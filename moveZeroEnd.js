var moveZeros = function (arr) {
  let i = 0;
  arr.map((cur) => {
    if (cur === 0) {
      i++;
    }
  });
  const result = arr.filter((cur) => cur !== 0);

  for (let n = 0; n < i; n++) {
    result.push(0);
  }

  return result;
};

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
