function toCamelCase(str) {
  const arr = str.split("");

  arr.forEach((cur, index, array) => {
    if (cur === "_" || cur === "-") {
      array.splice(array.indexOf(cur), 2, array[index + 1].toUpperCase());
    }
  });
  return arr.join("");
}
