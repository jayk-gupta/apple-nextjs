import React,{ReactNode} from 'react'
interface BtnProps {
children: ReactNode
}
function BtnDark({children}:BtnProps ) {
  return (
    <button className="rounded-full bg-blue-500 text-white font-normal px-4 py-2 ">
      {children}
    </button>
  );
}

export default BtnDark