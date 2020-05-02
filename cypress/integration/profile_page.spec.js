context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.login();
    cy.visit("http://localhost:3000/profile");
    cy.wait(600);
  });

  it("Profile page contains the calendar component with the appropriate toolbar", () => {
    cy.get(".rbc-calendar").contains("Today");
    cy.get(".rbc-calendar").contains("Back");
    cy.get(".rbc-calendar").contains("Next");
    cy.get(".rbc-calendar").contains("Month");
    cy.get(".rbc-calendar").contains("Week");
    cy.get(".rbc-calendar").contains("Day");
    cy.get(".rbc-calendar").contains("May");
  });

  it("Calendar contains 'test' meeting", () => {
    cy.get(".rbc-calendar").contains("test");
  });
});
