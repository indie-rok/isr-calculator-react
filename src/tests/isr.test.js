const Assert = require("chai").assert;
const isr = require("../helpers/isr");

describe("isr", () => {
  it("should calculate the correct salary on range 1", () => {
    Assert.equal(isr(570), -396.08);
  });

  it("should calculate the correct salary on range 2", () => {
    Assert.equal(isr(4000), -152.38);
  });

  it("should calculate the correct salary on range 3", () => {
    Assert.equal(isr(8000), 624.5);
  });

  it("should calculate the correct salary on range 4", () => {
    Assert.equal(isr(9000), 752.29);
  });

  it("should calculate the correct salary on range 5", () => {
    Assert.equal(isr(12000), 1270.09);
  });

  it("should calculate the correct salary on range 6", () => {
    Assert.equal(isr(20000), 2978.54);
  });

  it("should calculate the correct salary on range 7", () => {
    Assert.equal(isr(30000), 5239.35);
  });

  it("should calculate the correct salary on range 8", () => {
    Assert.equal(isr(50000), 10709.43);
  });

  it("should calculate the correct salary on range 9", () => {
    Assert.equal(isr(80000), 19851.69);
  });

  it("should calculate the correct salary on range 10", () => {
    Assert.equal(isr(200000), 60308.01);
  });

  it("should calculate the correct salary on range 11", () => {
    Assert.equal(isr(300000), 94392.52);
  });
});
