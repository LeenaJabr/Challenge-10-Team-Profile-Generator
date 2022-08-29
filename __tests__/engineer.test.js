const Engineer = require("../lib/engineer");
const engineer = new Engineer("Leena", "001", "Leena@me.com", "LeenaJabr");

describe("engineer.githubUsername", () => {
  it("should return the github user name of the engineer", () => {
    expect(engineer.GithubUsername).toEqual("LeenaJabr");
  });
});

describe("engineer.getGithubUsername", () => {
  it("should return the github user name of the engineer using the getGithubUsername() method", () => {
    expect(engineer.getGithubUsername()).toEqual("LeenaJabr");
  });
});

describe("engineer.getRole", () => {
  it("should return the role of Engineer using the getRole() method", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});