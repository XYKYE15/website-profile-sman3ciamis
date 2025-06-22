"use client";

import { uploadAchievement } from "@/lib/actions";
import { useActionState } from "react";
import { SubmitAchievementButton } from "./button/button";


const CreateForm = () => {
  const [state, formAction] = useActionState(uploadAchievement, null);
  return (
    <form action={formAction}>
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full"
          placeholder="Judul Prestasi"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <textarea
          name="description"
          className="py-2 px-4 rounded-sm border border-blue-900 w-full h-40 resize-y"
          placeholder="Deskripsi Prestasi"
          defaultValue={""}
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">
            {state?.error?.description}
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
        <SubmitAchievementButton label="Simpan" cancelHref="/admin/achievement"/>
      </div>
    </form>
  );
};

export default CreateForm;
