import React from 'react';
import Select from 'react-select';

import { colourStyles } from './selectStyles';

export type SelectOption = {
  value: string;
  label: string;
  color: string;
};

interface SelectProps {
  defaultValue: SelectOption;
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (option: SelectOption | null) => void;
}

const ColourSelect: React.FC<SelectProps> = ({
  defaultValue,
  options,
  onChange,
  value,
}) => {
  const handleChange = (option: SelectOption | null) => {
    onChange(option);
  };

  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      styles={colourStyles}
      value={value}
      onChange={handleChange}
    />
  );
};

export default ColourSelect;
