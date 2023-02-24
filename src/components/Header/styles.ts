import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 0;
  position: relative;
  background-color: ${(props) => props.theme["base-profile"]};

  img {
    z-index: 2;

    &:nth-of-type(1) {
      margin-top: 24px;
    }

    &:nth-of-type(2) {
      margin-top: 34px;
    }
  }

`;


export const BottomRectangleEffect = styled.img`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
`

// export const HeaderContent = styled.div`
//   width: 100%;
//   height: 296px;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
