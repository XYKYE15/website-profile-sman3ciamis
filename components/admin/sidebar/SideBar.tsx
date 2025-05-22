import LinkSideBar from "./LinkSideBar";

function SideBar() {
  return (
    <div className="bg-blue-500 w-70 min-h-screen">
      <h1 className="text-white text-center text-2xl font-semibold  pt-7 pb-6">
        Admin Panel
      </h1>
      <div>
        <LinkSideBar />
      </div>
    </div>
  );
}

export default SideBar;
