import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "./styles";

interface LinkProps {
  url: string;
  title: string;
  icon: IconDefinition;
  iconSide?: 'right' | 'left';
}

export function Link({ url, title, icon, iconSide = 'right' }: LinkProps) {
  return (
    <LinkContainer>
      <a href={url} id="link" target="_blank">
        {(iconSide === 'left') && <FontAwesomeIcon icon={icon} />}
        {title}
        {(iconSide === 'right') && <FontAwesomeIcon icon={icon} />}
      </a>
    </LinkContainer>
  );
}
