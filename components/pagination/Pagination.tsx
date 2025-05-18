import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // e.g., "/news" or "/achievement"
}

function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className="flex justify-center gap-1 text-blue-900 items-center">
        {/* Prev button */}
        <li className="flex items-center gap-1">
          <Link
            href={`${basePath}?page=${currentPage > 1 ? currentPage - 1 : 1}`}
            className="flex items-center gap-1 rounded border border-gray-200 px-3 py-1 transition-colors hover:bg-gray-50"
            aria-label="Previous page"
          >
            <IoChevronBack className="text-xl" />
            <span className="text-sm">Prev</span>
          </Link>
        </li>

        {/* Page numbers */}
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={`${basePath}?page=${page}`}
              className={
                page === currentPage
                  ? "block size-8 rounded border border-indigo-600 bg-blue-500 text-center text-lg/8 font-medium text-white"
                  : "block size-8 rounded border border-gray-200 text-center text-lg/8 font-medium transition-colors hover:bg-gray-50"
              }
            >
              {page}
            </Link>
          </li>
        ))}

        {/* Next button */}
        <li className="flex items-center gap-1">
          <Link
            href={`${basePath}?page=${
              currentPage < totalPages ? currentPage + 1 : totalPages
            }`}
            className="flex items-center gap-1 rounded border border-gray-200 px-3 py-1 transition-colors hover:bg-gray-50"
            aria-label="Next page"
          >
            <span className="text-sm">Next</span>
            <IoChevronForward className="text-xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
