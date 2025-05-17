import AddTeacher from "@/components/CreateTeacher/CreateForm";

export default function CreatePage() {
  return (
   <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold ">Tambah data guru</h1>
        <AddTeacher />
      </div>
    </div>
  );
}