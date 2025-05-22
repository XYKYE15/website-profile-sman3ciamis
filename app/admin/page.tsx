import SideBar from "@/components/admin/sidebar/SideBar";
import Navbar from "@/components/admin/navbar/Navbar";

const PageAdmin = async () => {

  return (
    <div className="min-h-screen flex">
      <Navbar />
      <SideBar />
    </div>
  );
};

export default PageAdmin;
