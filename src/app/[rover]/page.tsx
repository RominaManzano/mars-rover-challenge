"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const getStaticPaths = () => ({
  paths: [
    { params: { rover: 'curiosity' } },
    { params: { rover: 'opportunity' } },
    { params: { rover: 'spirit' } },
  ],
  fallback: true,
});

const RoverPage: React.FC = ({ params }: any) => {
  const { rover } = params;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/rovers/${rover}/photos?sol=1000&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    ).then((response) => {
      response.json()
        .then((data) => {
          setPhotos(data.photos);
        });
    }); 
  }, [rover]);

  if (!photos || photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase">
        {rover}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {photos.map((photo: any) => (
          <div key={photo.id}>
            <Image
              src={photo.img_src}
              alt={photo.id}
              width={200}
              height={200}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoverPage;