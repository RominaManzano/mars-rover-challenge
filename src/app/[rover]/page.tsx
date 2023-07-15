"use client";

import React from 'react';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import usePhotos from '@/hooks/usePhotos';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import FiltersCard from '@/components/FiltersCard';
import PageTitle from '@/components/PageTitle';
import { Rover } from '@/types/Rover.type';
import BackHomeButton from '@/components/BackHomeButton';
import Spinner from '@/components/Spinner';

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

const getPageCount = (currentPageTotal: number, page: number) => {
  if ((page === 0) && (currentPageTotal === 0)) {
    return 0;
  }
  
  if ((page === 0) && (currentPageTotal < 25)) {
    return 1;
  }

  return 8;
};

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
        {noPhotosAvailable && <div className="italic opacity-80">No photos found</div>}

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

        {pageCount > 0 && (
          <div className="my-8 max-w-screen-sm font-sm">
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
      </div>
    </div>
  );
};

export default RoverPage;