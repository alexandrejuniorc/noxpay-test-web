import { getAllCriptos } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const Teste = () => {
  const { data: cripto } = useQuery({
    queryKey: ["get-all-criptos"],
    queryFn: getAllCriptos,
  });

  return <pre>{JSON.stringify(cripto, null, 2)}</pre>;
};
