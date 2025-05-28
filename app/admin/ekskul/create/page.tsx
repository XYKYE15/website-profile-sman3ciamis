import CreateForm from "@/components/CreateAchievement/CreateForm";

const CreatePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold mb-5">Tambah Prestasi</h1>
        <CreateForm />
      </div>
    </div>
  );
};

export default CreatePage;