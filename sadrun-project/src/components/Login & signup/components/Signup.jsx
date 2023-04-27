import React from 'react';
import lock from '../assets/SVGs/lock.svg'
import Signupform from '../components/Signupform.jsx'

const Signup = () => {
    return (
        <div className='w-screen h-screen relative bg-gradient-to-r from-[#9F0099] to-[#68008C] flex justify-center overflow-hidden isolate'>
            <img className=' relative inset-0 top-[-35px] scale-x-125 max-sm:hidden'  src={lock} alt="lock" />
            <div className='absolute z-1 top-[90px] right-56 w-[410px] max-sm:h-[500px] rounded-2xl
            max-sm:w-[370px] max-sm:relative max-sm:top-[60px] max-sm:right-0'>

                    <Signupform  />

            </div>
        </div>
    );
};

export default Signup;