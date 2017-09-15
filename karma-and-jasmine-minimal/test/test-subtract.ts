///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
///<reference path="../src/subtract.ts"/>

describe("subtract method", () => {
    it("subtracts 2 numbers", () => {
        expect(subtract(2, 4)).toBe(-3);
    });
});