"use server";

import { put, del } from "@vercel/blob";
import {
  EditFormAchievement,
  UploadFormAchievement,
  UploadFormNews,
  EditFormNews,
  UploadFormTeacher,
  UploadFormGallery,
  EditFormTeacher,
} from "@/lib/schemas/Schema";
import { prisma } from "@/lib/prisma";
import { getImagesById, getImagesGalleryById } from "@/lib/data";
import { getImagesAchievementById } from "@/lib/data";
import { getImagesTeacherById } from "@/lib/data";
import { redirect } from "next/navigation";
import { RegisterForm, LoginForm } from "@/lib/schemas/Schema";
import { hashSync } from "bcrypt-ts";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// Register Form
export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = RegisterForm.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return { message: "Gagal mendaftar" };
  }
  redirect("/login");
};

// Login Form Credentials action
export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = LoginForm.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/admin" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Email atau password salah" };
        default:
          return { message: "Gagal masuk" };
      }
    }
    throw error;
  }
};

// Upload News
export const uploadNews = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  const validatedFields = UploadFormNews.safeParse(rawData);

  if (!validatedFields.success) {
    console.error(
      "Validation error:",
      validatedFields.error.flatten().fieldErrors
    ); // Tambahan
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, description, image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.news.create({
      data: {
        title,
        description,
        image: url,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload berita" };
  }
  redirect("/admin/news");
};

// Update News
export const updateNews = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditFormNews.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getImagesById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  const { title, description, image } = validatedFields.data;
  let imagePath = data.image;

  try {
    if (image instanceof File && image.size > 0) {
      await del(data.image); // hapus lama
      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }

    await prisma.news.update({
      data: {
        title,
        description,
        image: imagePath,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate berita" };
  }
  redirect("/admin/news");
};

// Delete News
export const deleteNews = async (id: string) => {
  const data = await getImagesById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.news.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus berita" };
  }
  redirect("/admin/news");
};

// Upload Achievement
export const uploadAchievement = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = UploadFormAchievement.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, description, image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.achievement.create({
      data: {
        title,
        description,
        image: url,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload prestasi" };
  }
  redirect("/admin/achievement");
};

// Update Achievement
export const updateAchievement = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditFormAchievement.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getImagesAchievementById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  const { title, description, image } = validatedFields.data;
  let imagePath = data.image;

  try {
    if (image instanceof File && image.size > 0) {
      await del(data.image); // hapus lama
      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }

    await prisma.achievement.update({
      data: {
        title,
        description,
        image: imagePath,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate prestasi" };
  }
  redirect("/admin/achievement");
};

// Delete Achievement
export const deleteAchievement = async (id: string) => {
  const data = await getImagesAchievementById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.achievement.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus prestasi" };
  }
  redirect("/admin/achievement");
};

//Upload Teacher
export const uploadTeacher = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadFormTeacher.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, description, note, image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.teacher.create({
      data: {
        title,
        description,
        note,
        image: url,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload data guru" };
  }
  redirect("/admin/teacher");
};

// Update Teacher
export const updateTeacher = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditFormTeacher.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getImagesTeacherById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  const { title, note, description, image } = validatedFields.data;
  let imagePath = data.image;

  try {
    if (image instanceof File && image.size > 0) {
      await del(data.image); // hapus lama
      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }

    await prisma.teacher.update({
      data: {
        title,
        description,
        note,
        image: imagePath,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate data guru" };
  }
  redirect("/admin/teacher");
};

// Delete Teacher
export const deleteTeacher = async (id: string) => {
  const data = await getImagesTeacherById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.teacher.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus data guru" };
  }
  redirect("/admin/teacher");
};

//Upload Gallery
export const uploadGallery = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadFormGallery.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.gallery.create({
      data: {
        image: url,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload data guru" };
  }
  redirect("/admin/gallery");
};

// Delete Gallery
export const deleteGallery = async (id: string) => {
  const data = await getImagesGalleryById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.gallery.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus data guru" };
  }
  redirect("/admin/gallery");
};
