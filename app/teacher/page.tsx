import TeacherImage from "@/components/teacherImage/Teacher";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenaga Kependidikan SMAN 3 Ciamis",
};

async function PageTeacher() {
  const data = await prisma.teacher.findMany({
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      title: true,
      description: true,
      note: true,
      image: true,
      nip: true,
      nuptk: true,
    },
  });

  const groupByRole = (role: string) =>
    data.filter((teacher) => teacher.description === role);

  const jabatanSections = [
    { title: "Kepala Sekolah", teachers: groupByRole("Kepala Sekolah") },
    { title: "Staff Wakasek", teachers: groupByRole("Staff Wakasek") },
    { title: "Tenaga Pendidik", teachers: groupByRole("Tenaga Pendidik") },
    { title: "Tata Usaha", teachers: groupByRole("Tata Usaha") },
  ];

  return (
    <div className="py-25 flex flex-col items-center">
      <div className="py-10">
        <h1 className="text-2xl font-semibold text-blue-900">
          Tenaga Kependidikan
        </h1>
      </div>
      <div className="bg-white shadow-2xl md:w-300 w-113 rounded-xl p-5 border border-blue-500">
        <div className="flex flex-col items-center justify-center gap-5">
          {jabatanSections.map((section) => (
            <div key={section.title} className="pt-6 pb-3">
              <div className="pb-10 pt-5">
                <h2 className="text-xl font-semibold text-blue-900 text-center">
                  {section.title}
                </h2>
              </div>
              <div
                className={
                  section.teachers.length === 1
                    ? "flex justify-center"
                    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
                }
              >
                {section.teachers.map((teacher) => (
                  <TeacherImage
                    key={teacher.id}
                    name={teacher.title}
                    position={teacher.description}
                    note={teacher.note}
                    imageUrl={teacher.image}
                    nip={teacher.nip ?? undefined}
                    nuptk={teacher.nuptk ?? undefined}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageTeacher;
