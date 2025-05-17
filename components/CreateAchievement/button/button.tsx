"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteAchievement } from "@/lib/actions";

// Tombol Submit (untuk Simpan dan Ubah)
export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  const isSaving = label === "Simpan";
  const buttonText = pending ? (isSaving ? "Menyimpan..." : "Mengubah...") : label;

  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "w-full py-2.5 px-6 text-base font-medium rounded-sm text-white bg-blue-500 hover:bg-blue-400 transition duration-150",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
    >
      {buttonText}
    </button>
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
export const DeleteButton = ({ id } : { id: string }) => {
  const deleteAchievementWithId = deleteAchievement.bind(null, id);

  return (
    <form action={deleteAchievementWithId}>
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
        "w-full py-2.5 px-6 text-base font-medium rounded-sm mt-5 transition duration-150",
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
