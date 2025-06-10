"use client";
import Magnetic from "./MagneticButton";

function Button({ children, style, magnetic = false }) {
  const type = {
    small:
      "text-lg w-14 h-14 border-2 border-black rounded-md flex justify-center items-center",
    primary:
      "px-5 py-4 bg-black text-white rounded-md text-md flex items-center",
  };
  return magnetic ? (
    <Magnetic>
      <button className={type[style]}>{children}</button>
    </Magnetic>
  ) : (
    <button className={type[style]}>{children}</button>
  );
}

export default Button;
