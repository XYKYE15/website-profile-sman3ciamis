"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteSettingById } from "@/lib/actions";

// Tombol Submit (Simpan / Ubah)
export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const isSaving = label.toLowerCase().includes("simpan");
  const buttonText = pending
    ? isSaving
      ? "Menyimpan..."
      : "Mengubah..."
    : label || "Kirim";

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

export const EditButtonSettings = ({
  id,
  label = "Edit",
}: {
  id: string;
  label?: string;
}) => {
  return (
    <Link
      href={`/admin/settings/edit/${id}`}
      className="w-25 block text-center py-2.5 px-6 text-base font-medium rounded-sm text-white bg-blue-500 hover:bg-blue-400 transition duration-150"
    >
      {label}
    </Link>
  );
};


export const DeleteButton = ({ id }: { id: string }) => {
  const deleteSettingsWithId = deleteSettingById.bind(null, id);

  return (
    <form action={deleteSettingsWithId}>
      <DeleteBtn />
    </form>
  );
};

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