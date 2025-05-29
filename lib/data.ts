import { prisma } from "@/lib/prisma";

// mengambil data berita
export const getImages = async () => {
  try {
    const result = await prisma.news.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

// mengambil data berita berdasarkan id
export const getImagesById = async (id: string) => {
  try {
    const result = await prisma.news.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

// mengambil data prestasi
export const getImagesAchievement = async () => {
  try {
    const result = await prisma.achievement.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

// mengambil data prestasi berdasarkan id
export const getImagesAchievementById = async (id: string) => {
  try {
    const result = await prisma.achievement.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

// mengambil data guru
export const getImagesTeacher = async () => {
  try {
    const result = await prisma.teacher.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

// mengambil data guru berdasarkan id
export const getImagesTeacherById = async (id: string) => {
  try {
    const result = await prisma.teacher.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

// mengambil semua data guru
export async function getAllTeachers() {
  return await prisma.teacher.findMany();
}

// mengambil data Gallery
export const getImagesGallery = async () => {
  try {
    const result = await prisma.gallery.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

// mengambil data Gallery berdasarkan id
export const getImagesGalleryById = async (id: string) => {
  try {
    const result = await prisma.gallery.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data: " + error.message);
    } else {
      throw new Error("Gagal mengambil data.");
    }
  }
};

export const getImagesEkskul = async () => {
  try {
    const result = await prisma.ekskul.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data ekskul: " + error.message);
    } else {
      throw new Error("Gagal mengambil data ekskul.");
    }
  }
};

export async function getImagesEkskulById(id: string) {
  return await prisma.ekskul.findUnique({ where: { id } });
}

// mengambil data settings
export const getSettings = async () => {
  try {
    const result = await prisma.setting.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data settings: " + error.message);
    } else {
      throw new Error("Gagal mengambil data settings.");
    }
  }
};

// mengambil data settings berdasarkan id
export const getSettingsById = async (id: string) => {
  try {
    const result = await prisma.setting.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Gagal mengambil data setting: " + error.message);
    } else {
      throw new Error("Gagal mengambil data setting.");
    }
  }
};

export async function getHero() {
  const hero = await prisma.setting.findFirst(); 
  return hero;
}

export async function getHeroData() {
  const data = await prisma.setting.findFirst();
  if (!data) {
    throw new Error("Data hero tidak ditemukan");
  }
  return {
    videoUrl: data.videoUrl,
  };
}