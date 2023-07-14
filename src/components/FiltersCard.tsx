import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Filters } from '@/hooks/usePhotos';

import cameras from '@/constants/cameras';
import FieldContainer, { fieldClassName } from './FieldContainer';
import { Rover } from '@/types/Rover.type';

export interface FiltersCardProps {
  filters: Filters;
  setFilters: (value: React.SetStateAction<Filters>) => void,
  rover: Rover;
}

const FiltersCard: React.FC<FiltersCardProps> = ({
  filters,
  setFilters,
  rover,
}) => {
  const [dateFilter, setDateFilter] = useState<'earth' | 'mars'>('earth');

  const handleSubmit = (values: Filters) => {
    setFilters(filters => ({
      ...filters,
      ...values,
      solDate: values?.solDate?.toString() || '',
    }));
  };

  return (
    <div className="w-full">
      <Formik initialValues={filters} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form className="w-full flex flex-col md:flex-row justify-center gap-4 my-8 text-black">
            <FieldContainer label="Camera">
              <Field className={fieldClassName} as="select" name="camera">
                <option value="">All Cameras</option>
                {cameras[rover].map((camera) => (
                  <option key={camera.id} value={camera.id}>
                    {camera.name}
                  </option>
                ))}
              </Field>
            </FieldContainer>

            <FieldContainer label={dateFilter === 'earth' ? 'Earth Date' : 'Sol Date'}>
              {dateFilter === 'earth' ? (
                <Field className={fieldClassName} name="earthDate" type="date" />
              ) : (
                <Field className={fieldClassName} name="solDate" type="number" min={0} max={9999} />
              )}
            </FieldContainer>

            <div className="text-white">
              <div onClick={() => {
                setFieldValue('solDate', null).then(() => {
                  setDateFilter('earth');
                });
              }}>
                Earth
              </div>
              <div onClick={() => {
                setFieldValue('earthDate', '').then(() => {
                  setDateFilter('mars');
                });
              }}>Sol</div>
            </div>

            <button type="submit" className="text-white">
              Apply
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FiltersCard