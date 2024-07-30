"use client"
import Avatar from '@/components/Avatar/Avater';
import CheckboxList from '@/components/Chackbox/Chackbox';
import Modal from '@/components/Modal/Modal';
import React, { useState } from 'react';

const Services = () => {
    const [open, setOpen] = useState(false)
    const handelOpen = () => {
        setOpen(true)
    }
    const hendleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <CheckboxList size="lg" rounded="lg" />
            <Modal closeOnOutsideClick={false} hendleClose={hendleClose} open={open} >
                <div className='p-4'>
                    <h1>Thank You</h1>
                    <div className='flex flex-row justify-around gap-5'>
                        <button onClick={hendleClose} className='px-2 py-1 rounded-md bg-green-500'>Submit</button>
                        <button onClick={hendleClose} className='px-2 py-1 rounded-md bg-red-500'> Cancle</button>
                    </div>
                </div>

            </Modal>
            <button onClick={handelOpen}> Open</button>
            <div className='flex flex-row gap-5'>
                <Avatar isActive src="https://via.placeholder.com/150" alt="Avatar XS" size="xs" rounded="none" />
                <Avatar src="https://via.placeholder.com/150" alt="Avatar SM" size="sm" rounded="sm" />
                <Avatar src="https://via.placeholder.com/150" alt="Avatar MD" size="md" rounded="md" />
                <Avatar src="https://via.placeholder.com/150" alt="Avatar LG" size="lg" rounded="lg" />
                <Avatar isActive src="https://via.placeholder.com/150" alt="Avatar XL" size="xl" rounded="full" />
            </div>
        </div>
    );
};

export default Services;