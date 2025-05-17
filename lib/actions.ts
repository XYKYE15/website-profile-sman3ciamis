"use server";

import { put, del } from "@vercel/blob";
import { UploadSchema, EditSchema } from "@/lib/schemas/Schema";
import { prisma } from "@/lib/prisma";
import { getImagesById } from "@/lib/data";
import { getImagesAchievementById } from "@/lib/data";
import { getImagesTeacherById } from "@/lib/data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Upload News
export const uploadNews = async (prevState: unknown, formData: FormData) => {
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

    await prisma.news.create({
      data: {
        title,
        description,
        image: url,
      },
    });
    redirect("/admin/news");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload berita" };
  }
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

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate berita" };
  }
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
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus berita" };
  }
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

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload prestasi" };
  }
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

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate prestasi" };
  }
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
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus prestasi" };
  }
};

//Upload Teacher
export const uploadTeacher = async (
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

    await prisma.teacher.create({
      data: {
        title,
        description,
        image: url,
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload data guru" };
  }
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

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate prestasi" };
  }
};

// Delete Achievement
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
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus prestasi" };
  }
};