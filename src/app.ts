function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });

interface Lengthy {
  length: number;
}

function countAndDescription<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません。";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です。";
  }
  return [element, descriptionText];
}

console.log(countAndDescription(["Sports", "Cooking"]));

function extractrAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractrAndConvert({ name: "Max" }, "name");
