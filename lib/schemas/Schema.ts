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
