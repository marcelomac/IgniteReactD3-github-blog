import styled from "styled-components";

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  height: 212px;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme["blue"]};
      font-size: 1rem;
      gap: 0.5rem;
      cursor: pointer;
    }
  }
  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
    justify-items: left;
  }
  p {
    margin-top: 0.75rem;
    font-size: 1rem;
    ${(props) => props.theme["base-title"]};
  }
  footer {
    display: flex;
    margin-top: 0.5rem;
    gap: 2rem;
    
    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`;
