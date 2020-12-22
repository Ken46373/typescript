type Comvinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Comvinable,
  input2: Comvinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(26, 22, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(26, 22, "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
