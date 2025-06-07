"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/CreateEkskul/button/button";
import { UploadSettings } from "@/lib/actions";

const CreateSettings = () => {
  const [state, formAction] = useActionState(UploadSettings, null);

  const errorClass = "text-sm text-red-500 break-words max-w-full";

  return (
    <form action={formAction} className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Hero Section</h3>
        <input
          type="text"
          name="name"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Judul Hero"
        />
        <p className={errorClass}>{state?.error?.name}</p>

        <input
          type="text"
          name="description"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mt-2"
          placeholder="Deskripsi Hero"
        />
        <p className={errorClass}>{state?.error?.description}</p>

        <input
          type="file"
          name="imageHero"
          className="file:py-2 file:px-4 file:mr-4 file:border-0 file:bg-blue-500 rounded-sm file:text-white hover:file:bg-blue-400 file:cursor-pointer border border-blue-900 w-full mt-2"
        />
        <p className={errorClass}>{state?.error?.imageHero}</p>
      </div>

      {/* Kontak */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Kontak</h3>
        <input
          type="text"
          name="phone"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Nomor Telepon"
        />
        <p className={errorClass}>{state?.error?.phone}</p>

        <input
          type="email"
          name="email"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Email"
        />
        <p className={errorClass}>{state?.error?.email}</p>

        <input
          type="text"
          name="gmapsLink"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Link Iframe Google Maps"
        />
        <p className={errorClass}>{state?.error?.gmapsLink}</p>
      </div>

      {/* Media Sosial */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Media Sosial</h3>
        <input
          type="text"
          name="instagram"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Link Instagram"
        />
        <p className={errorClass}>{state?.error?.instagram}</p>

        <input
          type="text"
          name="youtube"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-2"
          placeholder="Link Youtube"
        />
        <p className={errorClass}>{state?.error?.youtube}</p>

        <input
          type="text"
          name="tiktok"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Link Tiktok"
        />
        <p className={errorClass}>{state?.error?.tiktok}</p>
      </div>

      {/* Video Link */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Link Video</h3>
        <input
          type="text"
          name="videoUrl"
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Link Video Youtube atau lainnya"
        />
        <p className={errorClass}>{state?.error?.videoUrl}</p>
      </div>

      {/* Sejarah */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Sejarah</h3>
        <textarea
          name="sejarah"
          rows={5}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-4"
          placeholder="Tuliskan sejarah di sini..."
        />
        <p className={errorClass}>{state?.error?.sejarah}</p>
      </div>

      {/* Visi */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Visi</h3>
        <textarea
          name="visi"
          rows={4}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-4"
          placeholder="Tuliskan visi di sini..."
        />
        <p className={errorClass}>{state?.error?.visi}</p>
      </div>

      {/* Misi */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Misi</h3>
        <textarea
          name="misi"
          rows={4}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm mb-4"
          placeholder="Tuliskan misi di sini..."
        />
        <p className={errorClass}>{state?.error?.misi}</p>
      </div>

      {/* Tujuan */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Tujuan</h3>
        <textarea
          name="tujuan"
          rows={4}
          className="py-2 px-4 border border-blue-900 w-full rounded-sm"
          placeholder="Tuliskan tujuan di sini..."
        />
        <p className={errorClass}>{state?.error?.tujuan}</p>
      </div>

      {/* Submit Button */}
      <div className="mb-4 pt-4">
        <SubmitButton label="Simpan" cancelHref="/admin/settings" />
      </div>
    </form>
  );
};

export default CreateSettings;
