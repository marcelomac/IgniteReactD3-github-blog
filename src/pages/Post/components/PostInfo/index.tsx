import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { InfoDetail } from "../../../../components/InfoDetail";
import { PostInfoContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface PostInfoType {
  id: number;
  title: string;
  html_url: string;
  author: string;
  body: string;
  created_at: string;
  comments: number;
}

interface PostInfoProps {
  data: PostInfoType;
}

export function PostInfo({ data }: PostInfoProps) {
  const relativeDate = formatDistanceToNow(new Date("2023-02-22T12:10:39Z"), {
    locale: ptBR,
    addSuffix: true,
  });
  const commentsAmount = String(data.comments);
  const navigate = useNavigate();
  const body = <ReactMarkdown includeElementIndex>{data.body}</ReactMarkdown>;

  return (
    <PostInfoContainer>
      <header>
        <a id="link" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a href={data.html_url} id="link" target='_blank'>
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <strong>{data.title}</strong>

      <footer>
        <InfoDetail icon={faGithub} info={data.author} />
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>
            <time>{relativeDate}</time>
          </span>
        </div>
        <InfoDetail icon={faComment} info={commentsAmount} />
      </footer>

      {body}
    </PostInfoContainer>
  );
}