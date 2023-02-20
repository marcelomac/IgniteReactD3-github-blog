import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 0; /* superior | horizontal | inferior */
  margin: 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
