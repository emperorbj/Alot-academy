import Footer from '../components/Footer';
import Product from '../components/Product'
import RecentlyViewed from '../components/RecentlyViewed';
import Navbar from '../components/Navbar';



let awards = [
    {
        image: 'https://images.unsplash.com/photo-1489659831163-682b5af42225?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Gold Medals",
        price: '5, 000',
        have: 10,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1698224788579-1611962f57bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Gold Cup",
        price: '25, 000',
        have: 1,
        expected: 1,
    },
    {
        image: 'https://images.unsplash.com/photo-1649520937981-763d6a14de7d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Bronze Medals",
        price: '3, 000',
        have: 10,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Silver Cup",
        price: '15, 000',
        have: 1,
        expected: 1,
    },
    {
        image: 'https://images.unsplash.com/photo-1452915858640-325b467fe554?q=80&w=1591&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Gold Medals",
        price: '5, 000',
        have: 10,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1606105961732-6332674f4ee6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Gold Cup",
        price: '25, 000',
        have: 1,
        expected: 1,
    },
    {
        image: 'https://images.unsplash.com/photo-1692869439847-80c355a2b7f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Bronze Medals",
        price: '3, 000',
        have: 10,
        expected: 20,
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1663133979210-c5e7d179e3e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Silver Cup",
        price: '15, 000',
        have: 1,
        expected: 1,
    },
];

let recently = [
    {
        image: 'https://images.unsplash.com/photo-1561580726-1bd7aed04eb0?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

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
                <div className="grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 lg:gap-x-4">
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
