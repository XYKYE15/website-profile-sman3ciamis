import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function contact() {
  return (
    <div className="md:my-40">
      <div className="flex items-center justify-center md:shadow-xl text-xl md:h-80 border-t-20 border-b-20 border-blue-500">
      <div className="grid md:grid-cols-2 grid-cols-1 mx-auto gap-5 md:gap-1 text-center md:w-300 md:h-120 h-200 md:rounded-3xl text-blue-900 bg-white">
        <div className=" flex flex-col py-5 md:pl-30 items-center justify-center">
          <h1 className="text-2xl font-semibold md:py-3 mb-4">SMAN 3 CIAMIS</h1>
          <div className="md:w-100 w-60 mx-auto border-b-2 p-2 md:text-2xl text-lg font-semibold min-w-full md:min-w-0">
            <h3>
              Jl. Bojonghuni No.87, Maleber, Kec. Ciamis, Kabupaten Ciamis, Jawa
              Barat 46214
            </h3>
          </div>
          <div className="mx-auto md:w-100 w-60 mt-5 min-w-full md:min-w-0">
            <p className="flex items-center gap-2">
              <FaPhone />
              <span>0812-3456-7890</span>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail />
              <span>smaan3Ciamis@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 md:gap-5">
          <h1 className="text-2xl font-semibold">Peta Lokasi</h1>
          <div className="mx-auto md:w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.305629075714!2d108.3368966748377!3d-7.319524871975392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5eae6546e071%3A0x20efa4219d1ee484!2sSekolah%20Menengah%20Atas%20(SMA)%20Negeri%203%20Ciamis!5e0!3m2!1sid!2sid!4v1746786101188!5m2!1sid!2sid"
              width= "100%"
              height={350}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default contact;
