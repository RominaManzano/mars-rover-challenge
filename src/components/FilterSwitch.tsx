import React from 'react';
import classnames from 'classnames';
import { useFormikContext } from 'formik';

type SetDateFilter = (value: React.SetStateAction<"earth" | "mars">) => void;

interface FilterSwitchProps {
  dateFilter: 'earth' | 'mars';
  setDateFilter: SetDateFilter;
}

const baseClasses = "w-16 px-2 flex justify-center items-center uppercase text-xs font-bold";

const FilterSwitch: React.FC<FilterSwitchProps> = ({
  dateFilter,
  setDateFilter,
}) => {
  const { setFieldValue } = useFormikContext();
  const isEarth = dateFilter === 'earth';
  const isMars = dateFilter === 'mars';

  return (
    <div className="flex text-white h-10 rounded-lg overflow-hidden">
      <div
        className={classnames(baseClasses, isEarth ? 'bg-cosmic-blue' : 'bg-slate-300 text-slate-400')}
        onClick={() => {
          setFieldValue('solDate', null).then(() => {
            setDateFilter('earth');
          });
        }}
      >
        Earth
      </div>
      <div
        className={classnames(baseClasses, isMars ? 'bg-martian-red' : 'bg-slate-300 text-slate-400')}
        onClick={() => {
          setFieldValue('earthDate', '').then(() => {
            setDateFilter('mars');
          });
        }}
      >
        Sol
      </div>
    </div>
  )
}

export default FilterSwitch