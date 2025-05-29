import CreateFormSettings from "@/components/CreateSettings/CreateForm";


export default function CreatePage() {
  return (
   <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white rounded-sm shadow p-8">
        <h1 className="text-2xl font-bold ">Settings</h1>
        <CreateFormSettings/>
      </div>
    </div>
  );
}