import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Rover } from '@/types/Rover.type';

interface RoverCardProps {
  name: Rover;
};

const RoverCard: React.FC<RoverCardProps> = ({ name }) => (
  <div className="rounded-2xl overflow-hidden">
    <Link href={`/${name}`}>
      <div className="relative">
        <Image
          src={`/images/${name}-rover.jpg`}
          alt={name}
          width={320}
          height={320}
          className="opacity-80"
        />
        <div className="w-full flex justify-center items-center absolute z-10 top-[50%]">
          <span className="text-xl capitalize">
            {name}
          </span>
        </div>
      </div>
    </Link>
  </div>
);

export default RoverCard