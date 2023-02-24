import styled from 'styled-components';

export const InfoDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  ${(props) => props.theme["base-subtitle"]};
  img {
    width: 1.25rem;
    height: 1.25rem;
  }
  span {
    font-size: 1rem;
  }
`;