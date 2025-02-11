import { useSearchParams } from "react-router-dom";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductPagination = ({ totalProducts }: { totalProducts: number }) => {
  const productsPerPage = 20;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setSearchParams({
        page: (currentPage - 1).toString(),
        search: searchParams.get("search") || "",
        category: searchParams.get("category") || "",
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setSearchParams({
        page: (currentPage + 1).toString(),
        search: searchParams.get("search") || "",
        category: searchParams.get("category") || "",
      });
    }
  };

  return (
    <div className="pb-15">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePreviousPage}
              className="cursor-pointer"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
