import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoDetailContainer } from "./styles";

interface InfoDetailProps {
  icon: IconDefinition;
  info: string;
}

export function InfoDetail({ icon, info }: InfoDetailProps) {
  return (
    <InfoDetailContainer>
      <FontAwesomeIcon icon={icon} />
      <span>{info}</span>
    </InfoDetailContainer>
  );
}
