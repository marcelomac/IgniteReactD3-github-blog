import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface IssuesTypeResponse {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

interface BlogContextType {
  issues: IssuesTypeResponse[];
  totalIssues: number
  fetchIssues: (query?: string) => Promise<void>;
}

export const BlogContext = createContext({} as BlogContextType);

interface BlogProviderProps {
  children: ReactNode;
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [issues, setIssues] = useState<IssuesTypeResponse[]>([]);

  const totalIssues = issues.length;

  async function fetchIssues(query?: string) {
    query = query ? query : "";
    const response = await api.get(
      `/search/issues?q=${query}repo:${import.meta.env.VITE_GITHUB_USER}/${import.meta.env.VITE_GITHUB_REPO}`);

    const issuesData = response.data.items.map((issue: IssuesTypeResponse) => {
      return {
        id: issue.id,
        number: issue.number,
        title: issue.title,
        created_at: new Date(issue.created_at),
        body: issue.body,
      };
    });

    setIssues(issuesData);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <BlogContext.Provider value={{totalIssues, issues, fetchIssues }}>
      {children}
    </BlogContext.Provider>
  );
}
