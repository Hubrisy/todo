import type { PropsWithChildren } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<PropsWithChildren<SelectProps>> = ({
  onChange,
  value,
  children,
  name,
  ...rest
}) => (
  <div>
    <select
      className="border-1 border-solid m-2 rounded-lg p-2"
      name={name}
      onChange={onChange}
      value={value}
      {...rest}
    >
      {children}
    </select>
  </div>
);

export default Select;
