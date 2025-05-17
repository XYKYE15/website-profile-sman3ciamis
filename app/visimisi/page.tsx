import VisiMisi from "@/components/visiMisi/VisiMisi";

function page() {
  return (
    <div className="py-25 flex flex-col justify-center items-center">
        <div className=" w-300 my-10">
            <h1 className="text-center text-xl font-semibold">Visi & Misi</h1>
        </div>
      <div className="bg-white w-300 rounded-xl shadow-xl">
        <VisiMisi />
      </div>
    </div>
  );
}

export default page;
