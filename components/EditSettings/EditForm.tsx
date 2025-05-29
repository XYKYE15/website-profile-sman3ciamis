"use client";

import React, { useEffect } from "react";
import { updateSettings } from "@/lib/actions";
import { useActionState } from "react";
import { SubmitButton } from "@/components/CreateEkskul/button/button"; // sesuaikan path jika perlu
import type { Setting } from "@/lib/generated/prisma";
import Image from "next/image";
import { useRouter } from "next/navigation";

const isFieldError = (error: unknown): error is Record<string, string[]> => {
  return typeof error === "object" && error !== null && !("message" in error);
};

const EditForm = ({ data }: { data: Setting }) => {
  const router = useRouter();
  const [state, formAction] = useActionState(updateSettings.bind(null, data.id), null);

  // Redirect ke /admin/settings saat update berhasil
  useEffect(() => {
    if (state?.success) {
      router.push("/admin/settings");
    }
  }, [state?.success, router]);

  return (
    <form action={formAction}>
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
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.name?.[0] : null}
        </p>

        <input
          type="text"
          name="description"
          defaultValue={data.description}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mt-2"
          placeholder="Deskripsi Hero"
          required
        />
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.description?.[0] : null}
        </p>

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
          <p className="text-sm text-red-500 mt-2">
            {isFieldError(state?.error) ? state.error.imageHero?.[0] : null}
          </p>
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
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.phone?.[0] : null}
        </p>

        <input
          type="email"
          name="email"
          defaultValue={data.email}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Email"
        />
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.email?.[0] : null}
        </p>

        <input
          type="text"
          name="gmapsLink"
          defaultValue={data.gmapsLink}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Link Google Maps"
        />
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.gmapsLink?.[0] : null}
        </p>
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
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.instagram?.[0] : null}
        </p>

        <input
          type="text"
          name="youtube"
          defaultValue={data.youtube}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="YouTube"
        />
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.youtube?.[0] : null}
        </p>

        <input
          type="text"
          name="tiktok"
          defaultValue={data.tiktok}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Tiktok"
        />
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.tiktok?.[0] : null}
        </p>
      </div>

      {/* Video */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Video URL</h3>
        <input
          type="text"
          name="videoUrl"
          defaultValue={data.videoUrl || ""}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="URL Video"
        />
        <p className="text-sm text-red-500">
          {isFieldError(state?.error) ? state.error.videoUrl?.[0] : null}
        </p>
      </div>

      {/* Sejarah - Visi - Misi - Tujuan */}
      {[
        { name: "sejarah", label: "Sejarah", value: data.sejarah },
        { name: "visi", label: "Visi", value: data.visi },
        { name: "misi", label: "Misi", value: data.misi },
        { name: "tujuan", label: "Tujuan", value: data.tujuan },
      ].map(({ name, label, value }) => (
        <div className="mb-6" key={name}>
          <h3 className="text-lg font-semibold mb-2">{label}</h3>
          <textarea
            name={name}
            rows={4}
            defaultValue={value}
            className="py-2 px-4 border border-blue-900 w-full rounded-sm"
            placeholder={`Tuliskan ${label.toLowerCase()} di sini...`}
          />
          <p className="text-sm text-red-500">
            {isFieldError(state?.error) ? state.error.name?.[0] : null}
          </p>
        </div>
      ))}

      <div className="mb-4 pt-4">
        <SubmitButton label="Simpan" />
      </div>
    </form>
  );
};

export default EditForm;
