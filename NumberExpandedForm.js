function expandedForm(num) {
  const arrNums = num.toString().split("");

  let separateArr = [];

  arrNums.forEach((cur, index, array) => {
    if (cur !== 0)
      separateArr.push(`${cur * Math.pow(10, array.length - (index + 1))}`);
  });

  let result = separateArr.filter((cur) => cur !== "0").join(" + ");
  return result;
}

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
