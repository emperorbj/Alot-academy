import Logo from '../assets/vectors/Asset 3-8 1.png';
import Search from '../assets/vectors/Search.png';


const Navbar = () => {
    return (
        <div className='flex justify-between bg-neutral-950 fixed z-30 h-[72px] w-full'>
            <div className='w-[90px] h-[52] sm:w-[90px] sm:h-[52] md:w-[107px] md:h-[72] lg:w-[107px] lg:h-[72]'>
                <img style={{objectFit:'cover', width:'100%', paddingLeft:'5px', paddingTop:'5px'}} src={Logo} alt="" />
            </div>
            <div className='flex'>
                <input className='rounded-md md:mt-[23px] lg:mt-[15px] w-[0px] sm:w-[250px] md:w-[300px] lg:w-[630px] h-[40px]' type="text" />
                <img className='ml-[-10px] md:mt-[20px] lg:mt-[13px] h-[0px] sm:h-[0px] md:h-[55px] lg:h-[55px]' src={Search} alt="" />
            </div>
            <div className='flex md:gap-6 lg:gap-6 mt-[5px] sm:mt-[5px] md:mt-[20px] lg:mt-[20px] mr-[10px] sm:mr-[10px] md:mr-[60px] lg:mr-[60px]'>
                
                {/* <div className='bg-slate-700 rounded-full h-[40px] w-[40px] p-[10px]'>
                    <img className='w-full'  src={Sign} alt="" />
                </div> */}
                
                <button className='bg-blue-700 w-[150px] sm:w-[150px] md:w-[200px] 
                lg:w-[200px] text-white rounded-md font-medium sm:text-lg 
                md:text-xl lg:text-xl mb-[30px] px-5 sm:px-5 md:px-10 lg:px-10 text-center h-[45px]'>
                    Register here
                </button>
            </div>
        </div>
    )
}

export default Navbar
