context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.login();
    cy.visit("http://localhost:3000/schedule");
    cy.wait(600);
  });

  it("Check if AdvisorList is initially hidden", function() {
    cy.get(".advisorList").should("not.exist");
  });

  it("Check if CategoryList is displayed correctly", function() {
    cy.get(".categoryList").should("exist");
  });

  it("Try to create a meeting with no time selected", function() {
    var alerted = false;
    cy.on('window:alert', msg => alerted = msg);
    cy.get(".categoryList")
      .contains("Counseling")
      .click();
    cy.wait(100);
    cy.get(".advisorList")
      .contains("Jane")
      .click();
    cy.get("Button").contains("Confirm")
      .click({ force: true }).then( () => expect(alerted).to.have.string('Please select a time before continuing!'));
     
      });
  });

  // it("Try to create a real meeting", function() {

  //   cy.get(".categoryList")
  //     .contains("Counseling")
  //     .click();
  //   cy.wait(100);
  //   cy.get(".advisorList")
  //     .contains("Jane")
  //     .click();
  //   cy.get('.makeStyles-content-188').click('center',{ force: true });
  //   const input = "testing cypress{enter}"
  //   const winPromptStub = () => {
  //       return input
  //   }
  //   cy.window().then(win => {
  //       cy.stub(win, 'prompt', winPromptStub)
  //   });
  //   cy.get("Button").contains("Confirm")
  //     .click({ force: true }).contains('successfully scheduled');
  //     });
  // });

});
