"use client";

import { uploadEkskul } from "@/lib/actions";
import { useActionState } from "react";
import { SubmitButton } from "@/components/CreateEkskul/button/button";


const CreateFormEkskul = () => {
    const [state, formAction] = useActionState(uploadEkskul, null);
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="name"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Nama Ekstrakuliker"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
        </div>
      </div>
      <div className="mb-4 pt-2 ">
        <input
          type="text"
          name="tiktok"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full mb-5"
          placeholder="Link Tiktok (opsional)"
        />
        <input
          type="text"
          name="instagram"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Link Instagram (opsional)"
        />
        <div aria-live="polite" aria-atomic="true" className="mb-2">
          <p className="text-sm text-red-500 mt-2">
            {state?.error?.tiktok}
          </p>
          <p className="text-sm text-red-500 mt-2">
            {state?.error?.instagram}
          </p>
        </div>
      </div>
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
        <SubmitButton label="Simpan" cancelHref="/admin/ekskul"/>
      </div>
    </form>
  );
};

export default CreateFormEkskul;
