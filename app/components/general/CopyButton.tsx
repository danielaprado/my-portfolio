"use client";

import copyIcon from "@/app/images/copy_icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CopyButton() {
  const [showCopyIcon, setShowCopyIcon] = useState<boolean>(false);
  console.log(showCopyIcon);

  useEffect(() => {
    setTimeout(() => setShowCopyIcon(false), 4000);
  }, [showCopyIcon]);

  return (
    <button
      className="relative"
      onClick={() => {
        setShowCopyIcon(true);
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL ?? "");
      }}
    >
      <div className="absolute flex justify-center items-center gap-3 left-0 -top-8 md:w-[365px] w-[241px] py-4 bg-background md:text-3xl text-lg hover:border-solid border-dashed border-white border text-white z-20">
        <span>{showCopyIcon ? "COPIED" : "GET IN TOUCH"}</span>
        {showCopyIcon && (
          <Image src={copyIcon} alt="Dashed copy icon" width={21} height={23} />
        )}
      </div>
    </button>
  );
}
