
import Shirt from '../assets/vectors/circum_shirt.png';
import Cup from '../assets/vectors/cup.png';
import Cake from '../assets/vectors/cake.png';
import Brush from '../assets/vectors/brush.png';
import Kit from '../assets/vectors/ph_first-aid-kit-light.png';
import { Link }  from "react-router-dom"
const Header = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:px-10 md:px-10 sm:px-[5px] px-[5px]'>
            <div className="mt-[100px] mb-3 sm:mb-3 sm:gap-2 flex sm:flex lg:flex-col md:flex-row lg:gap-4 sm:flex-wrap flex-wrap  md:flex-wrap gap-2 md:gap-5 lg:w-[400px]">
                {/* <div className="flex md:w-[140px] md:items-center  lg:w-[300px] rounded-xl hover:bg-yellow-600 hover:scale-110 transition-[.5s] h-[50px] bg-slate-900 lg:p-2 md:p-1">
                    <img className='md:ml-[5px] ml-[10px] text-slate-300 lg:w-[35px] lg:h-[35px] md:w-[24px] md:h-[24px] ' src={Menu} alt="" />
                    <p className='sm: hidden md:ml-[5px] ml-[10px]  text-slate-300 md:text-lg lg:text-2xl transition-[.5s] font-normal'>Categories</p>
                </div> */}
                <Link to='/awards'>
                <div className="w-[120px] sm:w-[110px] flex md:w-[140px] lg:items-center sm:items-center items-center md:items-center lg:w-[300px] rounded-xl hover:bg-yellow-600 hover:scale-110 transition-[.5s] h-[50px] bg-slate-900 p-2 md:p-1">
                    <img className='md:ml-[5px] ml-[10px] w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]  text-slate-300 lg:w-[35px] lg:h-[35px]' src={Cup} alt="" />
                    <p className='md:ml-[5px] ml-[10px] md:text-lg  text-slate-300 lg:text-2xl lg:font-normal'>Awards</p>
                </div>
                </Link>
                <Link to='/decorations'>
                <div className="w-[130px] sm:w-[110px] flex md:w-[140px] lg:items-center sm:items-center items-center md:items-center lg:w-[300px] rounded-xl hover:bg-yellow-600 hover:scale-110 transition-[.5s] h-[50px] bg-slate-900 p-2 md:p-1">
                    <img className='md:ml-[5px] lg:ml-[10px] w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]  lg:w-[35px] lg:h-[35px]' src={Brush} alt="" />
                    <p className='md:ml-[5px] ml-[10px] md:text-lg  text-slate-300 lg:text-2xl font-normal'>Decorations</p>
                </div>
                </Link>
                <Link to='/uniforms'>
                <div className="w-[120px] sm:w-[110px] flex md:w-[140px] lg:items-center sm:items-center items-center md:items-center lg:w-[300px] rounded-xl hover:bg-yellow-600 hover:scale-110 transition-[.5s] h-[50px] bg-slate-900 p-2 md:p-1">
                    <img className='md:ml-[5px] lg:ml-[10px] md:w-[24px] md:h-[24px] w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[35px] lg:h-[35px]' src={Shirt} alt="" />
                    <p className='md:ml-[5px] ml-[10px] md:text-lg  text-slate-300 lg:text-2xl font-normal'>Uniforms</p>
                </div>
                </Link>
                <div className="w-[160px] sm:w-[160px] flex md:w-[140px] lg:items-center sm:items-center items-center md:items-center lg:w-[300px] rounded-xl hover:bg-yellow-600 hover:scale-110 transition-[.5s] h-[50px] bg-slate-900 p-2 md:p-1">
                    <img className='md:ml-[5px] ml-[10px] md:w-[24px] md:h-[24px] w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[35px] lg:h-[35px]' src={Kit} alt="" />
                    <p className='md:ml-[5px] ml-[10px] md:text-lg  text-slate-300 lg:text-2xl font-normal'>First Aid</p>
                </div>
                <Link to='/refreshment'>
                <div className="w-[180px] sm:w-[180px] flex md:w-[145px] lg:items-center sm:items-center items-center md:items-center lg:w-[300px] rounded-xl hover:bg-yellow-600 hover:scale-110 transition-[.5s] h-[50px] bg-slate-900 p-2 md:p-1">
                    <img className='md:ml-[5px] lg:ml-[10px] md:w-[24px] md:h-[24px] w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[35px] lg:h-[35px]' src={Cake} alt="" />
                    <p className='md:ml-[5px] ml-[5px] lg:ml-[10px] md:text-[18px]  text-slate-300 lg:text-2xl font-normal'>Refreshments</p>
                </div>
                </Link>
            </div>
            <div className="lg:col-span-2 md:col-span-2">
                <div className="lg:p-1 lg:mt-2 md:p-1 md:mt-2 w-[400px] sm:ml-[-20px] sm:w-[500px] md:w-[700px]  lg:w-[900px]">
                    <div className='relative w-full sm:w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[600px] bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/1.jpeg)' }}>
                        <div className='absolute left-0 bottom-0'>
                            <h1 className='text-6xl text-[#CED0E4] text-right mr-10 font-extrabold relative -bottom-8'>
                                <span className='flex justify-end items-end'>
                                    <span className='font-normal text-3xl text-right bg-[#EEA620] text-black flex items-right flex-col p-2 rounded-lg'>
                                        <span>Asher</span>
                                        <span className='inline-block'>Academy</span>
                                    </span>
                                    2<img src="/2.png" />23<br />
                                </span>
                                <span>Inter-House <br /></span>
                                <span>Sports</span>
                            </h1>
                            <div className='grid grid-cols-3 p-5' style={{ backgroundColor: 'rgba(21, 21, 21, 0.6)' }}>
                                <div className='relative'>
                                    <div className="bg-[#DDDFF1] text-uppercase absolute right-0 -top-8 -bottom-8 p-5 rounded-lg w-[180px]">
                                        <div className='flex items-center justify-center h-full'>
                                            <h1 className='text-2xl transition-[.5s] uppercase text-center'>donate now</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-left py-5 px-4'>
                                    <h2 className='text-[#6B6E8D] text-2xl transition-[.5s] mb-2'>08 April 2023</h2>
                                    <p className='text-gray-200'> houses compete in Long Tennis, Football, Basket and volley ball</p>
                                </div>
                                <div className='text-left py-5 px-4 border border-t-0 border-r-0 border-b-0 border-s-gray-200'>
                                    <h2 className='text-[#6B6E8D] text-2xl transition-[.5s] mb-2'>09 April 2023</h2>
                                    <p className='text-gray-200'>Hand ball, Thug of war, Scrabble, chess, and Monopoly watch party</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;