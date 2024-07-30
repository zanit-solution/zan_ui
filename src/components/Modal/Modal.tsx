"use client"
import React, { Children, useState } from 'react';
import ModalContent from './ModalContent';

const Modal = ({ closeOnOutsideClick, hendleClose, open, children }) => {
    const took = () => {
        closeOnOutsideClick && hendleClose()
    }
    return (
        <div>
            {
                open && <>
                    <div onClick={took} className='absolute w-full h-full bg-black top-0 left-0' style={{
                        opacity: 0.4
                    }}>

                    </div>
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="bg-white shadow-lg rounded-lg border p-4 w-11/12 max-w-lg  md:w-1/2 max-h-72 lg:w-1/3 relative">
                            <button
                                onClick={hendleClose}
                                className="absolute top-2 right-2 text-gray-600 border rounded-full  h-5 w-5 hover:text-red-800"
                            >
                                X
                            </button>
                            <div className="mt-4">
                                {children}
                            </div>
                        </div>
                        </div>
                    </>
            }
                </div>
            )


};

            export default Modal;