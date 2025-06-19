"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";

interface SubmitButtonProps {
  label: string;
  cancelHref?: string;
}

// Tombol Submit (untuk Simpan dan Ubah)
export const SubmitAchievementButton = ({ label, cancelHref }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  const isSaving = label.toLowerCase().includes("simpan");
  const buttonText = pending
    ? isSaving
      ? "Menyimpan..."
      : "Mengubah..."
    : label;

  return (
    <div className="flex gap-4">
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

      {cancelHref && (
        <Link
          href={cancelHref}
          className="flex-1 py-2.5 px-6 text-center text-base font-medium rounded-sm bg-gray-300 hover:bg-gray-400 transition duration-150"
        >
          Batal
        </Link>
      )}
    </div>
  );
};

// Tombol Edit
export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/achievement/edit/${id}`}
      className="w-full block text-center py-2.5 px-6 text-base font-medium rounded-sm text-white bg-blue-500 hover:bg-blue-400 transition duration-150"
    >
      Edit
    </Link>
  );
};

// Tombol Delete (menggunakan server action)
import { handleDeleteAchievement } from "@/lib/actions";
export const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={handleDeleteAchievement}>
      <input type="hidden" name="id" value={id} />
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
        "w-full py-2.5 px-6 text-base font-medium rounded-sm  transition duration-150",
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
