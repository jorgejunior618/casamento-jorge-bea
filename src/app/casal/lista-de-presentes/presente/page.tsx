import { encontrarPresente } from "@/servicos/presentes";
import FormPresente from "@/components/views/FormPresente";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const obterPresente = async (id: string) => {
  const resp = await encontrarPresente(id);
  if (!resp.success) return undefined;

  return resp.data;
};

export default async function Presente({ searchParams }: PageProps) {
  const id = (await searchParams).id;
  let presente = undefined;
  if (id) presente = await obterPresente(id as string);

  return (
    presente &&
    typeof presente === "object" && <FormPresente presente={presente} />
  );
}
