///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
///<reference path="../node_modules/@types/karma-fixture/index.d.ts"/>

describe("some test that needs a fixture", () => {
    beforeAll(() => {
        // if base path is different from the default `spec/fixtures`:
        fixture.setBase("served");
    });

    beforeEach(() => {
        this.result = fixture.load("test1.html", "test1.json");
    });

    afterEach(() => {
        fixture.cleanup();
    });

    it("plays with the html fixture", () => {
        console.log("fixture.el.firstChild:", JSON.stringify(fixture.el.firstChild));
        expect(fixture.el.firstChild).toEqual(this.result[0][0]);
    });
});