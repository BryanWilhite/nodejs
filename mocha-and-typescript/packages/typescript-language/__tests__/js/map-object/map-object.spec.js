describe('Map<number, string>', function () {
    it('is a more intentional alternative to `{}`', function () {
        const map = new Map([
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
    });
    it('can be parsed from JSON', function () {
        const json = '{ "1": "one", "2": "two", "3": "three", "4": "four" }';
        const dictionary = JSON.parse(json);
        const parsedMap = new Map(Object
            .keys(dictionary)
            .map(i => [+i, dictionary[+i]]));
        console.log(`parsedMap.size: ${parsedMap.size}`);
        console.log(`parsedMap.get(4): ${parsedMap.get(4)}`);
    });
});
export {};
