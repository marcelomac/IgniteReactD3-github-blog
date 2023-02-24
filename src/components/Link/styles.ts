import styled from "styled-components";

export const LinkContainer = styled.div`
  a {
    color: ${(props) => props.theme["blue"]};
    font-size: 1rem;
    gap: 0.5rem;
    text-decoration: none;
  }
`;
