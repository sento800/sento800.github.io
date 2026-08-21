"use client";
import Magnetic from "./MagneticButton";

function Button({ children, style, magnetic = false, onClick, className }) {
  const type = {
    small: `text-lg w-14 h-14 border-2 border-border rounded-xl flex justify-center items-center cursor-pointer hover:bg-secondary transition-colors ${className}`,
    primary: `px-6 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center cursor-pointer ${className}`,
    mobile: `bg-card text-card-foreground border border-border rounded-xl text-md flex items-center cursor-pointer hover:bg-secondary transition-colors ${className}`,
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
