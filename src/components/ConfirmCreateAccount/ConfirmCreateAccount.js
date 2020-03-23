import React from "react";
import { ConfirmSignUp } from "aws-amplify-react";
import { styled } from "@material-ui/styles";
import { Grid, TextField, Typography, Button } from "@material-ui/core";

export class ConfirmCreateAccount extends ConfirmSignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
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
      fontWeight: 300,
      padding: 50
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

    const SubmitButton = styled(Button)({
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
                  <Form>
                    <Title variant="h2" style={{ fontWeight: 700 }}>
                      Confirm new account
                    </Title>
                    <StyledTextField
                      id="username"
                      key="username"
                      name="username"
                      onChange={this.handleInputChange}
                      value={
                        this.props.authData.username
                          ? this.props.authData.username
                          : this.props.authData
                      }
                      disabled={true}
                      label="Email address"
                      fullWidth
                      variant="outlined"
                    />
                    <StyledTextField
                      id="code"
                      key="code"
                      name="code"
                      onChange={this.handleInputChange}
                      label="Confirmation Code *"
                      fullWidth
                      variant="outlined"
                    />
                    <SubmitButton
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                      onClick={() => super.confirm()}
                    >
                      Confirm Account Creation
                    </SubmitButton>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      style={{ marginTop: 20 }}
                    >
                      Lost your code?{" "}
                      <span
                        onClick={() => super.resend()}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer"
                        }}
                      >
                        Resend Code
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
