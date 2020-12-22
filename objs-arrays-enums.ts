enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "ken",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person);

if (person.role == Role.ADMIN) {
    console.log("管理者ユーザ");
}