import TeacherImage from "@/components/teacherImage/Teacher";
import { prisma } from "@/lib/prisma"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenaga Kependidikan",
};

async function PageTeacher() {
  const data = await prisma.teacher.findMany({
    orderBy: { createdAt: "asc" },
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
                  section.title === "Kepala Sekolah" ||
                  section.title === "Staff Wakasek"
                    ? "flex gap-5 flex-col md:flex-row justify-center"
                    : "grid md:grid-cols-4 grid-cols-1 gap-2"
                }
              >
                {section.teachers.map((teacher) => (
                  <TeacherImage
                    key={teacher.id}
                    name={teacher.title}
                    position={teacher.description}
                    note={teacher.note}
                    imageUrl={teacher.image}
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
