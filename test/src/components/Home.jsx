
import Header from './Header'
import FAQS from './FAQS'
import Product from './Product'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='bg-[#15141F] space-y-6'>
            <Header/>
            <div className='p-4 text-[#EEEFF8] space-y-4 px-10'>
                <div className="flex justify-between mb-2">
                    <div>
                    <h2 className='text-3xl font-bold'>Lets donate more please</h2>
                    <p className='text-[#DDDFF1]'>Kindly Donate. There are still more items to buy.</p>
                    </div>
                    <a className='uppercase font-light'>
                    see all
                    </a>
                </div>
                <div className="grid grid-cols-4 gap-x-4">
                    {
                    [
                        {
                        image: '/0abd115d3e662f7a80e77a219f3d974c.jpeg',
                        name: "Wine Jersey",
                        price: '10, 000',
                        have: 1,
                        expected: 5,
                        },
                        {
                        image: '/f9cf28fbe6412b4169a371fab29e952e.jpeg',
                        name: "Injection",
                        price: '2, 000',
                        have: 5,
                        expected: 15,
                        },
                        {
                        image: '/cdb892aadeffa5638e279f4c19ad73f9.jpeg',
                        name: "Disinfectants",
                        price: '5, 000',
                        have: 20,
                        expected: 90,
                        },
                        {
                        image: '/4b2ba7273a4d65ef54dc017129acfd2b.jpeg',
                        name: "Backdrop",
                        price: '80, 000',
                        have: 1,
                        expected: 5,
                        },
                    ].map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                    }
                </div>
                </div>
                <div className='p-4 text-[#EEEFF8] space-y-4 px-10'>
                <div className="flex justify-between mb-2">
                    <div>
                    <h2 className='text-3xl font-bold'>Lets keep it coming!</h2>
                    <p className='text-[#DDDFF1]'>Kindly Donate. There are still more items to buy.</p>
                    </div>
                    <a className='uppercase font-light'>
                    see all
                    </a>
                </div>
                <div className="grid grid-cols-4 gap-x-4">
                    {
                    [
                        {
                        image: '/a45f1f9cb7bf1deb659c25ba8309f435.jpeg',
                        name: "Bronze Medals",
                        price: '3, 000',
                        have: 10,
                        expected: 20,
                        },
                        {
                        image: '/e1a71c7880656bc04f98f47f38cfab59.jpeg',
                        name: "Nasal Spray",
                        price: '10, 000',
                        have: 10,
                        expected: 20,
                        },
                        {
                        image: '/c63ff39cf049bd02809817211a070b10.jpeg',
                        name: "Tinsels",
                        price: '10, 000',
                        have: 15,
                        expected: 20,
                        },
                        {
                        image: '/e20b0e8b49157b427422c8517cec8749.jpeg',
                        name: "First Aid Box",
                        price: '30, 000',
                        have: 1,
                        expected: 2,
                        },
                    ].map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                    }
                </div>
            </div>
            <FAQS />
            </div>    
        </div>        
    )
}

export default Home
