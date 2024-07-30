"use client"
import CheckboxList from '@/components/Chackbox/Chackbox';
import Chacked from '@/components/Chackbox/Chacked';
import Modal from '@/components/Modal/Modal';
import React, { useState } from 'react';

const Services = () => {
    const [open,setOpen]=useState(false)
    const handelOpen=()=>{
        setOpen(true)
    }
    const hendleClose=()=>{
        setOpen(false)
    }
    return (
        <div>
            <CheckboxList size="lg" rounded="lg" />
            <Modal closeOnOutsideClick={false}  hendleClose={hendleClose} open={open} >
                <div className='p-4'>
                    <h1>Thank You</h1>
                    <div className='flex flex-row justify-around gap-5'>
                        <button onClick={hendleClose} className='px-2 py-1 rounded-md bg-green-500'>Submit</button>
                        <button onClick={hendleClose} className='px-2 py-1 rounded-md bg-red-500'> Cancle</button>
                    </div>
                    </div>
                
                </Modal>
             <button onClick={handelOpen}> Open</button>
        </div>
    );
};

export default Services;