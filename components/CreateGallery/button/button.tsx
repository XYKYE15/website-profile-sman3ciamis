"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import { handleDeleteGallery } from "@/lib/actions";

export const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={handleDeleteGallery}>
      <input type="hidden" name="id" value={id} />
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
        "w-20 py-2.5 text-base font-medium rounded-sm mt-5 transition duration-150",
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
