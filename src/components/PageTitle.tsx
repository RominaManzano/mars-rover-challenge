import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <h1 className="text-2xl md:text-5xl uppercase font-extrabold text-center">
    {title}
  </h1>
);

export default PageTitle;
