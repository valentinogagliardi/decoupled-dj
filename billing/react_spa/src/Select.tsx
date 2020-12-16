import React from "react";

type Props = {
  id: string;
  name: string;
  options: Array<{
    id: string;
    email: string;
  }>;
};

const Select = ({ id, name, options }: Props) => {
  return (
    <select id={id} name={name} required={true}>
      <option value="">---</option>
      {options.map((option) => {
        return (
          <option value={option.id}>{option.email}</option>
        );
      })}
    </select>
  );
};

export default Select;
