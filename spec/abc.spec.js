// import Bilzaa2d from "../build/bundle.js";
let bilzaa = require("../build/bundle_cjs");
describe("my first suite", function() {
    it("First suite", function() {
      expect(true).toBe(true);
    });
});