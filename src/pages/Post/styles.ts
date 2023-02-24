import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  p {
    max-height: 10rem;
    margin-top: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

export const PostInfoContainer = styled.section`
  position: relative;
  margin-top: -88px;
  z-index: 2;
`
