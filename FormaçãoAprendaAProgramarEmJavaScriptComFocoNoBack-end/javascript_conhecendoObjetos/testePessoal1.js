const items = [
    { name: "Ana", age: 25 },
    { name: "Ana", age: 26 },
];

items.sort((a, b) => {
if (a.name === b.name) return -1;
else return a.name.localeCompare(b.name);
});

console.log(items);