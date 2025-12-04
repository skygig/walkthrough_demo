"use client";
import { useAtomValue } from "jotai";
import { stepAtom } from "@/store/step";
import { closeAtom } from "@/store/close";

const Navbar = () => {
  const step = useAtomValue(stepAtom);
  const isClosed = useAtomValue(closeAtom);

  const showOverlay1 = step === 0;
  const showOverlay2 = step === 3;

  return (
    <div className="border-b border-gray-200 p-4 flex justify-between relative">
      <div className="flex items-center gap-2">
        <div className="relative">
          <img
            src="/avatar.svg"
            alt="avatar"
            className="w-[38px] h-auto border-2 border-blue-200 rounded-full"
          />

          {!isClosed && showOverlay1 && (
            <div
              className="
                absolute -top-1 -left-1
                w-[46px] h-[46px]
                rounded-lg
                shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]
                z-10
              "
            />
          )}
        </div>

        <h1 className="font-semibold text-base">DemoApp</h1>
      </div>

      <img src="/menu.svg" alt="menu" className="w-6 cursor-pointer" />

      {!isClosed && showOverlay2 && (
        <div
          className="
            absolute
            top-[0.65rem] right-1
            z-10
          "
        >
          <div
            className="
              w-12 h-12
              rounded-lg
              shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]
              z-10
            "
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
