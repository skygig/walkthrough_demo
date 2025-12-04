"use client";

import { useAtomValue } from "jotai";
import { closeAtom } from "@/store/close";
import { stepAtom } from "@/store/step";

const Feed = () => {
  const step = useAtomValue(stepAtom);
  const isClosed = useAtomValue(closeAtom);

  const showOverlay = step === 1;

  return (
    <div className="px-4 overflow-y-scroll h-[calc(100vh-180px)]">
      {[1, 2, 3, 4].map((item) => (
        <Post key={item} user={`User ${item}`} />
      ))}

      {!isClosed && showOverlay && (
        <div
          className="
            absolute
            top-0 left-0
            w-screen h-screen
            pr-3.5
            z-10
          "
        >
          <div
            className="
              w-[410px] h-[388px]
              rounded-lg
              shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]
              z-10
              mx-auto
              mt-20
            "
          />
        </div>
      )}
    </div>
  );
};

const Post = ({ user }: { user: string }) => {
  return (
    <div className="w-full h-[280px] mb-5 border border-gray-300 rounded-xl p-2 flex flex-col gap-2">
      <div className="flex items-center gap-2 font-semibold text-sm">
        <div className="w-[34px] h-[34px] rounded-full bg-gray-300"></div>
        <div>{user}</div>
      </div>

      <div className="w-full bg-gray-300 flex-1 rounded-md"></div>
    </div>
  );
};

export default Feed;
