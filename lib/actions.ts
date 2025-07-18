"use server";

import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
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
    await signIn("credentials", {
  email,
  password,
  redirectTo: "/admin?login=success",
});

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

//Upload News
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

    revalidatePath("/");
    revalidatePath("/news");
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload berita" };
  }

  redirect("/admin/news");
};

//Update News
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
      await del(data.image); 
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


    revalidatePath("/");
    revalidatePath("/news");
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate berita" };
  }

  redirect("/admin/news");
};

// Fungsi utama menghapus berita
export const deleteNews = async (id: string) => {
  const data = await getImagesById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.news.delete({ where: { id } });


    revalidatePath("/");
    revalidatePath("/news");
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus berita" };
  }

  redirect("/admin/news");
};

// Handler agar bisa digunakan oleh <form action={handleDeleteNews}>
export const handleDeleteNews = async (formData: FormData) => {
  const id = formData.get("id");

  if (!id || typeof id !== "string") {
    console.error("ID tidak valid");
    return;
  }

  await deleteNews(id);
};

//Upload Prestasi
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


    revalidatePath("/");
    revalidatePath("/achievement");
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload prestasi" };
  }

  redirect("/admin/achievement");
};

//Update Prestasi
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

    revalidatePath("/");
    revalidatePath("/achievement");
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate prestasi" };
  }

  redirect("/admin/achievement");
};

// Fungsi utama menghapus prestasi
export const deleteAchievement = async (id: string) => {
  const data = await getImagesAchievementById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.achievement.delete({ where: { id } });

    revalidatePath("/");
    revalidatePath("/achivement");
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus prestasi" };
  }

  redirect("/admin/achievement");
};

export const handleDeleteAchievement = async (formData: FormData) => {
  const id = formData.get("id");

  if (!id || typeof id !== "string") {
    console.error("ID tidak valid");
    return;
  }

  await deleteAchievement(id);
};

// TEACHER
export const uploadTeacher = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadFormTeacher.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { title, description, note, image, nip, nuptk } = validatedFields.data;

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
        nip: nip || null,
        nuptk: nuptk || null,
      },
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

  const { title, description, note, image, nip, nuptk } = validatedFields.data;
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
      data: {
        title,
        description,
        note,
        image: imagePath,
        nip: nip || null,
        nuptk: nuptk || null, 
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return { message: "Gagal mengupdate data guru" };
  }

  redirect("/admin/teacher");
};

// Fungsi utama untuk menghapus guru berdasarkan ID
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

// Handler untuk digunakan pada <form action={...}>
export const handleDeleteTeacher = async (formData: FormData) => {
  const id = formData.get("id");

  if (!id || typeof id !== "string") {
    console.error("ID guru tidak valid");
    return;
  }

  await deleteTeacher(id);
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

// Fungsi utama untuk hapus berdasarkan ID
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

// Handler agar bisa digunakan oleh form action
export const handleDeleteGallery = async (formData: FormData) => {
  const id = formData.get("id");

  if (!id || typeof id !== "string") {
    console.error("ID tidak valid");
    return;
  }

  await deleteGallery(id); // panggil fungsi utama
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

// Fungsi utama untuk menghapus ekskul berdasarkan ID
export const deleteEkskul = async (id: string) => {
  const data = await getImagesEkskulById(id);
  if (!data) return { message: "Tidak ada data ditemukan" };

  try {
    await del(data.image);
    await prisma.ekskul.delete({ where: { id } });
  } catch (error) {
    console.error("Delete error:", error);
    return { message: "Gagal menghapus data ekskul" };
  }

  redirect("/admin/ekskul");
};

// Handler untuk form agar menerima FormData
export const handleDeleteEkskul = async (formData: FormData) => {
  const id = formData.get("id");

  if (!id || typeof id !== "string") {
    console.error("ID tidak valid");
    return;
  }

  await deleteEkskul(id);
};

//Upload pengaturan
export const UploadSettings = async (
  prevState: unknown,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name") ?? "",
    description: formData.get("description") ?? "",
    phone: formData.get("phone") ?? "",
    email: formData.get("email") ?? "",
    gmapsLink: formData.get("gmapsLink") ?? "",
    instagram: formData.get("instagram") ?? "",
    youtube: formData.get("youtube") ?? "",
    tiktok: formData.get("tiktok") ?? "",
    videoUrl: formData.get("videoUrl") ?? null,
    imageHero: formData.get("imageHero"),
    sejarah: formData.get("sejarah") ?? "",
    visi: formData.get("visi") ?? "",
    misi: formData.get("misi") ?? "",
    tujuan: formData.get("tujuan") ?? "",
  };

  const validatedFields = UploadFormSettings.safeParse(rawData);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  let imageHeroUrl: string | null = null;
  if (rawData.imageHero instanceof File && rawData.imageHero.size > 0) {
    const { url } = await put(rawData.imageHero.name, rawData.imageHero, {
      access: "public",
      multipart: true,
      allowOverwrite: true,
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
    sejarah: validatedFields.data.sejarah,
    visi: validatedFields.data.visi,
    misi: validatedFields.data.misi,
    tujuan: validatedFields.data.tujuan,
    instagram: validatedFields.data.instagram ?? "",
    youtube: validatedFields.data.youtube ?? "",
    tiktok: validatedFields.data.tiktok ?? "",
    videoUrl: validatedFields.data.videoUrl ?? "",
    imageHero: imageHeroUrl,
  },
});


    revalidatePath("/");
    revalidatePath("/visimisi");
    revalidatePath("/profile");
    revalidatePath("/contact");
    revalidatePath("/sejarah")
  } catch (error) {
    console.error("Upload error:", error);
    return { message: "Gagal mengupload pengaturan" };
  }

  redirect("/admin/settings");
};

export type EditState =
  | {
      success: false;
      error?: Partial<Record<
        | "name"
        | "description"
        | "phone"
        | "email"
        | "gmapsLink"
        | "instagram"
        | "youtube"
        | "tiktok"
        | "videoUrl"
        | "imageHero"
        | "sejarah"
        | "visi"
        | "misi"
        | "tujuan", string[]>>;
      message?: string;
    }
  | {
      success: true;
    };

export const updateSettings = async (
  prevState: EditState,
  formData: FormData
): Promise<EditState> => {
  const id = formData.get("id");
  if (!id || typeof id !== "string") {
    return { success: false, message: "ID tidak ditemukan." };
  }

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
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const existing = await prisma.setting.findUnique({ where: { id } });
  if (!existing) {
    return { success: false, message: "Data tidak ditemukan." };
  }

  let imageHeroUrl = existing.imageHero;

  try {
    if (rawData.imageHero instanceof File && rawData.imageHero.size > 0) {
      if (existing.imageHero) {
        await del(existing.imageHero);
      }
      const { url } = await put(rawData.imageHero.name, rawData.imageHero, {
        access: "public",
        multipart: true,
      });
      imageHeroUrl = url;
    }

    await prisma.setting.update({
      where: { id },
      data: {
        ...validatedFields.data,
        imageHero: imageHeroUrl,
      },
    });

    revalidatePath("/");
    revalidatePath("/visimisi");
    revalidatePath("/profile");
    revalidatePath("/contact");

    return { success: true };
  } catch (error) {
    console.error("Update Settings Error:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengupdate data.",
    };
  }
};



// Fungsi utama delete setting by ID
export async function deleteSettingById(id: string) {
  if (!id) throw new Error("ID tidak boleh kosong");

  try {
    const setting = await prisma.setting.findUnique({ where: { id } });
    if (!setting) return { error: "Data setting tidak ditemukan" };

    if (setting.imageHero) {
      await del(setting.imageHero);
    }

    await prisma.setting.delete({ where: { id } });

    revalidatePath("/");
    revalidatePath("/visimisi");
    revalidatePath("/profile");
    revalidatePath("/contact");

    return { success: true };
  } catch (error) {
    console.error("Gagal menghapus setting:", error);
    return { error: "Gagal menghapus data settings" };
  }
}


// Handler untuk dipakai di form <form action={...}>
export async function handleDeleteSetting(formData: FormData): Promise<void> {
  const id = formData.get("id");
  if (!id || typeof id !== "string") {
    console.error("ID setting tidak valid");
    return;
  }

  const setting = await prisma.setting.findUnique({ where: { id } });
  if (!setting) {
    console.error("Data setting tidak ditemukan");
    return;
  }

  if (setting.imageHero) {
    await del(setting.imageHero);
  }

  await prisma.setting.delete({ where: { id } });

  revalidatePath("/");
  revalidatePath("/visimisi");
  revalidatePath("/profile");
  revalidatePath("/contact");

  redirect("/admin/settings");
}
