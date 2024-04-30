import React from "react";
import Navbar from "./Navbar";
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import Help from '../assets/Property 34.png';
import Vector1 from '../assets/vectors/Vector (1).png';
import Vector2 from '../assets/vectors/Vector (2).png';
import Vector3 from '../assets/vectors/Vector (3).png';
import Vector4 from '../assets/vectors/Vector (4).png';
import Vector5 from '../assets/vectors/Vector (5).png';
import Vector6 from '../assets/vectors/Vector (6).png'
import Vector7 from '../assets/vectors/Vector (7).png';




const Login = () => {
    return (
        <div>
            <Navbar/>
            <div className="relative z-0 flex justify-center items-center bg-slate-900 h-screen">
                <img className="absolute z-10 top-[5px] left-[-30px]" src={Vector1} alt="" width={252} height={247} />
                <img className="absolute z-30 rotate-[270deg] top-[-30px] left-[350px]" src={Vector2} alt="" width={131} height={203}/>
                <img className="absolute z-10 right-[0px] top-[-60px]" src={Vector3} alt="" width={100} height={30} />
                <img className="absolute z-10 top-[70px] right-[200px]" src={Vector4} alt="" width={529} height={538} />
                <img className="absolute z-10 left-[0px] bottom-[0px]" src={Vector5} alt="" width={535} height={510} />
                <img className="absolute z-10 bottom-[0px] right-[0px]" src={Vector6} alt="" width={455} height={110} />
                <img className="absolute z-10 top-[330px] right-[0px]" src={Vector7} alt="" width={131} height={203}/>
                <div className="absolute top-[100px] right-[150px] flex items-center rounded-full justify-center z-10 border-2 border-slate-400 w-[70px] h-[70px]">
                        <img className="bg-slate-400 rounded-full w-[50px] h-[50px]" src={Help} alt=""/>
                </div>
                <form className="bg-slate-900 z-20 w-[471px] flex flex-col items-center h-[550px] mt-[80px]" action="">
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
                            <input className="w-4 h-4 mt-1 border-2 outline-none" type="checkbox" name="remember"/>
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
                        <div id="google" className=" flex justify-center w-[421px] py-2  bg-slate-800 mt-1 h-[35px] text-lg text-slate-200 rounded-lg shadow-lg">
                            <img src={Google} alt="" height={10} width={15}/>
                            <p className="ml-[10px] mt-[-4px]">Google</p>
                        </div>
                        <div id="facebook" className="flex justify-center py-2 w-[421px] bg-slate-800 mt-2 mb-6 h-[35px] text-lg text-slate-200 rounded-lg shadow-lg">
                            <img src={Facebook} alt="" height={10} width={15}/>
                            <p className="ml-[10px] mt-[-4px]">Facebook</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Login
