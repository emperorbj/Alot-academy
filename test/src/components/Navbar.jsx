import Logo from '../assets/vectors/Asset 3-8 1.png';
import Search from '../assets/vectors/Search.png';
import Sign from '../assets/vectors/user.png';
import Cart from '../assets/vectors/Property 35.png';
import Help from '../assets/vectors/Property 34.png';
import { Link }  from "react-router-dom"

const Navbar = () => {
    return (
        <div className='flex justify-between bg-slate-900 fixed z-30 h-[72px] w-full'>
            <div>
                <img className='ml-2 p-2' src={Logo} alt="" />
            </div>
            <div className='flex'>
                <input className='rounded-md mt-[15px] w-[630px] h-[40px]' type="text" />
                <img className='ml-[-10px] mt-[13px] h-[55px]' src={Search} alt="" />
            </div>
            <div className='flex gap-6 mt-[20px] mr-[60px]'>
                <Link to='/login'>
                <div className='bg-slate-700 rounded-md h-[30px] w-[30px]'>
                    <img className='w-full'  src={Sign} alt="" />
                </div>
                </Link>
                <div className='bg-slate-700 rounded-md h-[30px] w-[30px]'>
                    <img className='w-full'  src={Cart} alt="" />
                </div>
                <div className='bg-slate-700 rounded-md h-[30px] w-[30px]'>
                    <img className='w-full'  src={Help} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
