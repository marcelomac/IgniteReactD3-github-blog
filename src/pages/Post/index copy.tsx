import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { PostInfoContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { InfoDetail } from "../../components/InfoDetail";
import axios from "axios";

interface PostType {
  id: number;
  title: string;
  html_url: string;
  author: string;
  body: string;
  created_at: string;
  comments: number;
}

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

export function Post() {
  const { postNumber } = useParams();
  const [post, setPost] = useState<PostType>({} as PostType);
  const urlRepo = `${import.meta.env.VITE_GITHUB_USER}/${import.meta.env.VITE_GITHUB_REPO}`;

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get(`/repos/${urlRepo}/issues/${postNumber}`);
      const data: PostTypeResponse = response.data;

      console.log("data: ", data);
      console.log("author: ", data.user.login);
      console.log("created_at: ", data.created_at);

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

    loadPosts();
  }, []);

  console.log("post: ", post);

  const relativeDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true,
  });
  // console.log("relativeDate: ", relativeDate);

  console.log("post: ", post);

  const commentsAmount = String(post.comments);
  const navigate = useNavigate();
  const body = <ReactMarkdown includeElementIndex>{post.body}</ReactMarkdown>;

  return (
    <PostInfoContainer>
      <header>
        <a id="link" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a href={post.html_url} id="link" target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <strong>{post.title}</strong>

      <footer>
        <InfoDetail icon={faGithub} info={post.author} />
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{relativeDate}</span>
        </div>
        <InfoDetail icon={faComment} info={commentsAmount} />
      </footer>

      {body}
    </PostInfoContainer>
  );
}
