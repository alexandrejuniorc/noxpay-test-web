'use client'
import { Teste } from "@/components/teste";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello World!</h1>

      <Teste />

      
      <Button>Clique aqui</Button>
    </QueryClientProvider>
  );
}
