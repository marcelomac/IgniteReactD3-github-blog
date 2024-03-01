import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { NavLink } from "react-router-dom";
import { PostCardContainer } from "./styles";

interface PostType {
  id: number;
  url: string;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

interface PostProps {
  post: PostType;
}

export function PostCard({ post }: PostProps) {
  const relativeDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true,
  });

  
  const body = (
    <ReactMarkdown
      components={{
       // a: 'em',
        a(props) {
          const {node, ...rest} = props
          return <i style={{textUnderlinePosition:"under"}} {...rest} />
        }
      }}
    >
      {post.body}
    </ReactMarkdown>
  );

  return (
    /**
     * Navegação para a rota do post
     * <Route path="/post/:postNumber" element={<Post />} />
     * 
     *     <NavLink to={`/post/${post.number}`} title={post.title}>
     */

    <NavLink to={`/post/${post.number}`}>
      <PostCardContainer>
        <header>
          <strong>{post.title}</strong>
          <span>
            <time>{relativeDate}</time>
          </span>
        </header>
        <div>{body}</div>
      </PostCardContainer>
    </NavLink>
  );
}
