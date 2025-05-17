import Image from "next/image";

function Sejarah() {
  return (
    <div className="bg-white my-5 mx-auto md:w-250 p-5 rounded-xl flex flex-col items-center justify-center">
      <div className="mb-10 shadow-2xl h-80 rounded-2xl">
        <Image src={"/hero.jpg"} width={300} height={200} alt="card image"className="w-full h-full rounded-2xl" />
      </div>
      <div className="border border-blue-500 rounded-2xl w-200 p-2">
        <p className="text-justify leading-relaxed text-base text-blue-900">
          Sekolah Menengah Atas Negeri 3 Ciamis atau yang lazim di sebut SMANTIC
          adalah salah satu sekolah di Kabupaten Ciamis, yang beralamat di jalan
          Bojonghuni Nomor 87 dan berdiri diatas tanah milik negara seluas 3,2
          Ha sehingga menjadi sekolah terluas di Kabupaten Ciamis serta memliki
          lingkungan asri yang dipenuhi pepohonan. SMAN 3 Ciamis sudah lama
          berdiri dan mempunyai catatan sejarah yang panjang dalam perjalanannya
          hingga menjadi sekolah yang terpandang di Kabupaten Ciamis. Sejarah
          mencatat bahwa pada awalnya sekolah ini bernama Sekolah Pendidikan
          Guru ( SPG ) yang bertujuan untuk mencetak calon-calon guru. Kemudian
          berdasarkan peraturan pemerintah, tahun 1991 SPG ditutup untuk
          kemudian berubah menjadi Sekolah Menengah Atas Negeri 3 Ciamis. Pada
          tahun ...... pemerintah dengan peraturan pemerintah No ......
          memberlakukan peraturan perubahan nama Sekolah Menengah Atas menjadi
          Sekolah Menengah Umum, sehingga pada tahun itu juga sekolah ini
          berubah nama menjadi Sekolah Menengah Umum Negeri 3 Ciamis, akan
          tetapi peraturan tersebut tidak bertahan lama dan kemudian terbitlah
          peraturan baru dari pemerintah no .... tahun .... untuk merubah nama
          Sekolah Menengah Umum menjadi Sekolah Menengah Atas seperti beberapa
          tahun sebelumnya. Berdasarkan peraturan tersebut, sekolah pun berubah
          nama lagi menjadi Sekolah Menengah Atas Negeri 3 Ciamis dan masih
          bertahan hingga sekarang. Dalam perjalananya yang panjang, Sekolah
          kita tercinta ini sudah sangat banyak meraih prestasi, baik tingkat
          kabupaten hingga nasional. SMAN 3 Ciamis didaulat menjadi sekolah
          berwawasan Wiyata Mandala. Dan mendapat gelar sebagai sekolah
          bernuansa Lingkungan Hidup Oleh Bapak Gubernur Jawa Barat Drs. H. Dani
          Setiawan pada tahun 2007. Selain sekolah yang mendapatkan banyak
          prestasi, guru dan siswapun tidak kalah banyak yang mendapatkan
          prestasi. Semoga dengan mengetahui sejarah berdirinya Sekolah kita
          tercinta ini akan membuat kita bangga sebagai siswa SMAN 3 Ciamis dan
          termotivasi untuk terus berprestasi dalam bidang apapun.
        </p>
      </div>
    </div>
  );
}

export default Sejarah;
