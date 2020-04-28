context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Contains Sign In Button", () => {
    cy.get("button").contains("Sign in");
  });

  it("Contains Create an Account", () => {
    cy.get("p").contains("No Account?");
    cy.get("span").contains("Create an account");
  });

  it("Contains Forgot Password", () => {
    cy.get("p").contains("Forgot your password?");

    cy.get("span").contains("Reset Password");
  });

  it("No Username or Password", () => {
    cy.get('input[id="password"]').type("{enter}");

    cy.get("span").contains("Username cannot be empty");
  });

  it("User Does Not Exist", () => {
    cy.get('input[id="username"]').type("invalid.username@temple.edu");
    cy.get('input[id="password"]').type("password{enter}");

    cy.get("span").contains("User does not exist");
  });

  it("Incorrect Password", () => {
    cy.get('input[id="username"]').type("davis.samuel@temple.edu");
    cy.get('input[id="password"]').type("invalidpassword{enter}");

    cy.wait(500);

    cy.get("span").contains("Incorrect username or password");
  });

  it("Sucessful Login", () => {
    cy.get('input[id="username"]').type("davis.samuel@temple.edu");
    cy.get('input[id="password"]').type("password{enter}");

    cy.wait(500);

    cy.get('[data-test="verify-contact-skip-link"]').click();

    cy.url().should("include", "/home");
  });
});
