import { App } from "../../src/app";
import { WebAPI } from "../../src/web-api"

describe("the app", () => {
  it("can construct", () => {
    expect(new App(new WebAPI())).not.toBe(null);
  });
});
