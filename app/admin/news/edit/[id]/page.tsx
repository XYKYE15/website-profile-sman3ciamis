import { notFound } from "next/navigation";
import { getImagesById } from "@/lib/data";
import EditForm from "@/components/EditNews/EditForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Berita",
};

interface EditPageProps {
  params: { id: string };
}

export default async function EditPage({ params }: EditPageProps) {
  const { id } = params;
  const data = await getImagesById(id);

  if (!data) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold mb-5">Update Berita</h1>
        <EditForm data={data} />
      </div>
    </div>
  );
}
