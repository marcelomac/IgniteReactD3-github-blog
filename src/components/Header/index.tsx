import { HeaderContainer, HeaderContent } from "./styles";

import logoImg from "../../assets/logo.svg";
import effect_left from "../../assets/effect_left.png";
import effect_right from "../../assets/effect_right.png";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={effect_left} height="188" width="409" alt="" />
        <img src={logoImg} height="98" width="148" alt="" />
        <img src={effect_right} height="236" width="371" alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
