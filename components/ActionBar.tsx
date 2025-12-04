"use client";
import { useAtomValue } from "jotai";
import { stepAtom } from "@/store/step";
import { closeAtom } from "@/store/close";

const ActionBar = () => {
  const step = useAtomValue(stepAtom);
  const isClosed = useAtomValue(closeAtom);

  const showOverlay = step === 2;

  return (
    <div className="flex justify-between p-4 px-14 border-t border-gray-200 relative gap-1">
      <img src="/action/home.svg" alt="home" />

      <img
        src="/action/create.svg"
        alt="create"
        className="w-[68px] absolute top-[-18px] left-1/2 -translate-x-1/2"
      />

      {!isClosed && showOverlay && (
        <div
          className="
            absolute
            -top-6 left-0
            w-full
            z-10
          "
        >
          <div
            className="
              w-[78px] h-[78px]
              rounded-2xl
              shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]
              z-10
              mx-auto
            "
          />
        </div>
      )}

      <img src="/action/search.svg" alt="search" />
    </div>
  );
};

export default ActionBar;
