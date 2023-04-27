import React from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/SVGs/login.svg'
import loginS from '../assets/SVGs/loginS.svg'
import Button from "../components/button/Button";

const Login = () => {
    return (
        <div className=' overflow-hidden max-sm:flex max-sm:justify-center h-screen w-[100%]'>

            <div className='bg-gradient-to-r from-[#9F0099] to-[#68008C]  flex justify-center items-center'>
                <img className='relative inset-0 scale-x-125 top-[-50px] max-sm:hidden'  src={login} alt="login" />

            <div className='max-sm:flex max-sm:justify-center w-[620px] h-[650px]  bg-white'>

                    <div className='w-[420px] h-[460px] bg-white max-sm:w-[370px] max-sm:m-4 max-sm:shadow-2xl shadow-xl
                    rounded-lg absolute top-[140px] right-[220px] flex flex-col justify-around
                    max-sm:relative max-sm:top-[60px] max-sm:right-0 max-sm:border' data-aos='flip-left' data-aos-offset='100' data-aos-delay='300'>

                        <div className='flex justify-center flex-col items-center'>
                            <img className='w-[50px] h-[50px]' src={loginS} alt="login" />
                            <sapn className='font-vazirmatn' > ورود</sapn>
                        </div>

                        <div className='flex flex-col px-8'>
                            <input className='focus:outline-none w-full h-[50px] bg-transparent border-2 border-[#C200BC] rounded-2xl pr-3 text-purple' placeholder='نام کاربری' type="text" />
                            <input className='focus:outline-none w-full h-[50px] bg-transparent border-2 border-[#C200BC] rounded-2xl my-5 pr-3 text-purple' placeholder='رمز ورود' type="password" />
                            <div className='flex items-center justify-start'>
                                <input className='w-[20px] h-[20px] border-purple ml-2' type="checkbox" />
                                <label className='font-vazirmatn text-[#C200BC]'>مرا به خاطر بسپار</label>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <Button className='w-[355px] h-12 rounded-lg bg-[#36c54e] text-white max-sm:w-[300px]' buttonType={"form-sign-up-button"}> ورود</Button>
                            <Link className='font-vazirmatn text-[#C200BC] my-2' to='/Forget'>فراموشی رمز عبور</Link>
                            <span>برای ثبت نام <Link className='text-[#C200BC] font-vazirmatn' to='/signup'> اینجا</Link>  کلیک کنید</span>
                        </div>

                    </div>

            </div>
            
            </div>
        </div>
    );
};

export default Login;

