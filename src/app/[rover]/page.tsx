"use client";

import React from 'react';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import usePhotos, { Filters } from '@/hooks/usePhotos';
import { Field, Form, Formik } from 'formik';

import cameras from '@/constants/cameras';

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

  const handleSubmit = (values: Filters) => {
    setFilters(filters => ({
      ...filters, ...values,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase">
        {rover}
      </h1>
      
      <div className="w-full">
        <Formik initialValues={filters} onSubmit={handleSubmit}>
          <Form className="w-full flex flex-col md:flex-row justify-center gap-4 my-8 text-black">
            <Field
              as="select"
              name="camera"
            >
              <option value="">All Cameras</option>
              {cameras[rover].map((camera) => (
                <option key={camera.id} value={camera.id}>
                  {camera.name}
                </option>
              ))}
            </Field>
            <Field name="earthDate" as="input" type="date" />
            <Field name="solDate" />

            <button type="submit" className="text-white">
              Apply
            </button>
          </Form>
        </Formik>
      </div>

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