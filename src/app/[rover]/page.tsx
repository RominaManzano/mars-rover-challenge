"use client";

import React from 'react';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import usePhotos from '@/hooks/usePhotos';

export interface Props {
  params: {
    rover: string;
  };
}

export const getStaticPaths = () => ({
  paths: [
    { params: { rover: 'curiosity' } },
    { params: { rover: 'opportunity' } },
    { params: { rover: 'spirit' } },
  ],
  fallback: true,
});

const RoverPage: React.FC<Props> = ({ params }) => {
  const { rover } = params;
  const {
    currentPage,
    isLoading,
    photos,
    setCurrentPage,
  } = usePhotos({ rover });

  if (isLoading) {
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

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        // breakClassName={'break-me'}
        // activeClassName={'active'}
        containerClassName="flex gap-2 mt-8"
        initialPage={currentPage}
        pageCount={36}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => {
          setCurrentPage(selected);
        }}
      />
    </div>
  );
};

export default RoverPage;