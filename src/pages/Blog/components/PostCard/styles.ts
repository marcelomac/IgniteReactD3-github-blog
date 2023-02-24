import styled from 'styled-components';

export const PostCardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 1rem;
  transition: border 0.2s;

  &:hover {
    border-color: ${(props) => props.theme['base-border']};
  }

  header {
    display: flex;
    justify-content: space-between;
    
    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      min-width: 3.25rem;
      font-size: 0.75rem;
      color: ${(props) => props.theme["base-span"]};
      white-space: nowrap;
    }
  }

  p {
    max-height: 8rem;
    margin-top: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;
