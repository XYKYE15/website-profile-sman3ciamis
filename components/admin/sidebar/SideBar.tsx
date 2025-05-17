import LinkSideBar from "./LinkSideBar";

function SideBar() {
  return (
    <div className="bg-blue-500 w-70 min-h-screen">
      <h1 className="text-white text-center text-2xl font-semibold  pt-2 pb-2">
        Admin Panel
      </h1>
      <div>
        <LinkSideBar />
        <div className="flex items-center justify-center pt-70">
        <button>Log Out</button>
      </div>
      </div>
    </div>
  );
}

export default SideBar;
