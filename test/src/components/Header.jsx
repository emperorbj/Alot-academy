const Header = () => {
    return (
        <div className='grid grid-cols-3 px-10'>
            <div className="">

            </div>
            <div className="col-span-2">
                <div className="p-2">
                    <div className='relative h-[800px] bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/1.jpeg)' }}>
                        <div className='absolute left-0 bottom-0'>
                            <h1 className='text-6xl text-[#CED0E4] text-right mr-10 font-extrabold relative -bottom-8'>
                                <span className='flex justify-end items-end'>
                                    <span className='font-normal text-3xl text-right bg-[#EEA620] text-black flex items-right flex-col p-2 rounded-lg'>
                                        <span>Asher</span>
                                        <span className='inline-block'>Academy</span>
                                    </span>
                                    2<img src="/2.png" />023<br />
                                </span>
                                <span>Inter-House <br /></span>
                                <span>Sports</span>
                            </h1>
                            <div className='grid grid-cols-3 p-5' style={{ backgroundColor: 'rgba(21, 21, 21, 0.6)' }}>
                                <div className='relative'>
                                    <div className="bg-[#DDDFF1] text-uppercase absolute right-0 -top-8 -bottom-8 p-5 rounded-lg w-[180px]">
                                        <div className='flex items-center justify-center h-full'>
                                            <h1 className='text-2xl uppercase text-center'>donate now</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-left py-5 px-4'>
                                    <h2 className='text-[#6B6E8D] text-2xl mb-2'>08 April 2023</h2>
                                    <p className='text-gray-200'>All houses complete in Long Tennis, Football, Basket ball and volley ball</p>
                                </div>
                                <div className='text-left py-5 px-4 border border-t-0 border-r-0 border-b-0 border-s-gray-200'>
                                    <h2 className='text-[#6B6E8D] text-2xl mb-2'>09 April 2023</h2>
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