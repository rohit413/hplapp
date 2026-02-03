"use client";

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';
import Image from 'next/image';

const HomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Open modal on mount
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            cancelHandler={handleClose}
            backdropClick={true}
            size="lg" // Increased size
            showHeader={false}
            showCancelButton={false}
            requiredPadding={true} // Removes default padding
            containerClassName="!items-start !pt-[140px]" // Position below header (approx 100-140px)
            className='!p-0 overflow-hidden' // Removed border
        >
            <div className="relative w-full h-full">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 z-[9999] p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors cursor-pointer group"
                    aria-label="Close popup"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-800 group-hover:text-black"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div className="w-full">
                    <Image
                        src="/assets/images/homePage/homePageModalPopup.png"
                        alt="Welcome to HPL Additives"
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </Modal>
    );
};

export default HomePopup;
