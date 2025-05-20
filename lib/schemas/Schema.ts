import { z } from "zod";

// upload data prestasi
export const UploadFormAchievement = z.object({
  title: z.string().min(1, { message: "Judul wajib diisi." }),
  description: z.string().min(1, { message: "Deskripsi wajib diisi." }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Gambar tidak boleh kosong",
    })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Tipe file harus gambar",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar tidak boleh lebih dari 4MB",
    }),
});

export const EditFormAchievement = z.object({
  title: z.string().min(1, { message: "Judul wajib diisi." }),
  description: z.string().min(1, { message: "Deskripsi wajib diisi." }),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Tipe file harus gambar",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar tidak boleh lebih dari 4MB",
    })
    .optional(),
});

export const UploadFormNews = z.object({
  title: z.string().min(1, { message: "Judul wajib diisi." }),
  description: z.string().min(1, { message: "Deskripsi wajib diisi." }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Gambar tidak boleh kosong",
    })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Tipe file harus gambar",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar tidak boleh lebih dari 4MB",
    }),
});

export const EditFormNews = z.object({
  title: z.string().min(1, { message: "Judul wajib diisi." }),
  description: z.string().min(1, { message: "Deskripsi wajib diisi." }),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Tipe file harus gambar",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar tidak boleh lebih dari 4MB",
    })
    .optional(),
});

export const UploadFormTeacher = z.object({
  title: z.string().min(1, { message: "Judul wajib diisi." }),
  description: z.string().min(1, { message: "Deskripsi wajib diisi." }),
  note: z.string().min(1, { message: "Catatan wajib diisi." }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Gambar tidak boleh kosong",
    })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Tipe file harus gambar",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar tidak boleh lebih dari 4MB",
    }),
});

export const EditFormTeacher = z.object({
  title: z.string().min(1, { message: "Judul wajib diisi." }),
  description: z.string().min(1, { message: "Deskripsi wajib diisi." }),
  note: z.string().min(1, { message: "Catatan wajib diisi." }),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Tipe file harus gambar",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar tidak boleh lebih dari 4MB",
    })
    .optional(),
});
