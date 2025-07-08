import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";

export const GoggleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", {
          redirectTo: "/admin?login=success",
        });
      }}
    >
      <button className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 w-full">
        <FcGoogle size={25} />
        Masuk dengan Google
      </button>
    </form>
  );
};
