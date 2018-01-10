const set = new Set([3, 6, 9, 12, 15, 18, 21, 24]);
const a = Array.from(set);

const displaySet = (s: Set<number>) => {
    let msg = '';
    s.forEach(i => (msg += `${i},`));
    return msg.slice(0, -1);
};

console.log(`Set: ${displaySet(set)}`);
console.log(`Array: ${a}`);

console.log(`Set.has(15): ${set.has(15)}`);
console.log(`Array.indexOf(15): ${a.indexOf(15)}`);

set.add(15);
console.log(`Set.add(15): ${displaySet(set)}`);

a.push(15);
console.log(`Array.push(15): ${a}`);

set.delete(15);
console.log(`Set.delete(15): ${displaySet(set)}`);

a.splice(a.indexOf(15), 1);
console.log(`Array.splice(a.indexOf(15)): ${a}`);
