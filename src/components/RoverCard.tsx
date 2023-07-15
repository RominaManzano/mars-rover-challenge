import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';

import { Rover } from '@/types/Rover.type';

interface RoverCardProps {
  name: Rover;
};

const RoverCard: React.FC<RoverCardProps> = ({ name }) => {
  const positionClasses = 'w-full h-full flex justify-center items-center absolute z-10 top-0 hover:cursor-pointer';
  const backgroundClasses = 'bg-black bg-opacity-30 hover:bg-opacity-10';

  return (
    <div className="rounded-2xl overflow-hidden drop-shadow-lg">
      <Link href={`/${name}`}>
        <div className="relative">
          <Image
            src={`/images/${name}-rover.jpg`}
            alt={name}
            width={320}
            height={320}
          />
          <div className={classnames(positionClasses, backgroundClasses)}>
            <h4 className="text-lg uppercase font-bold tracking-[0.2rem] drop-shadow-lg">
              {name}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RoverCard