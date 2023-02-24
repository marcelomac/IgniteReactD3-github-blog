import { BottomRectangleEffect, HeaderContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import effect_left from "../../assets/effect_left.png";
import effect_right from "../../assets/effect_right.png";
import bottomEffectImg from '../../assets/bottom_effect.svg'
export function Header() {
  return (
    <HeaderContainer>
        <img src={effect_left} alt="" />
        <img src={logoImg} className="logo" height="98" width="148" alt="" />
        <img src={effect_right} alt="" />
        <BottomRectangleEffect src={bottomEffectImg} alt="" />
    </HeaderContainer>
  );
}
