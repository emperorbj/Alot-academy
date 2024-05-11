import Footer from '../components/Footer';
import Product from '../components/Product'
import RecentlyViewed from '../components/RecentlyViewed';
import Navbar from '../components/Navbar';



let awards = [
    {
        image: '/uni1.png',
        name: "Gold Medals",
        price: '5, 000',
        have: 10,
        expected: 20,
    },
    {
        image: '/uni2.png',
        name: "Gold Cup",
        price: '25, 000',
        have: 1,
        expected: 1,
    },
    {
        image: '/uni3.png',
        name: "Bronze Medals",
        price: '3, 000',
        have: 10,
        expected: 20,
    },
    {
        image: '/uni4.png',
        name: "Silver Cup",
        price: '15, 000',
        have: 1,
        expected: 1,
    },
    {
        image: '/uni5.png',
        name: "Gold Medals",
        price: '5, 000',
        have: 10,
        expected: 20,
    },
    {
        image: '/uni6.png',
        name: "Gold Cup",
        price: '25, 000',
        have: 1,
        expected: 1,
    },
    {
        image: '/uni7.png',
        name: "Bronze Medals",
        price: '3, 000',
        have: 10,
        expected: 20,
    },
    {
        image: '/uni8.png',
        name: "Silver Cup",
        price: '15, 000',
        have: 1,
        expected: 1,
    },
];

let recently = [
    {
        image: '/bdbb9c1b4fffd88d874b98cd385b4375.jpeg',
        name: "Balloons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
    {
        image: '/1d8cb39e14a60df4891088ea89c3d46b.jpeg',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: '/tinsels.jpeg',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
    {
        image: '/bdbb9c1b4fffd88d874b98cd385b4375.jpeg',
        name: "Ballons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
]

const Uniforms = () => {
    return (
        <>
        <Navbar/>
        <div className='bg-[#15141F] space-y-6'>
            <div className='p-4 space-y-4 px-10'>
                <div className="flex justify-between mt-[100px] mb-2">
                    <div>
                        <h2 className='text-3xl font-bold text-[#EEEFF8]'>Uniforms</h2>
                        <p className='text-[#DDDFF1]'>16 items found</p>
                    </div>
                    <p><span className='text-[#EEEFF8]'>Sort by: </span><span className='text-[#6B6E8D]'>Quantity</span></p>
                </div>
                <div className="grid grid-cols-4 gap-x-4">
                    {
                        awards.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
            <RecentlyViewed recently={recently} />
            <Footer />
        </div>
        </>
    )
}

export default Uniforms
