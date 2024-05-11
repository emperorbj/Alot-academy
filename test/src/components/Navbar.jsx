import Logo from '../assets/vectors/Asset 3-8 1.png';
import Search from '../assets/vectors/Search.png';
import Sign from '../assets/vectors/user.png';
import { Link }  from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex justify-between bg-neutral-950 fixed z-30 h-[72px] w-full'>
            <div>
                <img className='ml-2 p-2' src={Logo} alt="" />
            </div>
            <div className='flex'>
                <input className='rounded-md mt-[15px] w-[630px] h-[40px]' type="text" />
                <img className='ml-[-10px] mt-[13px] h-[55px]' src={Search} alt="" />
            </div>
            <div className='flex gap-6 mt-[20px] mr-[60px]'>
                <Link to='/login'>
                <div className='bg-slate-700 rounded-full h-[40px] w-[40px] p-[10px]'>
                    <img className='w-full'  src={Sign} alt="" />
                </div>
                </Link>
                <button className='bg-blue-700 text-white rounded-md font-medium text-xl mb-[30px] px-10 text-center h-[45px]'>
                    Register here
                </button>
            </div>
        </div>
    )
}

export default Navbar
