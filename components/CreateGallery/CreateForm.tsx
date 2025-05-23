"use client";

import { uploadGallery } from "@/lib/actions";
import { useActionState } from "react";
import { SubmitButton } from "@/components/CreateNews/button/button";

const CreateForm = () => {
  const [state, formAction] = useActionState(uploadGallery, null);
  return (
    <form action={formAction}>
      <div className="mb-4 ">
        <h1 className="text-sm text-red-400 mb-2">Note: Gambar Maksimal 4MB</h1>
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-4 file:border-0 file:bg-blue-500 rounded-sm file:text-white
            hover:file:bg-blue-400 file:cursor-pointer border border-blue-900 w-full"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButton label="Simpan" />
      </div>
    </form>
  );
};

export default CreateForm;
