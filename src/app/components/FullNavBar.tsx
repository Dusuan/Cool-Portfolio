import React from "react";

interface FullNavBarProps {
  show: boolean;
}

const FullNavBar: React.FC<FullNavBarProps> = ({ show }) => {
  return (
    <div className="z-20">
      <div
        className={`transition-all ease-in-out absolute z-10 bg-gray-800 h-full w-full ${
          show ? "right-0" : "right-full"
        }`}
      >
        <div className="bg-slate-300 w-30 h-32">

        </div>
      </div>
    </div>
  );
};

export default FullNavBar;
