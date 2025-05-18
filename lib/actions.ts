"use server";

import { put, del } from "@vercel/blob";
import { UploadSchema, EditSchema, UploadTeacherSchema } from "@/lib/schemas/Schema";
import { prisma } from "@/lib/prisma";
import { getImagesById } from "@/lib/data";
import { getImagesAchievementById } from "@/lib/data";
import { getImagesTeacherById } from "@/lib/data";
import { redirect } from "next/navigation";

// Upload News
export const uploadNews = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
  };

  const validatedFields = UploadSchema.safeParse(rawData);

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
  const validatedFields = EditSchema.safeParse(Object.fromEntries(formData));

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
  const validatedFields = UploadSchema.safeParse(Object.fromEntries(formData));

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
  const validatedFields = EditSchema.safeParse(Object.fromEntries(formData));

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
  const validatedFields = UploadTeacherSchema.safeParse(Object.fromEntries(formData));

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
  const validatedFields = EditSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await getImagesTeacherById(id);
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

    await prisma.teacher.update({
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
