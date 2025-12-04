"use client";

import { useState } from "react";
import { useAtom } from "jotai";
import { stepAtom } from "@/store/step";
import { closeAtom } from "@/store/close";

const Navbar = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [isClosed, setIsClosed] = useAtom(closeAtom);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showOverlay1 = step === 0;
  const showOverlay2 = step === 3;

  const handleResetTour = () => {
    setStep(0);
    setIsClosed(false);
    setIsMenuOpen(false);
  };

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

      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="relative"
      >
        <img src="/menu.svg" alt="menu" className="w-6 cursor-pointer" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-2 top-10 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 text-sm z-20 ">
          <button
            type="button"
            onClick={handleResetTour}
            className="flex w-full items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-50 cursor-pointer"
          >
            <span className="text-base">↺</span>
            <span>Reset Tour</span>
          </button>
          <button
            type="button"
            className="w-full text-left px-4 py-2 text-gray-500 hover:bg-gray-50"
          >
            Settings &amp; Privacy
          </button>
        </div>
      )}

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
