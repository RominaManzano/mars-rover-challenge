import React from 'react';

interface FieldContainerProps {
  children: React.ReactNode;
  label: string;
}

export const fieldClassName = 'h-10 px-4 py-2 rounded-md';

const FieldContainer: React.FC<FieldContainerProps> = ({
  children,
  label,
}) => (
  <div className="flex flex-col w-60 md:w-72">
    <label
      htmlFor="camera"
      className="text-white text-[12px] font-bold tracking-[0.2rem] mb-1.5 uppercase"
    >
      {label}
    </label>
    {children}
  </div>
);

export default FieldContainer;
