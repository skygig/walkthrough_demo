import ActionBar from "@/components/ActionBar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <div className="bg-gray-100 w-[440px] min-h-screen mx-auto shadow-xl flex flex-col justify-between gap-4">
        <Navbar />

        <div className="flex-1">main feed</div>

        <ActionBar />
      </div>
    </div>
  );
}
