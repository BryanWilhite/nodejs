import {App} from "../../src/app";
import {WebAPI} from "../../src/web-api"

describe("the app", () => {
  it("has a router", () => {
    expect(new App(new WebAPI()).router).toBeDefined();
    expect(new App(new WebAPI()).router).not.toBe(null);
  });
});
