import React from "react";

interface Props {
  label: string;
  detail?: string;
  children: React.ReactNode;
}

const Waypoint: React.FC<Props> = ({ label, detail, children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-2xl xl:text-3xl">{label}</div>
      {children}
      <div className="text-xl">{detail}</div>
    </div>
  );
};

export default Waypoint;
