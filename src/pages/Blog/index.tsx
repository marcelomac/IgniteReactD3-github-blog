import { useContext } from "react";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { BlogContaiener, BlogList, ProfileContainer } from "./styles";
import { PostCard } from "./components/PostCard";
import { BlogContext } from "../../contexts/BlogContext";

export function Blog() {
  const { issues } = useContext(BlogContext)

  return (
    <BlogContaiener>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <SearchForm />
      <BlogList>
        {issues.map((issue) => {
          return <PostCard key={issue.id} post={issue}/>;
        })}
      </BlogList>
    </BlogContaiener>
  );
}
