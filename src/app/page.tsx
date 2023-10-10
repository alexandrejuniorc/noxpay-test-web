'use client'
import { TableCryptos } from "@/components/TableCryptos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="h-screen">
        <div className="mx-auto h-full flex justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8">
          <TableCryptos />
        </div>
      </main>
    </QueryClientProvider>
  );
}

