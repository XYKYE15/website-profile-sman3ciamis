import { z } from "zod";
import { object, string } from "zod";

// Form Register Pengguna
export const RegisterForm = object({
  name: string().min(1, "nama wajib diisi"),
  email: string().email("email wajib diisi"),
  password: string()
    .min(8, "password harus 8 karakter")
    .max(32, "password maksimal 32 karakter"),
  ConfirmPassword: string()
    .min(8, "konfirmasi password harus 8 karakter")
    .max(32, "konfirmasi password maksimal 32 karakter"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "password tidak sama",
  path: ["ConfirmPassword"],
});

// Form Login Pengguna
export const LoginForm = object({
  email: string().email("email wajib diisi"),
  password: string()
    .min(8, "password harus 8 karakter")
    .max(32, "password maksimal 32 karakter"),
});

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

// edit form Prestasi
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

//Upload Berita
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

//Edit Berita
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

//Upload Data guru
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

//Edit Data Guru
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

//Upload Data Gallery
export const UploadFormGallery = z.object({
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

export const UploadFormEkskul = z.object({
  name: z.string().min(1, { message: "Nama ekskul wajib diisi" }),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "Gambar tidak boleh kosong",
    })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Tipe file harus gambar",
    })
    .refine((file) => file.size < 4000000, {
      message: "Gambar tidak boleh lebih dari 4MB",
    }),
});

export const EditFormEkskul = z.object({
  name: z.string().min(1, { message: "Nama ekskul wajib diisi" }),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
  image: z.union([
    z
      .instanceof(File)
      .refine((file) => file.size > 0, {
        message: "Gambar tidak boleh kosong",
      })
      .refine((file) => file.type.startsWith("image/"), {
        message: "Tipe file harus gambar",
      })
      .refine((file) => file.size < 4000000, {
        message: "Gambar tidak boleh lebih dari 4MB",
      }),
    z.string().url(),
  ]),
});

export const UploadFormSettings = z.object({
  name: z.string().min(1, { message: "Judul hero wajib diisi" }),
  description: z.string().min(1, { message: "Deskripsi hero wajib diisi" }),
  imageHero: z.any().refine((file) => file && file.size > 0, {
    message: "Gambar hero wajib diunggah",
  }),

  phone: z.string().min(1, { message: "Nomor telepon wajib diisi" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  gmapsLink: z.string().url({ message: "Link Google Maps tidak valid" }),

  instagram: z.string().url({ message: "Link Instagram tidak valid" }),
  youtube: z.string().url({ message: "Link YouTube tidak valid" }),
  tiktok: z.string().url({ message: "Link TikTok tidak valid" }),

  videoUrl: z.string().url({ message: "Link video tidak valid" }),

  sejarah: z.string().min(1, { message: "Sejarah wajib diisi" }),
  visi: z.string().min(1, { message: "Visi wajib diisi" }),
  misi: z.string().min(1, { message: "Misi wajib diisi" }),
  tujuan: z.string().min(1, { message: "Tujuan wajib diisi" }),
});

export const UpdateFormSettings = z.object({
  name: z.string().min(1, { message: "Judul hero wajib diisi" }),
  description: z.string().min(1, { message: "Deskripsi hero wajib diisi" }),
  phone: z.string().min(1, { message: "Nomor telepon wajib diisi" }),
  email: z.string().email({ message: "Email tidak valid" }),
  gmapsLink: z.string().url({ message: "Link Google Maps tidak valid" }),
  instagram: z.string().url({ message: "Link Instagram tidak valid" }),
  youtube: z.string().url({ message: "Link YouTube tidak valid" }),
  tiktok: z.string().url({ message: "Link TikTok tidak valid" }),
  videoUrl: z.string().url({ message: "Link video tidak valid" }).optional(),
  sejarah: z.string().min(1, { message: "Sejarah wajib diisi" }),
  visi: z.string().min(1, { message: "Visi wajib diisi" }),
  misi: z.string().min(1, { message: "Misi wajib diisi" }),
  tujuan: z.string().min(1, { message: "Tujuan wajib diisi" }),
  imageHero: z
    .union([
      z.string().url(), // URL string jika gambar lama dipakai
      z.custom<File>((file) => file instanceof File, {
        message: "File tidak valid",
      }),
    ])
    .optional(),
});
