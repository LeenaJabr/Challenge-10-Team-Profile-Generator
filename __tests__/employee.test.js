const Employee = require("../lib/Employee");
const employee = new Employee("Leena", "001", "Leena@me.com");

// * `name`
describe("employee.name", () => {
  it("should display the employee's name", () => {
    expect(employee.name).toEqual("Leena");
  });
});
// * `id`
describe("employee.id", () => {
  it("should display the employee's id", () => {
    expect(employee.id).toEqual("001");
  });
});
// * `email`
describe("employee.email", () => {
  it("should display the employee's email", () => {
    expect(employee.email).toEqual("Leena@me.com");
  });
});

// * `getName()`
describe("getName()", () => {
  it("should retrieve the name using the getName method", () => {
    expect(employee.getName()).toEqual("Leena");
  });
});
// * `getId()`
describe("getId()", () => {
  it("should retrieve the id using the getId method", () => {
    expect(employee.getId()).toEqual("001");
  });
});
// * `getEmail()`
describe("getEmail()", () => {
  it("should retrieve the email using the getEmail method", () => {
    expect(employee.getEmail()).toEqual("Leena@me.com");
  });
});
// * `getRole()`&mdash;returns `'Employee'`
describe("getRole()", () => {
  it("should retrieve the role of Employee using the getRole method", () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});