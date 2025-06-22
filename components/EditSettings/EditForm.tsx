"use client";

import React, { useEffect } from "react";
import { useActionState } from "react";

import { updateSettings, type EditState } from "@/lib/actions";
import type { Setting } from "@/lib/generated/prisma";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitSettingButton } from "../CreateSettings/button/button";

type FieldKey =
  | "name"
  | "description"
  | "phone"
  | "email"
  | "gmapsLink"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "videoUrl"
  | "imageHero"
  | "sejarah"
  | "visi"
  | "misi"
  | "tujuan";

const EditForm = ({ data }: { data: Setting }) => {
  const router = useRouter();

  const [state, formAction] = useActionState<EditState, FormData>(
    async (prevState, formData) => {
      return await updateSettings(prevState, formData);
    },
    { success: false } 
  );

  useEffect(() => {
    if (state.success) {
      router.push("/admin/settings");
    }
  }, [state, router]);

  const getError = (key: FieldKey): string | null => {
    return state.success === false && state.error?.[key]?.[0] || null;
  };

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={data.id} />

      {/* Hero Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Hero Section</h3>
        <input
          type="text"
          name="name"
          defaultValue={data.name}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Judul Hero"
          required
        />
        <p className="text-sm text-red-500">{getError("name")}</p>

        <input
          type="text"
          name="description"
          defaultValue={data.description}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mt-2"
          placeholder="Deskripsi Hero"
          required
        />
        <p className="text-sm text-red-500">{getError("description")}</p>

        {data.imageHero && (
          <Image
            src={data.imageHero}
            alt="Hero Image"
            width={1200}
            height={300}
            className="w-full h-auto max-h-64 object-cover rounded mb-2 mt-2"
          />
        )}

        <div className="mt-2">
          <h1 className="text-sm text-red-400 mb-2">Note: Maksimal 4MB</h1>
          <input
            type="file"
            name="imageHero"
            className="file:py-2 file:px-4 file:mr-4 file:border-0 file:bg-blue-500 rounded-sm file:text-white hover:file:bg-blue-400 file:cursor-pointer border border-blue-900 w-full"
          />
          <p className="text-sm text-red-500 mt-2">{getError("imageHero")}</p>
        </div>
      </div>

      {/* Kontak */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Kontak</h3>
        <input
          type="text"
          name="phone"
          defaultValue={data.phone}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Nomor Telepon"
        />
        <p className="text-sm text-red-500">{getError("phone")}</p>

        <input
          type="email"
          name="email"
          defaultValue={data.email}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Email"
        />
        <p className="text-sm text-red-500">{getError("email")}</p>

        <input
          type="text"
          name="gmapsLink"
          defaultValue={data.gmapsLink}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Link Google Maps"
        />
        <p className="text-sm text-red-500">{getError("gmapsLink")}</p>
      </div>

      {/* Media Sosial */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Media Sosial</h3>
        <input
          type="text"
          name="instagram"
          defaultValue={data.instagram}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Instagram"
        />
        <p className="text-sm text-red-500">{getError("instagram")}</p>

        <input
          type="text"
          name="youtube"
          defaultValue={data.youtube}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="YouTube"
        />
        <p className="text-sm text-red-500">{getError("youtube")}</p>

        <input
          type="text"
          name="tiktok"
          defaultValue={data.tiktok}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Tiktok"
        />
        <p className="text-sm text-red-500">{getError("tiktok")}</p>
      </div>

      {/* Video URL */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Video URL</h3>
        <input
          type="text"
          name="videoUrl"
          defaultValue={data.videoUrl || ""}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="URL Video"
        />
        <p className="text-sm text-red-500">{getError("videoUrl")}</p>
      </div>

      {/* Sejarah, Visi, Misi, Tujuan */}
      {(["sejarah", "visi", "misi", "tujuan"] as FieldKey[]).map((key) => (
        <div className="mb-6" key={key}>
          <h3 className="text-lg font-semibold mb-2">{key.toUpperCase()}</h3>
          <textarea
            name={key}
            rows={4}
            defaultValue={data[key] ?? ""}
            className="py-2 px-4 border border-blue-900 w-full rounded-sm"
            placeholder={`Tuliskan ${key} di sini...`}
          />
          <p className="text-sm text-red-500">{getError(key)}</p>
        </div>
      ))}

      <div className="mb-4 pt-4">
        <SubmitSettingButton label="Simpan" cancelHref="/admin/settings" />
      </div>
    </form>
  );
};

export default EditForm;
