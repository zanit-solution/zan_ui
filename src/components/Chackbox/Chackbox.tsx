"use client"
import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';

interface CheckBoxProps {
  checked: boolean;
  size?: "xs" | "sm" | "lg" | "xl" | "xxl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  onChange?: () => void;
}

const Checkbox = ({ checked, size = "md", rounded = "md", ...rest }: CheckBoxProps) => {
  const checkBoxSize = {
    xs: "w-2 h-2",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    xxl: "w-16 h-16",
  };

  const borderRadius = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <label>
      <input type="checkbox" checked={checked} hidden {...rest} />
      <span className={`p-1 inline-block`}>
        {checked ? (
          <TiTick className={`text-white bg-blue-600 ${checkBoxSize[size]} ${borderRadius[rounded]}`} />
        ) : (
          <span className={`border ${checkBoxSize[size]} ${borderRadius[rounded]} block`}></span>
        )}
      </span>
    </label>
  );
};

interface CheckboxListProps {
  size?: "xs" | "sm" | "lg" | "xl" | "xxl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

const CheckboxList = ({ size = "md", rounded = "md" }: CheckboxListProps) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.some(i => i.id === item.id)) {
        return prevSelectedItems.filter(i => i.id !== item.id);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  return (
    <div className='m-10'>
      <h1>Checkbox List</h1>
      {data.map((item) => (
        <div key={item.id}>
          <Checkbox
            checked={selectedItems.some(i => i.id === item.id)}
            size={size}
            rounded={rounded}
            onChange={() => handleCheckboxChange(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
