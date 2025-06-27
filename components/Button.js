"use client";
import Magnetic from "./MagneticButton";

function Button({ children, style, magnetic = false, onClick, className }) {
  const type = {
    small: `text-lg w-14 h-14 border-2 border-black rounded-md flex justify-center items-center cursor-pointer ${className}`,
    primary: `px-5 py-4 bg-black text-white rounded-md text-md flex items-center cursor-pointer ${className}`,
    mobile: `bg-white text-black rounded-md text-md flex items-center cursor-pointer ${className}`,
  };

  return magnetic ? (
    <Magnetic>
      <button className={type[style]} onClick={onClick}>
        {children}
      </button>
    </Magnetic>
  ) : (
    <button className={type[style]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
