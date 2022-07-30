import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <ThreeDots
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            ></ThreeDots>
        </div>
    );
};

export default Spinner;