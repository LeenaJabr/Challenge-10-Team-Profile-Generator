const Manager = require("../lib/manager");
const manager = new Manager("Leena", "001", "Leena@me.com", "343");

describe("manager.officeNumber", () => {
  it("should display the manager's office number", () => {
    expect(manager.officeNumber).toEqual("343");
  });
});

describe("getOfficeNumber()", () => {
  it("should retrieve the managers office number using the getOfficeNumber method", () => {
    expect(manager.getOfficeNumber()).toEqual("343");
  });
});

describe("getRole()", () => {
  it("should retrieve the role of manager using the getRole method", () => {
    expect(manager.getRole()).toEqual("Manager");
  });
});