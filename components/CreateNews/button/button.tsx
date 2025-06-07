"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteNews } from "@/lib/actions";

// Tombol Submit (untuk Simpan dan Ubah) + tombol Cancel
export const SubmitButton = ({
  label,
  cancelHref = "/admin/news", // default tujuan tombol cancel
}: {
  label: string;
  cancelHref?: string;
}) => {
  const { pending } = useFormStatus();

  const isSaving = label === "Simpan";
  const buttonText = pending ? (isSaving ? "Menyimpan..." : "simpan") : label;

  return (
    <div className="flex gap-3">
      <button
        type="submit"
        disabled={pending}
        className={clsx(
          "flex-1 py-2.5 px-6 text-base font-medium rounded-sm text-white bg-blue-500 hover:bg-blue-400 transition duration-150",
          {
            "opacity-50 cursor-progress": pending,
          }
        )}
      >
        {buttonText}
      </button>

      <Link
        href={cancelHref}
        className="flex-1 py-2.5 px-6 text-base font-medium rounded-sm text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-150 text-center"
      >
        Batal
      </Link>
    </div>
  );
};

// Tombol Edit
export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/news/edit/${id}`}
      className="w-full block text-center py-2.5 px-6 text-base font-medium rounded-sm text-white bg-blue-500 hover:bg-blue-400 transition duration-150"
    >
      Edit
    </Link>
  );
};

// Tombol Delete (menggunakan server action)
export const DeleteButton = ({ id }: { id: string }) => {
  const deleteNewsWithId = deleteNews.bind(null, id);

  return (
    <form action={deleteNewsWithId}>
      <DeleteBtn />
    </form>
  );
};

// Tombol Hapus (internal)
const DeleteBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "w-full py-2.5 px-6 text-base font-medium rounded-sm transition duration-150",
        {
          "bg-red-500 hover:bg-red-400 text-white": !pending,
          "bg-red-300 text-white cursor-progress opacity-50": pending,
        }
      )}
    >
      {pending ? "Menghapus..." : "Hapus"}
    </button>
  );
};
