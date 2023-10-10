import { usePagination } from "@mantine/hooks";
import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: number) => void;
}
export function TablePagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: TablePaginationProps) {
  const pagination = usePagination({
    siblings: 3,
    total: totalPages,
    page: currentPage,
    onChange: setCurrentPage,
  });

  return (
    <div className="w-max flex items-center justify-center">
      <button
        type="button"
        onClick={pagination.first}
        disabled={pagination.active <= 1}
        className="bg-transparent overflow-visible h-10 w-10 flex items-center justify-center rounded-md transition-all outline-gray-600 focus:outline-none"
      >
        <CaretDoubleLeft size={16} weight="bold" />
      </button>

      <div className="flex items-center justify-center space-x-4 w-full max-w-64 h-10 rounded-md p-4 bg-transparent">
        {pagination.range.map((value, index) => {
          if (value === "dots") {
            return (
              <div
                key={`dots-${index}`}
                className="text-gray-400 text-center w-10 h-10"
              >
                ...
              </div>
            );
          }

          return (
            <button
              type="button"
              onClick={() => pagination.setPage(value)}
              key={`page-${value}`}
              className={`text-black text-center w-10 h-10 border border-gray-300 transition-all rounded-md ${
                value === pagination.active
                  ? "bg-primary text-white border-transparent"
                  : "bg-transparent"
              } hover:bg-gray-200 focus:outline-none`}
            >
              {value}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={pagination.last}
        disabled={pagination.active + 1 > totalPages}
        className="bg-transparent overflow-visible h-10 w-10 flex items-center justify-center rounded-md transition-all outline-gray-600 focus:outline-none"
      >
        <CaretDoubleRight size={16} weight="bold" />
      </button>
    </div>
  );
}
