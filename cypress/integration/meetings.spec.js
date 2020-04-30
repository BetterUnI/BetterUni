context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.login();
    cy.visit("http://localhost:3000/meetings");
    cy.wait(600);
  });

  it("Start video call with the first user", () => {
    cy.get(".cp-userview")
      .first()
      .click();
    cy.get(".cp-chathead-buttons").click();
    cy.get(".cp-outgoing-call-screen");
    cy.get(".m-a")
      .first()
      .contains("Calling...");
  });

  it("Send a text message to the last user", () => {
    cy.get(".cp-userview")
      .last()
      .click();
    cy.get('input[id="messageInput"]').type("Hello{enter}");
    cy.wait(500);
    cy.get(".cp-sender-message")
      .last()
      .contains("Hello");
  });

  it("Select conversation from message history", () => {
    cy.get("button")
      .last()
      .click({ force: true });
    cy.get(".cp-conversationview")
      .first()
      .click();
  });
});
