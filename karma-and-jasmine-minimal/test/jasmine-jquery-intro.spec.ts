///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
///<reference path="../node_modules/@types/jasmine-jquery/index.d.ts"/>
///<reference path="../node_modules/@types/karma-jasmine/index.d.ts"/>
/// <reference path="../../typings-jquery/node_modules/@types/jquery/index.d.ts" />

describe("karma-jasmine-jquery framework", () => {
    jasmine.getFixtures().fixturesPath = "base/served";
    it("has an HTML file", () => {
        loadFixtures("test1.html");

        let p: JQuery<Element> = <JQuery<Element>>jQuery("#test1");
        expect(p).not.toBeNull();
        expect(p.length).toEqual(1);
        expect(p.text()).toEqual("p");

        // or use karma-jasmine-jquery:
        expect(p).toContainText("p");

        let a: JQuery<Element> = <JQuery<Element>>jQuery(".test1");
        expect(a).not.toBeNull();
        expect(a.length).toEqual(1);
        expect(a.attr("href")).toEqual("#");

        let span: JQuery<Element> = <JQuery<Element>>jQuery("span", a);
        expect(span).not.toBeNull();
        expect(span.length).toEqual(1);
        expect(span.text()).toEqual("content of inline element");
    });

    jasmine.getJSONFixtures().fixturesPath = "base/served";
    it("has a JSON file", () => {
        let data: any = getJSONFixture("test1.json");
        expect(data.test).toBeDefined();
        expect(data.test).toBe(true);
    });

});