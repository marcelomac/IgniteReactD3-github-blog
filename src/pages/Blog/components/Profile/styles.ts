import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  height: 212px;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    strong {
      font-size: 2rem;
      color: ${(props) => props.theme["base-title"]};
      font-weight: bold;
    }

    a {
      display: flex;
      font-size: 1rem;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
  }

  p {
    margin-top: 0.75rem;
    font-size: 1rem;
    ${(props) => props.theme["base-title"]};
  }

  footer {
    display: flex;
    margin-top: 3rem;
    gap: 2rem;
  }
`;
