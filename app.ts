function combine(input1: number | string, input2: number | string, resultConversion: 'as-text' | 'as-number') {
  let result;
  if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(26, 22, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine(26, 22, 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);
