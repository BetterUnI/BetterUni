import React from "react";
import { ForgotPassword } from "aws-amplify-react";
import { styled } from "@material-ui/styles";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import "./ResetPassword.css";

export class ResetPassword extends ForgotPassword {
  constructor(props) {
    super(props);
    this._validAuthStates = ["forgotPassword"];
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
      backgroundImage: "url(/images/tuhooter.jpg)",
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
      fontWeight: 900,
      padding: 50,
      paddingTop: 120,
      textShadow: "2px 4px 3px rgba(0,0,0,0.3);"
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

    const StyledButton = styled(Button)({
      marginTop: 20
    });

    return (
      <>
        <RootDiv style={{ height: "100vh" }}>
          <StyledGrid container>
            <Grid item lg={5} className="hide-hero-md-down">
              <Quote>
                <QuoteInner>
                  <QuoteText variant="h2">
                    BetterUni helps students find the campus resources they need
                    when they need them.
                  </QuoteText>
                </QuoteInner>
              </Quote>
            </Grid>
            <ContentGrid item lg={7} xs={12}>
              <ContentDiv>
                <ContentBodyDiv>
                  <Form className="px-2">
                    <Title variant="h2" style={{ fontWeight: 700 }}>
                      Reset your password
                    </Title>
                    <Title variant="h3" style={{ fontWeight: 700 }}>
                      1. Receive a confirmation code
                    </Title>
                    <StyledTextField
                      id="username"
                      key="username"
                      name="username"
                      onChange={this.handleInputChange}
                      label="Email address"
                      fullWidth
                      variant="outlined"
                    />
                    <StyledButton
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                      onClick={() => super.send()}
                    >
                      Send Code
                    </StyledButton>
                    <Title variant="h3" style={{ fontWeight: 700 }}>
                      2. Use that code to reset your password
                    </Title>
                    <StyledTextField
                      id="code"
                      key="code"
                      name="code"
                      onChange={this.handleInputChange}
                      label="Confirmation Code *"
                      fullWidth
                      variant="outlined"
                    />
                    <StyledTextField
                      id="password"
                      key="password"
                      name="password"
                      onChange={this.handleInputChange}
                      type="password"
                      label="New Password"
                      fullWidth
                      variant="outlined"
                    />
                    <StyledButton
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                      onClick={() => super.submit()}
                    >
                      Submit
                    </StyledButton>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      style={{ marginTop: 20 }}
                    >
                      Back to{" "}
                      <span
                        onClick={() => super.changeState("signIn")}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer"
                        }}
                      >
                        Sign In
                      </span>
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
