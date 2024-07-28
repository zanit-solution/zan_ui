"use client"
import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';

const Chackbox = () => {
  const [chacked,setChacked]=useState(false)
  const handelbox=()=>{
  setChacked(!chacked)
  }
  return (
    <div className='m-10'>
      <h1>Chackbox </h1>
      <label>
        <input type="checkbox" name="" id="" hidden />
        <span  onClick={handelbox} className=' p-1  inline-block'> <TiTick  className='text-white bg-blue-600 rounded'  /> </span>
      </label>

    </div>
  );
};

export default Chackbox;