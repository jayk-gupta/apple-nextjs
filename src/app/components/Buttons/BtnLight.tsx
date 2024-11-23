import React, { ReactNode } from "react";
interface BtnProps {
  children: ReactNode;
}
function BtnLight({ children }: BtnProps) {
  return (
    <button className="rounded-full bg-none border-2 border-blue-400 px-4 py-2 text-blue-500 font-normal">
      {children}
    </button>
  );
}

export default BtnLight;
