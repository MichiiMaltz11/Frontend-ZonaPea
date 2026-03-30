// src/components/FilterSection.tsx
import React from 'react';
import Dropdown from './Dropdown'; 
import type { FilterSectionProps } from './../interface/FilterSection';

const FilterSection: React.FC<FilterSectionProps> = ({
  label = 'Filtrar por:',
  options = [],
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`bg-white p-4 rounded-xl shadow-md ${className}`}>
      <h3 className="text-gray-300 text-base font-medium mb-2">
        {label}
      </h3>
      <Dropdown
        options={options}
        value={value}
        onChange={onChange}
        className="w-full"
        containerClassName="mb-4"
      />
    </div>
  );
};

export default FilterSection;