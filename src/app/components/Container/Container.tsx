import React from "react";

type ContainerProps = {
  size?: "larger" | "smaller";
  className?: string;
  children: React.ReactNode;
};

const Container = ({
  children,
  size = "larger",
  className = "",
}: ContainerProps) => {
  return (
    <div
      className={`m-auto ${className} ${
        size == "larger" ? "max-w-6xl" : "max-w-3xl"
      } `}
    >
      {children}
    </div>
  );
};

export default Container;
