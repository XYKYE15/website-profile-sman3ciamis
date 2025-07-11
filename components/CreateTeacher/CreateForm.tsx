"use client";

import React from "react";
import { useActionState } from "react";
import { uploadTeacher } from "@/lib/actions";
import { SubmitTeacherButton } from "./Button/button";

const CreateForm = () => {
  const [state, formAction] = useActionState(uploadTeacher, null);
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Nama Tenaga Pendidik"
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
      </div>

      <div className="mb-4 pt-2">
        <select
          name="description"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full bg-white"
          defaultValue=""
        >
          <option value="description" disabled>
            Pilih Jabatan
          </option>
          <option value="Kepala Sekolah">Kepala Sekolah</option>
          <option value="Staff Wakasek">Staff Wakasek</option>
          <option value="Tenaga Pendidik">Tenaga Pendidik</option>
          <option value="Tata Usaha">Tata Usaha</option>
        </select>
        <p className="text-sm text-red-500 mt-2">{state?.error?.description}</p>
      </div>

      <div className="mb-4 pt-2">
        <input
          type="text"
          name="note"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Keterangan Jabatan"
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.note}</p>
      </div>

      <div className="mb-4 pt-2">
        <input
          type="text"
          name="nip"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="NIP (jika ada)"
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.nip}</p>
      </div>

      <div className="mb-4 pt-2">
        <input
          type="text"
          name="nuptk"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="NUPTK (jika ada)"
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.nuptk}</p>
      </div>

      <div className="mb-4 ">
        <h1 className="text-sm text-red-400 mb-2">Note: Gambar Maksimal 4MB</h1>
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-4 file:border-0 file:bg-blue-500 rounded-sm file:text-white
            hover:file:bg-blue-400 file:cursor-pointer border border-blue-900 w-full"
        />
        <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
      </div>

      <div className="mb-4 pt-4">
        <SubmitTeacherButton label="Simpan" cancelHref="/admin/teacher" />
      </div>
    </form>
  );
};

export default CreateForm;
