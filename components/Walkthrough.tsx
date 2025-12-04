"use client";

import { useAtom } from "jotai";
import { stepAtom } from "@/store/step";
import { closeAtom } from "@/store/close";

const steps = [
  {
    title: "Your Profile",
    description:
      "Tap your avatar to access account settings and personalization options.",
  },
  {
    title: "The Feed",
    description:
      "Browse the latest updates here. Scroll down to see more content.",
  },
  {
    title: "Quick Create",
    description:
      "Ready to share? Tap the plus button to start a new post instantly.",
  },
  {
    title: "Menu",
    description: "Find additional options and the reset button here.",
  },
];

const Walkthrough = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [isClosed, setIsClosed] = useAtom(closeAtom);

  if (isClosed) return null;

  const baseDetailsClasses =
    "bg-gray-100 absolute w-full max-w-[400px] p-4 rounded-md";

  const detailsPositionClasses =
    step === 0
      ? "top-[78px]"
      : step === 1
      ? "top-[488px] right-4"
      : step === 2
      ? "top-[calc(100vh-300px)] right-4"
      : "top-[74px] right-[2px]";

  return (
    <div className="w-[440px] h-[100vw] absolute top-0 left-1/2 -translate-x-1/2 z-10 p-3">
      <div className={`${baseDetailsClasses} ${detailsPositionClasses}`}>
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-lg">{steps[step].title}</p>
          <p className="bg-blue-100 text-blue-600 px-3 py-1.5 leading-3.5 rounded-2xl text-sm">
            {step + 1} / 4
          </p>
        </div>

        <p className="text-slate-500 mb-6">{steps[step].description}</p>

        <div className="flex justify-between items-center px-2 pt-2 text-sm border-t border-gray-200">
          <button
            className="text-gray-500 cursor-pointer"
            onClick={() => setIsClosed(true)}
          >
            Skip
          </button>

          <div className="flex gap-2">
            {step > 0 && (
              <button
                className="px-3 py-1.5 rounded-lg cursor-pointer bg-gray-200 text-slate-700"
                onClick={() => setStep((c) => c - 1)}
              >
                Back
              </button>
            )}
            <button
              className="px-3 py-1.5 rounded-lg cursor-pointer bg-[rgb(20,141,255)] text-white"
              onClick={() =>
                step === 3 ? setIsClosed(true) : setStep((c) => c + 1)
              }
            >
              {step === 3 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
