const map = new Map<number, string>([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [4, 'quarto'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven']
]);
console.log(`map.size: ${map.size}`);
console.log(`map.get(4): ${map.get(4)}`);

const json = '{ "1": "one", "2": "two", "3": "three", "4": "four" }';
const dictionary = JSON.parse(json) as { [index: number]: string; };
const parsedMap = new Map<number, string>();
for (const i in dictionary) {
    if (!dictionary.hasOwnProperty(i)) { continue; }
    console.log(`dictionary[${i}]: ${dictionary[i]}`);
    parsedMap.set(parseInt(i, 10), dictionary[i]);
}
console.log(`parsedMap.size: ${parsedMap.size}`);
console.log(`parsedMap.get(4): ${parsedMap.get(4)}`);
