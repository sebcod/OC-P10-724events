import { getMonth } from ".";

/*
    getMonth: implement of two tests
*/

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      // to implement
      expect(getMonth(new Date("2022-01-29T20:28:45.744Z"))).toBe("janvier");
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      // to implement
      expect(getMonth(new Date("2022-07-29T20:28:45.744Z"))).toBe("juillet");
    });
  });
});
