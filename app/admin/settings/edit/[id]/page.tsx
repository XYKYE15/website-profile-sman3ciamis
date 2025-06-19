import EditForm from "@/components/EditSettings/EditForm";
import { getSettingsById } from "@/lib/data";
import { notFound } from "next/navigation";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

const EditPage = async ({ params }: EditPageProps) => {
  const { id } = await params;

  const data = await getSettingsById(id);

  if (!data) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div className="bg-white rounded-md shadow-lg p-6 max-w-4xl w-full overflow-hidden">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Pengaturan</h1>
        <EditForm data={data} />
      </div>
    </div>
  );
};

export default EditPage;
