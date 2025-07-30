import React from 'react';
import type { StylesConfig } from 'react-select';
import Select from 'react-select';
import chroma from 'chroma-js';

import type { ColourOption, TodoPriority } from '@/types';

interface SelectProps {
  defaultValue: ColourOption;
  options: ColourOption[];
  value: TodoPriority | null;
  onChange: (option: TodoPriority | null) => void;
}

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',
  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption, false> = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    border: '1px solid #A1A3AB',
    borderRadius: '8px',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    let backgroundColor;
    let textColor;

    if (isDisabled) {
      backgroundColor = undefined;
      textColor = '#ccc';
    } else if (isSelected) {
      backgroundColor = data.color;
      textColor = chroma.contrast(color, 'white') > 2 ? 'white' : 'black';
    } else if (isFocused) {
      backgroundColor = color.alpha(0.1).css();
      textColor = data.color;
    } else {
      backgroundColor = undefined;
      textColor = data.color;
    }

    return {
      ...styles,
      backgroundColor,
      color: textColor,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: styles => ({
    ...styles,
    ...dot(),
  }),
  placeholder: styles => ({
    ...styles,
    ...dot('#ccc'),
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
  }),
};

const getOptionFromPriority = (
  priority: TodoPriority | null,
  options: ColourOption[],
): ColourOption | null => options.find(opt => opt.value === priority) || null;

const ColourSelect: React.FC<SelectProps> = ({
  defaultValue,
  options,
  onChange,
  value,
}) => {
  const handleChange = (option: ColourOption | null) => {
    onChange((option?.value as TodoPriority) || null);
  };

  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      styles={colourStyles}
      value={getOptionFromPriority(value, options)}
      onChange={handleChange}
    />
  );
};

export default ColourSelect;
