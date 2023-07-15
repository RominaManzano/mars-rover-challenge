import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const BackHomeButton = () => (
  <div className="w-full p-4 flex justify-start">
    <Link href="/">
      <div className="flex justify-center items-center border-2 border-white rounded-full py-4 px-4">
        <ArrowLeftIcon className="h-6 w-6 text-white" />
      </div>
    </Link>
  </div>
);

export default BackHomeButton;