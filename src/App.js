import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components";
import { defaultTheme } from "./components/theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div>
          <h2>Application Components</h2>
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
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
