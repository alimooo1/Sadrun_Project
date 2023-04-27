import React from 'react';
import lock from '../assets/SVGs/lock.svg'
import lock1 from '../assets/SVGs/lock1.svg'
import { Link } from 'react-router-dom';
import Button from "../components/button/Button";

const Forgetfulnes = () => {
    return (
        <div className='w-full h-screen overflow-hidden'>

            <div className='bg-gradient-to-r from-[#9F0099] to-[#68008C] flex justify-center items-center'>
                <img className=' relative inset-0 top-[-35px] scale-x-125 max-sm:hidden'  src={lock} alt="lock" />

            <div className='max-sm:flex max-sm:justify-center w-[620px] h-[650px] bg-white'>

                <div className='w-[420px] h-[460px] bg-white shadow-md
                rounded-lg absolute top-[140px] right-[220px] flex flex-col justify-around
                max-sm:relative max-sm:top-[60px] max-sm:right-0 max-sm:w-[370px] max-sm:border'
                data-aos='flip-left' data-aos-offset='100' data-aos-delay='300'>

                    <div className='flex justify-center flex-col items-center'>
                        <img className='w-[60px] h-[60px]' src={lock1} alt="login" />
                        <sapn className='font-vazirmatnSemiB text-lg mt-4' > فراموشی رمز عبور</sapn>
                    </div>


                    <div className='flex flex-col px-8 mt-8'>
                        <input className='focus:outline-none w-full h-[50px] bg-transparent border-2 border-[#C200BC] rounded-2xl pr-3 text-purple' placeholder=' ایمیل' type="email" />
                        <Button className='w-[355px] max-sm:w-[300px] h-12 rounded-2xl bg-[#36c54e] text-white mt-4' buttonType={"form-sign-up-button"}> ادامه</Button>
                    </div>


                    <div className='flex flex-row justify-center items-center'>

                        <Link className='font-vazirmatnLight text-[#C200BC] border-l-2 border-[#C200BC] ml-4 pl-4' to='/Login'> ورود</Link>
                        <Link className='text-[#C200BC] font-vazirmatnLight' to='/signup'> ثبت نام</Link>
                    </div>
                </div>
                
            </div>
                
            </div>

        </div>
    );
};

export default Forgetfulnes;