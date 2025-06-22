"use client";

import { updateEkskul } from "@/lib/actions";
import { useActionState } from "react";
import { SubmitEkskulButton } from "@/components/CreateEkskul/button/button";
import Image from "next/image";
import type { Ekskul } from "@/lib/generated/prisma";

const EditForm = ({ data }: { data: Ekskul }) => {
  const [state, formAction] = useActionState(
    updateEkskul.bind(null, data.id),
    null
  );

  return (
    <form action={formAction}>
      {/* Nama Ekskul */}
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="name"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Nama Ekstrakurikuler"
          defaultValue={data.name}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
        </div>
      </div>

      {/* Link Tiktok & Instagram */}
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="tiktok"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full mb-5"
          placeholder="Link Tiktok (opsional)"
          defaultValue={data.tiktok ?? ""}
        />
        <input
          type="text"
          name="instagram"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Link Instagram (opsional)"
          defaultValue={data.instagram ?? ""}
        />
        <div aria-live="polite" aria-atomic="true" className="mb-2">
          <p className="text-sm text-red-500 mt-2">{state?.error?.tiktok}</p>
          <p className="text-sm text-red-500 mt-2">{state?.error?.instagram}</p>
        </div>
      </div>

      {/* Gambar Ekskul */}
      <div className="mb-4">
        <h1 className="text-sm text-red-400 mb-2">Note: Gambar Maksimal 4MB</h1>

        {data.image && (
          <div className="mb-2">
            <p className="text-sm text-blue-900 mb-1">Gambar Saat Ini:</p>
            <Image
              src={data.image}
              width={100}
              height={100}
              alt="Gambar saat ini"
              className="w-32 h-32 object-cover rounded"
            />
          </div>
        )}

        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-4 file:border-0 file:bg-blue-500 rounded-sm file:text-white
            hover:file:bg-blue-400 file:cursor-pointer border border-blue-900 w-full"
        />

        {/* Hidden input untuk menyimpan URL gambar lama */}
        <input type="hidden" name="oldImage" value={data.image} />

        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>

      {/* Tombol Submit + Batal */}
      <div className="mb-4 pt-4">
        <SubmitEkskulButton label="Simpan" cancelHref="/admin/ekskul" />
      </div>
    </form>
  );
};

export default EditForm;
