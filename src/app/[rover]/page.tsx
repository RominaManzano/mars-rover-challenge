"use client";

import React from 'react';
import ReactPaginate from 'react-paginate';
import usePhotos from '@/hooks/usePhotos';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import BackHomeButton from '@/components/buttons/BackHomeButton';
import BackTopButton from '@/components/buttons/BackTopButton';
import FiltersCard from '@/components/cards/FiltersCard';
import PageTitle from '@/components/common/PageTitle';
import PhotoCard from '@/components/cards/PhotoCard';
import Spinner from '@/components/common/Spinner';
import { getPageCount } from '@/helpers/photos.helper';
import { Photo } from '@/types/Photo.type';
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
  const pageCount = getPageCount(photos.length, filters.page);

  return (
    <div className="min-h-screen">
      <BackHomeButton />
  
      <div className="flex flex-col items-center p-16">
        <PageTitle title={rover} />
        
        <FiltersCard filters={filters} setFilters={setFilters} rover={rover as Rover} />

        {isLoading && <Spinner />}
        {noPhotosAvailable && (
          <div className="italic opacity-80">No photos found</div>
        )}

        {photosAvailable && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {photos.map((photo: Photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        )}

        {pageCount > 0 && (
          <div className="w-full flex justify-center my-10 max-w-screen-sm font-sm border-t border-white">
            <ReactPaginate
              previousLabel={<ChevronLeftIcon className="h-6 w-6 text-white" />}
              nextLabel={<ChevronRightIcon className="h-6 w-6 text-white" />}
              breakLabel={'...'}
              activeClassName="border border-white rounded-full py-2 px-4 text-white"
              containerClassName="flex items-center gap-4 mt-8 text-slate-300 font-bold"
              initialPage={filters.page}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={({ selected }) => {
                setFilters(filters => ({
                  ...filters,
                  page: selected,
                }));
              }}
            />
          </div>
        )}

        <BackTopButton />
      </div>
    </div>
  );
};

export default RoverPage;
