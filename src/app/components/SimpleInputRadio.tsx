import React from 'react';

interface SimpleInputRadioProps {
  title: string;
  name: string;
  value: string;
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleInputRadio: React.FC<SimpleInputRadioProps> = (props) => {
  return (
    <div className="flex gap-1">
      <input
        type="radio"
        name={props.name}
        id={props.value}
        value={props.value}
        checked={props.selectedValue === props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.value} className="flex items-center gap-1">
        {props.title}
      </label>
    </div>
  );
};

export default SimpleInputRadio;
