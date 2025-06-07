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
  UploadFormEkskul,
  EditFormEkskul,
  UploadFormSettings,
  EditFormSettings,
  RegisterForm,
  LoginForm,
} from "@/lib/schemas/Schema";
import { prisma } from "@/lib/prisma";
import {
  getImagesById,
  getImagesAchievementById,
  getImagesTeacherById,
  getImagesGalleryById,
  getImagesEkskulById,
} from "@/lib/data";
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt-ts";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// REGISTER
export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = RegisterForm.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return { message: "Gagal mendaftar" };
  }

  redirect("/login");
};

// LOGIN
export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = LoginForm.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/admin" });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { message: "Email atau password salah" };
      }
      return { message: "Gagal masuk" };
    }
    throw error;
  }
};

// NEWS
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
    );
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { title, description, image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.news.create({
      data: { title, description, image: url },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload berita" };
  }

  redirect("/admin/news");
};

export const updateNews = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditFormNews.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const data = await getImagesById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  const { title, description, image } = validatedFields.data;
  let imagePath = data.image;

  try {
    if (image instanceof File && image.size > 0) {
      await del(data.image); // hapus gambar lama
      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }

    await prisma.news.update({
      where: { id },
      data: { title, description, image: imagePath },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate berita" };
  }

  redirect("/admin/news");
};

export const deleteNews = async (id: string) => {
  const data = await getImagesById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.news.delete({ where: { id } });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus berita" };
  }

  redirect("/admin/news");
};

// ACHIEVEMENT
export const uploadAchievement = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = UploadFormAchievement.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { title, description, image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.achievement.create({
      data: { title, description, image: url },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload prestasi" };
  }

  redirect("/admin/achievement");
};

export const updateAchievement = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditFormAchievement.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const data = await getImagesAchievementById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  const { title, description, image } = validatedFields.data;
  let imagePath = data.image;

  try {
    if (image instanceof File && image.size > 0) {
      await del(data.image);
      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }

    await prisma.achievement.update({
      where: { id },
      data: { title, description, image: imagePath },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate prestasi" };
  }

  redirect("/admin/achievement");
};

export const deleteAchievement = async (id: string) => {
  const data = await getImagesAchievementById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.achievement.delete({ where: { id } });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus prestasi" };
  }

  redirect("/admin/achievement");
};

// TEACHER
export const uploadTeacher = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadFormTeacher.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { title, description, note, image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.teacher.create({
      data: { title, description, note, image: url },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload data guru" };
  }

  redirect("/admin/teacher");
};

export const updateTeacher = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = EditFormTeacher.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const data = await getImagesTeacherById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  const { title, description, note, image } = validatedFields.data;
  let imagePath = data.image;

  try {
    if (image instanceof File && image.size > 0) {
      await del(data.image);
      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }

    await prisma.teacher.update({
      where: { id },
      data: { title, description, note, image: imagePath },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate data guru" };
  }

  redirect("/admin/teacher");
};

export const deleteTeacher = async (id: string) => {
  const data = await getImagesTeacherById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.teacher.delete({ where: { id } });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus data guru" };
  }

  redirect("/admin/teacher");
};

// GALLERY
export const uploadGallery = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadFormGallery.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.gallery.create({ data: { image: url } });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload data galeri" };
  }

  redirect("/admin/gallery");
};

export const deleteGallery = async (id: string) => {
  const data = await getImagesGalleryById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.gallery.delete({ where: { id } });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus data galeri" };
  }

  redirect("/admin/gallery");
};

// Ekskul
export const uploadEkskul = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    instagram: formData.get("instagram"),
    tiktok: formData.get("tiktok"),
    image: formData.get("image"),
  };

  // Validasi menggunakan schema yang sesuai (pastikan schema Ekskul sesuai)
  const validatedFields = UploadFormEkskul.safeParse(rawData);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, instagram, tiktok, image } = validatedFields.data;

  try {
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    await prisma.ekskul.create({
      data: { name, instagram, tiktok, image: url },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload ekstrakurikuler" };
  }

  redirect("/admin/ekskul");
};

export const updateEkskul = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name"),
    instagram: formData.get("instagram"),
    tiktok: formData.get("tiktok"),
    image: formData.get("image"),
  };

  const validatedFields = EditFormEkskul.safeParse(rawData);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const data = await getImagesEkskulById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  let imagePath = data.image;
  const { name, instagram, tiktok, image } = validatedFields.data;

  try {
    if (image instanceof File && image.size > 0) {
      await del(data.image);
      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      imagePath = url;
    }

    await prisma.ekskul.update({
      where: { id },
      data: { name, instagram, tiktok, image: imagePath },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate ekstrakurikuler" };
  }

  redirect("/admin/ekskul");
};

export async function deleteEkskul(id: string) {
  await prisma.ekskul.delete({
    where: { id },
  });
}

export const UploadSettings = async (
  prevState: unknown,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    gmapsLink: formData.get("gmapsLink"),
    instagram: formData.get("instagram"),
    youtube: formData.get("youtube"),
    tiktok: formData.get("tiktok"),
    videoUrl: formData.get("videoUrl"),
    imageHero: formData.get("imageHero"),
    sejarah: formData.get("sejarah"),
    visi: formData.get("visi"),
    misi: formData.get("misi"),
    tujuan: formData.get("tujuan"),
  };

  const validatedFields = UploadFormSettings.safeParse(rawData);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  // Upload gambar jika ada imageHero (file) di form
  let imageHeroUrl: string | null = null;
  if (rawData.imageHero instanceof File && rawData.imageHero.size > 0) {
    const { url } = await put(rawData.imageHero.name, rawData.imageHero, {
      access: "public",
      multipart: true,
    });
    imageHeroUrl = url;
  }

  try {
    await prisma.setting.create({
      data: {
        name: validatedFields.data.name,
        description: validatedFields.data.description,
        phone: validatedFields.data.phone,
        email: validatedFields.data.email,
        gmapsLink: validatedFields.data.gmapsLink,
        instagram: validatedFields.data.instagram,
        youtube: validatedFields.data.youtube,
        tiktok: validatedFields.data.tiktok,
        videoUrl: validatedFields.data.videoUrl ?? null,
        imageHero: imageHeroUrl,
        sejarah: validatedFields.data.sejarah,
        visi: validatedFields.data.visi,
        misi: validatedFields.data.misi,
        tujuan: validatedFields.data.tujuan,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload pengaturan" };
  }

  redirect("/admin/settings");
};

export const updateSettings = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    gmapsLink: formData.get("gmapsLink"),
    instagram: formData.get("instagram"),
    youtube: formData.get("youtube"),
    tiktok: formData.get("tiktok"),
    videoUrl: formData.get("videoUrl"),
    imageHero: formData.get("imageHero"),
    sejarah: formData.get("sejarah"),
    visi: formData.get("visi"),
    misi: formData.get("misi"),
    tujuan: formData.get("tujuan"),
  };

  const validatedFields = EditFormSettings.safeParse(rawData);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const data = await prisma.setting.findUnique({ where: { id } });
  if (!data) return { message: "Tidak ada data ditemukan" };

  let imageHeroUrl = data.imageHero;

  try {
    if (rawData.imageHero instanceof File && rawData.imageHero.size > 0) {
      if (data.imageHero) await del(data.imageHero);
      const { url } = await put(rawData.imageHero.name, rawData.imageHero, {
        access: "public",
        multipart: true,
      });
      imageHeroUrl = url;
    }

    await prisma.setting.update({
      where: { id },
      data: {
        name: validatedFields.data.name,
        description: validatedFields.data.description,
        phone: validatedFields.data.phone,
        email: validatedFields.data.email,
        gmapsLink: validatedFields.data.gmapsLink,
        instagram: validatedFields.data.instagram,
        youtube: validatedFields.data.youtube,
        tiktok: validatedFields.data.tiktok,
        videoUrl: validatedFields.data.videoUrl ?? null,
        imageHero: imageHeroUrl,
        sejarah: validatedFields.data.sejarah,
        visi: validatedFields.data.visi,
        misi: validatedFields.data.misi,
        tujuan: validatedFields.data.tujuan,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate pengaturan" };
  }

  redirect("/admin/settings");
};
