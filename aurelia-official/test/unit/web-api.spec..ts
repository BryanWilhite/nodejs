import { App } from "../../src/app";
import { WebAPI } from "../../src/web-api"

var api: WebAPI

beforeAll(function () { api = new WebAPI(); });

describe("the Web API", () => {
  it("can construct", () => {
    expect(api).toBe(null);
  });
  it("promises to load a list of contacts", (done) => {
    api.getContactList().then((result) => {
      expect(result).not.toBe(null);
      //expect(result.length).toBeGreaterThan(0);
    });
  });
});
