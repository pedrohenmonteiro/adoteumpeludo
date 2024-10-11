import { IoPawOutline } from "react-icons/io5";

type LogoProps = {
  size?: "larger" | "smaller";
};

export const Logo = ({ size = "larger" }: LogoProps) => {
  return (
    <h1
      className={` flex items-center gap-2 font-bold text-white ${
        size == "larger" ? "text-lg" : "text-sm"
      }`}
    >
      Adote um peludo
      <IoPawOutline size={22} />
    </h1>
  );
};
