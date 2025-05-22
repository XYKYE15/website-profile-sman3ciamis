import { object, string } from "zod";

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