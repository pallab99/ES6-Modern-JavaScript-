let map = new Map();
map.set("name", "Pallab");
console.log(map);

console.log(map.has("name"));

map.set("age", 22);

console.log(map.get("age"));
// map.delete("name")

// map.clear()

console.log(map.size);

map.set([1, 2], [1, 2]);
console.log(map);
