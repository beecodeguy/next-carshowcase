"use client";

import { ICustomButtonProps } from "@/types";
import { FC } from "react";

const CustomButton: FC<ICustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
}) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
