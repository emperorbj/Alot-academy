import React from "react";
import Navbar from "./Navbar";


const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center h-screen">
                <form className="bg-slate-900 w-[531px] flex flex-col items-center h-[520px] my-4" action="">
                    <h1 className="text-white text-5xl font-light pt-8">Welcome Back</h1>
                    <p className="text-slate-300 mt-4">Please sign into your account</p>
                    {/* email */}
                    <div className="flex flex-col mt-4">
                        <label className="text-slate-300" htmlFor="email">Email address</label>
                        <input className="text-slate-300 mt-2 bg-slate-800 w-[421px] h-[40px] pl-1 border-slate-500 border-2 outline-none rounded-lg" type="text" placeholder='example@gmail.com'/>
                    </div>
                    {/* password */}
                    <div className="flex flex-col mt-4">
                        <label className="text-slate-300" htmlFor="password">password</label>
                        <input className="text-slate-300 mt-2 bg-slate-800 w-[421px] h-[40px] pl-1 border-slate-500 border-2 outline-none rounded-lg" type="password" required placeholder='password here' />
                    </div>
                    <div className="flex justify-between w-[100%] mt-4">
                        {/* check box remember me password */}
                        <div className="flex ml-16">
                            <input className="w-4 h-4 mt-1" type="checkbox" name="remember"/>
                            <p className="text-slate-300 ml-2">Remember me</p>
                        </div>
                        {/* forgot password */}
                        <div className="mr-16">
                            <p className="text-slate-300">Forgot password?</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-[#FBE25C] mt-4 w-[421px] h-[40px] text-2xl font-semibold rounded-lg" type="submit">SIGN IN</button>
                        <button className="w-[421px] mt-1 h-[30px] text-xl font-normal text-slate-200">Or continue with</button>
                        <button className="w-[421px] bg-slate-800 mt-1 h-[30px] text-lg text-slate-200 rounded-lg shadow-lg"><span>icon</span>Google</button>
                        <button className="w-[421px] bg-slate-800 mt-2 mb-4 h-[30px] text-lg text-slate-200 rounded-lg shadow-lg"><span>icon</span>Facebook</button>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Login
