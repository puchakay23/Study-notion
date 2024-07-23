import toast from 'react-hot-toast';
import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const naviagte = useNavigate();

    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(event) {
        const {name,value} = event.target;
        setFormData(formData=>{
            return {
              ...formData,
              [name]: value
            }
          }) 
        
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        console.log("printing login data");
        console.log(formData);
        naviagte("/dashboard");
    }

    return (
        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className=' text-[0.8rem] text-richblack-5 mb-1 leading-[1.3rem]'>
                    Email<sup className=' text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                    name="email"
                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label className='w-full relative'>
                <p className=' text-[0.8rem] text-richblack-5 mb-1 leading-[1.3rem]'>
                    password<sup className=' text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    name="password"
                    className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span onClick={()=>setShowPassword(prev => !prev)}
                    className=' absolute right-3 top-[38px] cursor-pointer'
                >
                    {!showPassword?
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className=' text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot password?
                    </p>
                </Link>
                    
            </label>

            <button
            className=' bg-yellow-50 rounded-[8px] text-richblack-900 font-medium py-[8px] px-[12px]'>
                Sign In
            </button>
            

        </form>
    );
}

export default LoginForm