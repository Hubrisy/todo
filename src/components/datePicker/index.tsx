import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface DatePickerProps {
  className: string;
  onChange: (option: Date | null) => void;
  value: Date | null;
}

export const DatePickerComponent: React.FC<DatePickerProps> = ({
  className,
  onChange,
  value,
}) => (
  <DatePicker
    selected={value}
    onChange={onChange}
    className={className}
    wrapperClassName="w-full"
  />
);
