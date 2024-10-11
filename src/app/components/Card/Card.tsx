import Image from "next/image";
import Button from "../Button/Button";
import { IoPaw } from "react-icons/io5";

export type CardProps = {
  img: string;
  name: string;
};

export const Card = ({ img, name }: CardProps) => {
  return (
    <div className="rounded-md shadow-md">
      <Image
        src={img}
        alt="Dog photo"
        width={300}
        height={300}
        className="rounded-t-md"
      />

      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-indigo-500 flex items-center gap-2">
            <div className="text-indigo-500">
              <IoPaw size={17} />
            </div>
            <p>{name}</p>
          </div>
          <p className="text-sm ml-2">Londrina/PR</p>
        </div>
        <Button length="full">Quero Adotar</Button>
      </div>
    </div>
  );
};
