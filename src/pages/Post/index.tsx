import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostInfo } from "./components/PostInfo";
import { PostContainer, PostInfoContainer } from "./styles";

interface PostTypeResponse {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
  body: string;
  created_at: string;
  comments: number;
}

interface PostType {
  id: number;
  html_url: string;
  title: string;
  author: string;
  comments: number;
  created_at: string;
  body: string;
}

export function Post() {
  const { postNumber } = useParams();
  const [post, setPost] = useState<PostType>({} as PostType);

  async function loadPostData() {
    const response = await api.get(
      `/repos/${import.meta.env.VITE_GITHUB_USER}/${
        import.meta.env.VITE_GITHUB_REPO
      }/issues/${postNumber}`
    );

    const data: PostTypeResponse = response.data;

    console.log("data: ", data);

    setPost({
      id: data.id,
      html_url: data.html_url,
      title: data.title,
      author: data.user.login,
      comments: data.comments,
      created_at: data.created_at,
      body: data.body,
    });
  }

  useEffect(() => {
    loadPostData();
  }, []);

  return (
    <PostContainer>
      <PostInfoContainer>
        <PostInfo data={post} />
      </PostInfoContainer>
    </PostContainer>
  );
}
