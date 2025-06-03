import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { prisma } from "@/lib/prisma";

const Contact = async () => {
  const setting = await prisma.setting.findFirst();

  if (!setting) {
    return (
      <div className="p-6 text-center text-gray-500">
        Data kontak tidak tersedia
      </div>
    );
  }

  return (
    <div className="md:my-40 w-full">
      <div className="flex items-center justify-center md:shadow-xl text-xl md:h-80 border-t-20 border-b-20 border-blue-500 bg-blue-500 md:bg-gray-100">
        <div
          className="grid md:grid-cols-2 grid-cols-1 mx-auto gap-5 md:gap-1 text-center md:w-300 w-92 md:h-120 h-200 rounded-3xl text-blue-900 bg-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Info Sekolah */}
          <div
            className="flex flex-col py-5 md:pl-30 items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1
              className="text-2xl font-semibold md:py-3 mb-4"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              SMAN 3 CIAMIS
            </h1>
            <div
              className="mx-auto border-b-3 border-blue-900 border-w-10 p-2 w-70 md:w-full"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="md:text-2xl text-lg font-semibold">
                Jl. Bojonghuni No.87, Maleber, Kec. Ciamis, Kabupaten Ciamis,
                Jawa Barat 46214
              </h3>
            </div>
            <div
              className="mx-auto md:w-100 mt-5 min-w-full md:min-w-0 md:ml-10 ml-10"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <p className="flex items-center gap-2">
                <FaPhone />
                <span className="text-lg md:text-2xl">{setting.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MdEmail />
                <span className="text-lg md:text-2xl break-words">{setting.email}</span>
              </p>
            </div>
          </div>

          {/* Peta Lokasi */}
          <div
            className="flex flex-col justify-center gap-8 md:gap-5"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h1 className="text-2xl font-semibold">Peta Lokasi</h1>
            <div
              className="mx-auto md:w-100"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <iframe
                src={setting.gmapsLink}
                width="100%"
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
};

export default Contact;
