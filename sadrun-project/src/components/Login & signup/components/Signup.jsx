import React from 'react';
import signup from '../assets/SVGs/signup.svg'
import Signupform from '../components/Signupform.jsx'

const Signup = () => {
    return (
        <div className='w-screen h-screen relative  bg-white flex justify-center overflow-hidden isolate'>
            <img className='absolute scale-x-120 inset-0  w-full max-sm:hidden -z-1' src={signup} alt="signup" />
            <div className='absolute z-1 top-[90px] right-56 w-[410px] max-sm:h-[500px] rounded-2xl
            max-sm:w-[370px] max-sm:relative max-sm:top-[60px] max-sm:right-0'>

                    <Signupform  />

            </div>
        </div>
    );
};

export default Signup;