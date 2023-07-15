import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Filters } from '@/hooks/usePhotos';

import cameras from '@/constants/cameras';
import FilterSwitch from './FilterSwitch';
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
        <Form className="w-full flex flex-col lg:flex-row lg:justify-center lg:items-end items-center gap-4 my-8 text-black">
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

          <FilterSwitch dateFilter={dateFilter} setDateFilter={setDateFilter} />

          <button
            type="submit"
            className="h-10 text-white bg-yellow-800 hover:bg-yellow-700 w-20 rounded-lg font-bold uppercase text-sm"
          >
            Apply
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FiltersCard