import React from 'react';
// import Image from 'next/image';

import { fetchPhotos } from '@/services/photos';

export const getStaticPaths = async () => ({
  paths: [
    { params: { rover: 'curiosity' } },
    { params: { rover: 'opportunity' } },
    { params: { rover: 'spirit' } },
  ],
  fallback: true,
});

const RoverPage: React.FC = async ({ params }: any) => {
  const { rover } = params;
  const { photos } = await fetchPhotos({ rover });

  if (!photos || photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase">
        {rover}
      </h1>
      
      {photos.map((photo: any) => {
        return (
          <div key={photo.id}>
            {photo.id} {photo.img_src}
            {/* <Image
              src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
              alt={photo.id}
              width={200}
              height={200}
            /> */}
            <img src={photo.img_src} alt={photo.id} width={200} height={200} />
          </div>
        );
      })}
    </div>
  )
}

export default RoverPage;