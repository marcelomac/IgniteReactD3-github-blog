import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProfileContainer, ProfileContent } from "./styles";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";
import { InfoDetail } from "../../../../components/InfoDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProfileProps {
  id: number;
  login: string;
  name: string;
  html_url: string;
  avatar_url: string;
  company: string;
  bio: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileProps>({} as ProfileProps);


  async function loadProfileData() {
    const response = await api.get(`/users/${import.meta.env.VITE_GITHUB_USER}`);

    setProfileData(response.data);
  }

  useEffect(() => {
    loadProfileData();
  }, []);

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />
      <ProfileContent>
        <header>
          <strong>{profileData.name}</strong>

          <a href={profileData.html_url} target="_blank" id="link" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>{profileData.bio}</p>

        <footer>
          <InfoDetail icon={faGithub} info={profileData.login} />
          <InfoDetail icon={faBuilding} info={profileData.company} />
          <InfoDetail icon={faUserGroup} info={`${profileData.followers} seguidores`} />
        </footer>
      </ProfileContent>
    </ProfileContainer>
  );
}
