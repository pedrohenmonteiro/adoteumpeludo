import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonTypes) => {
  return (
    <button
      {...props}
      className="bg-transparent border-[1px] border-white text-white rounded py-1 px-4 cursor-pointer hover:bg-amber-500 hover:text-amber-800 transition-all hover:border-amber-500"
    >
      {children}
    </button>
  );
};

export default Button;
