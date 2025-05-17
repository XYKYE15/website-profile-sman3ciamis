import EditForm from "@/components/EditNews/EditForm";
import { getImagesById } from "@/lib/data";
import { notFound } from "next/navigation";

type EditPageProps = {
  params: {
    id: string;
  };
};

const EditPage = async ({ params }: EditPageProps) => {
  const { id } = await Promise.resolve(params);
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
};

export default EditPage;
