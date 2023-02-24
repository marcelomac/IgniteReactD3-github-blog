import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { NavLink } from "react-router-dom";
import { PostCardContainer } from "./styles";

interface PostType {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

interface PostProps {
  post: PostType;
}

export function PostCard({ post }: PostProps) {
  const relativeDate = formatDistanceToNow(new Date(post.created_at), { locale: ptBR, addSuffix: true });

  const body = <ReactMarkdown includeElementIndex>{post.body}</ReactMarkdown>;

  return (
    <NavLink to={`/post/${post.number}`} title={post.title}>
      <PostCardContainer>
        <header>
          <strong>{post.title}</strong>
          <span>
            <time>{relativeDate}</time>
          </span>
        </header>
        <p>{body}</p>
      </PostCardContainer>
    </NavLink>
  );
}
