import React from "react";
import { ProgressBarProps } from "./types";

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = "bg-[#FF1F1F]",
  height = "h-6",
  label,
}) => {
  return (
    <div className={`w-[200px] ${height} bg-[#F0F0F0] rounded relative`}>
      <div
        className={`${color} ${height} rounded`}
        style={{ width: `${progress}%` }}
      >
        {label && (
          <span className="absolute left-[20px] transform -translate-x-1/2 text-black font-semibold">
            {label}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
