import CreateFormSettings from "@/components/CreateSettings/CreateForm";

export default function CreatePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div className="bg-white rounded-md shadow-lg p-6 max-w-4xl w-full overflow-hidden">
        <h1 className="text-2xl font-bold mb-6 text-center">Pengaturan</h1>
        <CreateFormSettings />
      </div>
    </div>
  );
}
