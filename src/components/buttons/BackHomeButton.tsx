import React from 'react';
import Link from 'next/link';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface BackHomeButtonProps {
  containerClassName?: string;
}

const BackHomeButton: React.FC<BackHomeButtonProps> = ({
  containerClassName = 'w-full p-4 flex justify-start',
}) => (
  <div className={containerClassName}>
    <Link href="/">
      <div className="flex justify-center items-center border-2 border-white rounded-full py-4 px-4">
        <ArrowLeftIcon className="h-6 w-6 text-white" />
      </div>
    </Link>
  </div>
);

export default BackHomeButton;