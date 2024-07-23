import toast from 'react-hot-toast';
import React,{ useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    // console.log("printing pass words");
    const naviagte = useNavigate();
    

    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

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
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }
        console.log("printing final data")
        console.log(finalData)
        naviagte("/dashboard");
    }

  return (
    <div>
        <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max my-2">
            <button
            onClick={() => setAccountType("student")}
            className={`${
                accountType === "student"
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200 "
            } py-2 px-5 rounded-full transition-all`}
            >
            Student
            </button>
            <button
            onClick={() => setAccountType("instructor")}
            className={`${
                accountType === "instructor"
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200 "
            } py-2 px-5 rounded-full transition-all`}
            >
            Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} className=' px-1'>
            {/* firstname and lastname */}
            <div className="flex gap-x-4">
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        FirstName <sup className="text-pink-200">*</sup>
                    </p>

                    <input
                    required
                    type="text"
                    placeholder="Enter fisrtname"
                    onChange={changeHandler}
                    value={formData.firstName}
                    name="firstName"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />
                </label>
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        LastName <sup className="text-pink-200">*</sup>
                    </p>

                    <input
                    required
                    type="text"
                    placeholder="Enter lastname"
                    onChange={changeHandler}
                    value={formData.lastName}
                    name="lastName"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />
                </label>
            </div>
            {/* email address */}
            <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Email <sup className="text-pink-200">*</sup>
                    </p>

                    <input
                    required
                    type="email"
                    placeholder="Enter email"
                    onChange={changeHandler}
                    value={formData.email}
                    name="email"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />
            </label>
            {/* create password and confirm password */}
            <div className="flex gap-x-4 mt-1">
                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Create password<sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type={showPassword?("text"):("password")}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter password"
                        name="password"
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />

                    <span onClick={()=>setShowPassword(prev => !prev)}
                        className="absolute right-3 top-[38px] cursor-pointer z-10">
                        {!showPassword?(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                        
                </label>
                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.175rem]">
                        Confirm password<sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type={showConfirmPassword?("text"):("password")}
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder="Confirm password"
                        name="confirmPassword"
                        className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                    />

                    <span onClick={()=>setShowConfirmPassword(prev => !prev)}
                        className="absolute right-3 top-[38px] cursor-pointer z-10">
                        {!showConfirmPassword?(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                </label>
            </div>

            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm