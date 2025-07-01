import { Button } from "antd";
import React, { FC } from "react";

interface INtButton {
  children: React.ReactNode;
  type?: "primary" | "default";
  className?: string;
  onClick?: () => void;
  htmlType?: "button" | "submit" | "reset";
}

const NtButton: FC<INtButton> = ({
  type,
  children,
  className,
  onClick,
  htmlType,
}) => {
  return (
    <Button
      type={type}
      className={` bg-primary text-white p-2 transition-colors duration-300 ${className}`}
      onClick={onClick}
      htmlType={htmlType}
    >
      {children}
    </Button>
  );
};

export default NtButton;
