import React from 'react';
import Image from 'next/image';

import { Photo } from '@/types/Photo.type';
import Link from 'next/link';

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => (
  <Link href={photo.img_src} target="_blank">
    <div className="w-auto h-full flex justify-center items-start drop-shadow-lg">
      <Image
        src={photo.img_src}
        alt={photo.img_src}
        width={200}
        height={200}
        unoptimized
        className="w-full h-auto rounded-lg"
      />
    </div>
  </Link>
);

export default PhotoCard;
