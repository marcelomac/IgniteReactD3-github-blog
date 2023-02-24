import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  header {
    background-color: ${(props) => props.theme["base-background"]};
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  
`;

export const SearchFormComponents = styled.div`
  display: flex;
  align-items: center;
  
  input {
    width: 100%;
    border: 0;
    margin-top: 0.75rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
  
  button {
    width: 0px;
    height: 0px;
    margin-top: 0.75rem;
    visibility: hidden;
  }

`;
