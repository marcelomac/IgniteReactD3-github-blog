import { useForm } from "react-hook-form";
import { SearchFormComponents, SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { BlogContext } from "../../../../contexts/BlogContext";

/**
 * zod: biblioteca para schema e validação de formulários
 * @hookform/resolvers: Esta função permite que você use qualquer biblioteca de validação externa,
 *    como Yup, Zod, Joi, Vest, Ajv e muitos outros. O objetivo é garantir que você possa integrar
 *    perfeitamente qualquer biblioteca de validação de sua preferência.
 *  */

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  // https://app.rocketseat.com.br/node/projeto-03/group/conexao-com-a-api/lesson/aplicando-react-hook-form
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const { totalIssues, fetchIssues } = useContext(BlogContext);

  // data: valores dos campos do formulário
  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <strong>Publicações</strong>
        <span>{totalIssues} publicações</span>
      </header>

      <SearchFormComponents>
        <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
      </SearchFormComponents>
    </SearchFormContainer>
  );
}
