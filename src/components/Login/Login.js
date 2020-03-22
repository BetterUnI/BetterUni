import React from "react";
import { SignIn } from "aws-amplify-react";
import { styled } from "@material-ui/styles";
import { Grid, TextField, Typography, Button } from "@material-ui/core";

export class Login extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent() {
    const RootDiv = styled("div")({
      backgroundColor: "#F4F6F8",
      height: "100%"
    });

    const StyledGrid = styled(Grid)({
      height: "100%"
    });

    const Quote = styled("div")({
      backgroundColor: "#FFFFFF",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url(/images/auth-hero.jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    });

    const QuoteInner = styled("div")({
      textAlign: "center",
      flexBasis: "600px"
    });

    const QuoteText = styled(Typography)({
      color: "#FFFFFF",
      fontWeight: 300
    });

    const ContentGrid = styled(Grid)({
      height: "100%",
      display: "flex",
      flexDirection: "column"
    });

    const ContentDiv = styled("div")({
      height: "100%",
      display: "flex",
      flexDirection: "column"
    });

    const ContentBodyDiv = styled("div")({
      flexGrow: 1,
      display: "flex",
      alignItems: "center"
    });

    const Form = styled("form")({
      paddingLeft: 100,
      paddingRight: 100,
      paddingBottom: 125,
      flexBasis: 700
    });

    const Title = styled(Typography)({
      marginTop: 30
    });

    const StyledTextField = styled(TextField)({
      display: "block",
      marginTop: 20
    });

    const SignInButton = styled(Button)({
      marginTop: 20
    });

    return (
      <>
        <RootDiv style={{ height: "100vh" }}>
          <StyledGrid container>
            <Grid item lg={5}>
              <Quote>
                <QuoteInner>
                  <QuoteText variant="h2">
                    BetterUni lorem ipsum dolor sit, amet consectetur
                    adipisicing elit.
                  </QuoteText>
                </QuoteInner>
              </Quote>
            </Grid>
            <ContentGrid item lg={7} xs={12}>
              <ContentDiv>
                <ContentBodyDiv>
                  <Form onSubmit={e => super.signIn(e)}>
                    <Title variant="h2" style={{ fontWeight: 700 }}>
                      Sign in
                    </Title>
                    <StyledTextField
                      id="username"
                      key="username"
                      name="username"
                      onChange={this.handleInputChange}
                      type="text"
                      label="Email address"
                      fullWidth
                      autocomplete="off"
                    />
                    <StyledTextField
                      id="password"
                      key="password"
                      name="password"
                      onChange={this.handleInputChange}
                      type="password"
                      label="Password"
                      fullWidth
                      autocomplete="off"
                    />
                    <p>
                      Forgot your password?{" "}
                      <span
                        onClick={() => super.changeState("forgotPassword")}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer"
                        }}
                      >
                        Reset Password
                      </span>
                    </p>
                    <SignInButton
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                      type="submit"
                    >
                      Sign in
                    </SignInButton>
                    <Typography color="textSecondary" variant="body1">
                      <p>
                        No Account?{" "}
                        <span
                          onClick={() => super.changeState("signUp")}
                          style={{
                            textDecoration: "underline",
                            cursor: "pointer"
                          }}
                        >
                          Create an account
                        </span>
                      </p>
                    </Typography>
                  </Form>
                </ContentBodyDiv>
              </ContentDiv>
            </ContentGrid>
          </StyledGrid>
        </RootDiv>
      </>
    );
  }
}
