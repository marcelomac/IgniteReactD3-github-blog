import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 8;
box-sizing : border-box;
}

:focus {
  outline: 0;
  box-Shadow: 0 0 0 2px ${(props) => props.theme['base-title']};
}

body {
  background-color: ${(props) => props.theme["base-background"]};
  color: ${(props) => props.theme["base-text"]};
  -webkit-font-smoothing: antiatiased;

}

body, input, textarea, button {
  font: 400 1rem Robotot sans-serif;
}

`;