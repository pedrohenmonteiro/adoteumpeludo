import { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  length?: "small" | "medium" | "full";
  color?: "yellow" | "transparent";
} & ButtonTypes;

const Button = ({
  children,
  color = "yellow",
  length = "medium",
  ...props
}: ButtonProps) => {
  const lengthClasses = {
    small: "py-1 px-4",
    medium: "py-2 px-6",
    full: "w-full py-1",
  };

  const colorClasses =
    color == "yellow"
      ? "bg-amber-300 text-amber-800 border-amber-500"
      : "bg-transparent text-white hover:border-gray-200 hover:text-gray-200 border-[1px]";

  return (
    <button
      {...props}
      className={`${lengthClasses[length]} ${colorClasses} rounded cursor-pointer transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
