"use client";

import React from 'react';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import usePhotos from '@/hooks/usePhotos';

import FiltersCard from '@/components/FiltersCard';
import { Rover } from '@/types/Rover.type';

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
    filters,
    isLoading,
    photos,
    setFilters,
  } = usePhotos({ rover });

  const noPhotosAvailable = !isLoading && (!photos || photos.length === 0);
  const photosAvailable = !isLoading && (photos && photos.length > 0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase">
        {rover}
      </h1>
      
      <FiltersCard filters={filters} setFilters={setFilters} rover={rover as Rover} />

      {isLoading && <div>Loading...</div>}
      {noPhotosAvailable && <div>No photos found</div>}

      {photosAvailable && (
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
      )}

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        // breakClassName={'break-me'}
        // activeClassName={'active'}
        containerClassName="flex gap-2 mt-8"
        initialPage={filters.page}
        pageCount={30}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => {
          setFilters(filters => ({
            ...filters,
            page: selected,
          }));
        }}
      />
    </div>
  );
};

export default RoverPage;