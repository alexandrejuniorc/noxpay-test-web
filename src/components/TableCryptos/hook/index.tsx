"use client";
import { Button } from "@/components/ui/button";
import { getAllCriptos, updateVoteCripto } from "@/lib/axios";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Heart } from "lucide-react";
import { useState } from "react";

export type Crypto = {
  id: string;
  price: number;
  name: string;
  votes: number;
};

export const TableCryptosHook = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const {
    data: crypto,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["get-all-cryptos", { currentPage }],
    queryFn: () => getAllCriptos(currentPage, itemsPerPage),
  });

  const voteOnCrypto = async (id: string) => {
    await updateVoteCripto(id);
    refetch();
  };

  const columns: ColumnDef<Crypto>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="capitalize">{formatted}</div>;
        // return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "votes",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Votes
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("votes")}</div>
      ),
    },
    {
      id: "vote",
      enableHiding: false,
      header: "Vote",
      cell: ({ row }) => {
        const cryptoId = row.original.id;

        return (
          <div className="flex items-center gap-6">
            <Heart
              onClick={() => voteOnCrypto(cryptoId)}
              style={{ cursor: "pointer" }}
              size={24}
              color="#ff0000"
              strokeWidth={3}
              absoluteStrokeWidth
              className="transition-colors hover:fill-red-600 hover:stroke-red-600"
            />
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: crypto?.results ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return {
    table,
    columns,
    sorting,
    columnFilters,
    columnVisibility,
    rowSelection,
    crypto,
    isLoading,
    error,
    refetch,
    voteOnCrypto,
    currentPage,
    setCurrentPage,
  };
};
