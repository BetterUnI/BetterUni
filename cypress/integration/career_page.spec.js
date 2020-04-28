context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    cy.login();

    cy.visit("http://localhost:3000/career");
  });

  // Cannot access the links through Cypress due to CORS error (Would require changing Chrome settings)
  // Only tests if the links are there
  it("Link should work", () => {
    cy.get("tr > td")
      .get("a")
      .should("have.attr", "href");
  });
});
