import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className="flex justify-center gap-1 text-blue-900 items-center">
        {/* First page button (hidden if already on first page) */}
        {currentPage > 1 && (
          <li>
            <Link
              href={`${basePath}?page=1`}
              className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 transition-colors hover:bg-gray-50"
              aria-label="First page"
            >
              <BiChevronsLeft className="text-xl" />
              <span className="">AWAL</span>
            </Link>
          </li>
        )}

        {/* Prev button */}
        <li>
          <Link
            href={`${basePath}?page=${currentPage > 1 ? currentPage - 1 : 1}`}
            className="flex items-center gap-1 rounded border border-gray-200 px-3 py-1 transition-colors hover:bg-gray-50"
            aria-label="Previous page"
          >
            <IoChevronBack className="text-xl" />
            <span className="text-sm">Kembali</span>
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
        <li>
          <Link
            href={`${basePath}?page=${
              currentPage < totalPages ? currentPage + 1 : totalPages
            }`}
            className="flex items-center gap-1 rounded border border-gray-200 px-3 py-1 transition-colors hover:bg-gray-50"
            aria-label="Next page"
          >
            <span className="text-sm">Lanjut</span>
            <IoChevronForward className="text-xl" />
          </Link>
        </li>

        {/* Last page button (hidden if already on last page) */}
        {currentPage < totalPages && (
          <li>
            <Link
              href={`${basePath}?page=${totalPages}`}
              className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 transition-colors hover:bg-gray-50"
              aria-label="Last page"
            >
              <span className="">AKHIR</span>
              <BiChevronsRight className="text-xl" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;
