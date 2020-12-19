const person = {
    name: 'ken',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}