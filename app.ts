const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'ken',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};

person.role　= [1, 'admin']

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}