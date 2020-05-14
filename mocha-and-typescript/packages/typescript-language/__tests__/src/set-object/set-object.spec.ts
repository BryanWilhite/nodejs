describe('Set<number>', function () {
    const set = new Set([3, 6, 9, 12, 15, 18, 21, 24]);
    const a = Array.from(set);

    const displaySet = (s: Set<number>) => {
        let msg = '';
        s.forEach(i => (msg += `${i},`));
        return msg.slice(0, -1);
    };

    it('can be compared to an `Array`', function () {
        console.log(`Set: ${displaySet(set)}`);
        console.log(`Array: ${a}`);
    });

    it('has `.has()` which is like `Array.indexOf() !== -1`', function () {
        console.log(`Set.has(15): ${set.has(15)}`);
        console.log(`Array.indexOf(15): ${a.indexOf(15) !== -1}`);
    });

    it('has `.add()` which is like Array.push()', function () {
        set.add(15);
        console.log(`Set.add(15): ${displaySet(set)}`);

        a.push(15);
        console.log(`Array.push(15): ${a}`);
    });

    it('has `.delete()` which is like Array.splice(i, 1)', function () {
        set.delete(15);
        console.log(`Set.delete(15): ${displaySet(set)}`);

        a.splice(a.indexOf(15), 1);
        console.log(`Array.splice(a.indexOf(15)): ${a}`);
    });
});
