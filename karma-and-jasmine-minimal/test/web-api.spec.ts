///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
///<reference path="../src/web-api.ts"/>

var api: WebAPI, contactList: Array<{}>, contactDetail: {}

beforeAll(function () { api = new WebAPI(); });

describe("the Web API", () => {
  it("can construct", () => {
    expect(api).not.toBe(null);
  });
  it("promises to load a list of contacts", (done) => {
    api.getContactList().then((result: Array<{}>) => {
      contactList = result;
      expect(contactList).not.toBe(null);
      expect(contactList.length).toBeGreaterThan(0);
      console.log(`contact list: ${JSON.stringify(contactList)}`);
      done();
    });
  });
  it("promises to load contact detail", (done) => {
    var randomIndex = Math.floor(Math.random() * contactList.length) + 1;
    console.log(`random index: ${randomIndex}`);
    api.getContactDetails(randomIndex).then((result: {}) => {
      contactDetail = result;
      expect(contactDetail).not.toBe(null);
      console.log(`contact detail: ${JSON.stringify(contactDetail)}`);
      done();
    });
  });
});
