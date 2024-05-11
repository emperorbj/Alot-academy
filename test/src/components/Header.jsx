import Menu from '../assets/vectors/menu.png';
import Dribble from '../assets/vectors/dribbble.png';
import Shirt from '../assets/vectors/circum_shirt.png';
import Cup from '../assets/vectors/cup.png';
import Cake from '../assets/vectors/cake.png';
import Brush from '../assets/vectors/brush.png';
import Kit from '../assets/vectors/ph_first-aid-kit-light.png';
import { Link }  from "react-router-dom"
const Header = () => {
    return (
        <div className='grid grid-cols-3 px-10 '>
            <div className="mt-[100px] flex flex-col gap-4 mr-3 w-[400px]">
                <div className=" flex  w-[300px] rounded-tr-2xl hover:bg-yellow-600 hover:scale-110 rounded-bl-2xl transition-[.5s] h-[50px] bg-slate-900 p-2">
                    <img className='ml-[10px]  text-slate-300 w-[35px] h-[35px]' src={Menu} alt="" />
                    <p className='ml-[10px]  text-slate-300 text-2xl transition-[.5s] font-normal'>Categories</p>
                </div>
                <Link to='/awards'>
                <div className="flex w-[300px] rounded-tr-2xl hover:bg-yellow-600 hover:scale-110 rounded-bl-2xl transition-[.5s] h-[50px] bg-slate-900 p-2">
                    <img className='ml-[10px]  text-slate-300 w-[35px] h-[35px]' src={Cup} alt="" />
                    <p className='ml-[10px]  text-slate-300 text-xl font-normal'>Awards</p>
                </div>
                </Link>
                <Link to='/decorations'>
                <div className="flex w-[300px] rounded-tr-2xl hover:bg-yellow-600 hover:scale-110 rounded-bl-2xl transition-[.5s] h-[50px] bg-slate-900 p-2">
                    <img className='ml-[10px] w-[35px] h-[35px]' src={Brush} alt="" />
                    <p className='ml-[10px]  text-slate-300 text-xl font-normal'>Decorations</p>
                </div>
                </Link>
                <div className="flex w-[300px] rounded-tr-2xl hover:bg-yellow-600 hover:scale-110 rounded-bl-2xl transition-[.5s] h-[50px] bg-slate-900 p-2">
                    <img className='ml-[10px] w-[35px] h-[35px]' src={Shirt} alt="" />
                    <p className='ml-[10px]  text-slate-300 text-xl font-normal'>Uniforms</p>
                </div>
                <div className="flex w-[300px] rounded-tr-2xl hover:bg-yellow-600 hover:scale-110 rounded-bl-2xl transition-[.5s] h-[50px] bg-slate-900 p-2">
                    <img className='ml-[10px] w-[35px] h-[35px]' src={Kit} alt="" />
                    <p className='ml-[10px]  text-slate-300 text-xl font-normal'>First Aid</p>
                </div>
                <div className="flex w-[300px] rounded-tr-2xl hover:bg-yellow-600 hover:scale-110 rounded-bl-2xl transition-[.5s] h-[50px] bg-slate-900 p-2">
                    <img className='ml-[10px] w-[35px] h-[35px]' src={Cake} alt="" />
                    <p className='ml-[10px] text-slate-300 text-xl font-normal'>Refreshments</p>
                </div>
                <div className="flex w-[300px] rounded-tr-2xl hover:bg-yellow-600 hover:scale-110 rounded-bl-2xl transition-[.5s] h-[50px] bg-slate-900 p-2">
                    <img className='ml-[10px] w-[35px] h-[35px]' src={Dribble} alt="" />
                    <p className='ml-[10px]  text-slate-300 text-xl font-normal'>Tools and Equipment</p>
                </div>
            </div>
            <div className="col-span-2 ">
                <div className="p-1 mt-2">
                    <div className='relative  h-[600px] bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/1.jpeg)' }}>
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
                                    <p className='text-gray-200'>[.5s] houses complete in Long Tennis, Footb[.5s], Basket b[.5s] and volley b[.5s]</p>
                                </div>
                                <div className='text-left py-5 px-4 border border-t-0 border-r-0 border-b-0 border-s-gray-200'>
                                    <h2 className='text-[#6B6E8D] text-2xl transition-[.5s] mb-2'>09 April 2023</h2>
                                    <p className='text-gray-200'>Hand b[.5s], Thug of war, Scrabble, chess, and Monopoly watch party</p>
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