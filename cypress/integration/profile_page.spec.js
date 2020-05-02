context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.login();
    cy.visit("http://localhost:3000/profile");
    cy.wait(600);
  });

  it("Contains All 3 Tables & Welcome Bar", () => {
    cy.get("div").contains("Upcoming Meetings");
    cy.get("div").contains("Career Events");
    cy.get("div").contains("Advising Offices");
    cy.get("div").contains("Welcome to BetterUni");
  });

  it("Link should work", () => {
    cy.get("tr > td")
      .get("a")
      .should("have.attr", "href");
  });
});
