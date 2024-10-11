import Image from "next/image";

export type CardProps = {
  img: string;
  name: string;
};

export const Card = ({ img, name }: CardProps) => {
  return (
    <div>
      <Image src={img} alt="Dog photo" width={300} height={300} />
      <p>{name}</p>
    </div>
  );
};
