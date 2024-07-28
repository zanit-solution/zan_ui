"use client"
import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
interface checkBoxProps {
  sz?: "xs" | "sm" | "lg" | "xl" | "xxl";
  rounded?: boolean;
}

 
const Chackbox = ({checked,sz = "lg", ...test }: checkBoxProps ) => {
  const checkBoxSize = {
    xs: "w-2 h-2",
    sm: "w-4 h-4",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    xxl: "w-16 h-16",
  };
  return (
    <div className='m-10'>
      <h1>Chackbox </h1>
      <label>
        <input type="checkbox" name="" id="" hidden  {...test} />
        <span className={` p-1   inline-block `}> {checked ? <TiTick className={`text-white  bg-blue-600 rounded ${checkBoxSize[sz]}`} /> : <span className={`border rounded ${checkBoxSize[sz]}  z block`}> </span>}  </span>
      </label>

    </div>
  );
};

export default Chackbox;