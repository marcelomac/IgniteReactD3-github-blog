import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing : border-box;
}

:focus {
  outline: 0;
  box-Shadow: 0 0 0 2px ${(props) => props.theme["base-title"]};
}

body {
  background-color: ${(props) => props.theme["base-background"]};
  color: ${(props) => props.theme["base-text"]};
  -webkit-font-smoothing: antiatiased;
}

body, input, button {
  font: 400 1rem Nunito, sans-serif;
}

a[id="link"] {
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: bold;
  color: ${(props) => props.theme["blue"]};
  border-bottom: 1px solid transparent;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
}

a {
    text-decoration: none;
    color: unset;
  }
`;
