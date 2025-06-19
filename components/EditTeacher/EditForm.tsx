"use client";

import React from "react";
import { updateTeacher } from "@/lib/actions";
import { useActionState } from "react";
import type { Teacher } from "@/lib/generated/prisma";
import Image from "next/image";
import { SubmitTeacherButton } from "../CreateTeacher/Button/button";

const EditForm = ({ data }: { data: Teacher }) => {
  const [state, formAction] = useActionState(
    updateTeacher.bind(null, data.id),
    null
  );
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Nama"
          defaultValue={data.title}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>

      <div className="mb-4 pt-2">
        <select
          name="description"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full bg-white"
          defaultValue={data.description}
        >
          <option value="" disabled>
            Pilih Jabatan
          </option>
          <option value="Kepala Sekolah">Kepala Sekolah</option>
          <option value="Staff Wakasek">Staff Wakasek</option>
          <option value="Tenaga Pendidik">Tenaga Pendidik</option>
          <option value="Tata Usaha">Tata Usaha</option>
        </select>
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">
            {state?.error?.description}
          </p>
        </div>
      </div>

      <div className="mb-4 pt-2">
        <input
          type="text"
          name="note"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Keterangan Jabatan"
          defaultValue={data.note ?? ""}
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.note}</p>
      </div>

      {/* Input NIP */}
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="nip"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="NIP"
          defaultValue={data.nip ?? ""}
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.nip}</p>
      </div>

      {/* Input NUPTK */}
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="nuptk"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="NUPTK"
          defaultValue={data.nuptk ?? ""}
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.nuptk}</p>
      </div>

      <div className="mb-4">
        <h1 className="text-sm text-red-400 mb-2">Note: Gambar Maksimal 4MB</h1>

        {/* Preview Gambar Lama */}
        {data.image && (
          <div className="mb-2">
            <p className="text-sm text-blue-900 mb-1">Gambar Saat Ini:</p>
            <Image
              src={data.image}
              width={30}
              height={30}
              alt="Gambar saat ini"
              className="w-32 h-32 object-cover rounded"
            />
          </div>
        )}

        {/* Input File Baru */}
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
        <SubmitTeacherButton label="Simpan" cancelHref="/admin/teacher" />
      </div>
    </form>
  );
};

export default EditForm;
