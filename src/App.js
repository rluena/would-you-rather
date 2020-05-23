import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/elements";
import { CardScore } from "./components/modules";
import { defaultTheme } from "./components/theme";
import { GlobalStyle } from "./components/theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div>
          <h2>Application Elements</h2>
          <br />
          <div>
            <Button.primary small>Button Primary</Button.primary>
            <Button.primary>Button Primary</Button.primary>
            <Button.primary large>Button Primary</Button.primary>
            <br />
            {/* <Button.primary success>Button Primary</Button.primary> */}
            <Button.primary warning small>
              Button Primary
            </Button.primary>
            <Button.primary warning>Button Primary</Button.primary>
            <Button.primary warning large>
              Button Primary
            </Button.primary>
            <br />
            <br />
            <Button.primary danger small>
              Button Primary
            </Button.primary>
            <Button.primary danger>Button Primary</Button.primary>
            <Button.primary danger large>
              Button Primary
            </Button.primary>
            <br />
            <br />
          </div>

          <h2>Application Modules</h2>
          <br />
          {/* Start: CardScore component */}
          <CardScore
            heading="Rabii Luena"
            imgSrc="https://randomuser.me/api/portraits/men/0.jpg"
          />
          {/* End: CardScore component */}
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
