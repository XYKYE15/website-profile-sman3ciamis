import EkskulCard from "@/components/ekskul/Ekskul";


const PageEkskul = () => {
  return (
    <div className="flex flex-col pt-30 md:flex-row justify-center">
      <div className="md:mx-10 mx-3">
        <h1 className="md:text-2xl text-lg text-blue-900 font-semibold mb-10 text-center ">
          Ekstrakulikuler SMAN 3 Ciamis
        </h1>
        <div className="bg-white md:p-10 p-2  rounded-2xl md:w-210 w-auto mb-5 shadow-lg border border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <EkskulCard />
            <EkskulCard />
            <EkskulCard />
            <EkskulCard />
            <EkskulCard />
            <EkskulCard />
          </div>
        </div>
      </div>
      {/* <div className="mx-5 md:my-9 text-center md:w-85">
        <SideEkskul />
        <div className="bg-white w-65 border-t-5 border-blue-500 rounded-b-xl shadow-2xl mb-7 mx-auto">
          <h3 className="text-blue-900 text-xl font-semibold p-2">Berita</h3>
        </div>
        {allNews.slice(0, 2).map((item) => (
          <SideNews key={item.id} data={item} />
        ))}
      </div> */}
    </div>
  );
};

export default PageEkskul;
