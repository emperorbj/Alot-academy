import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from '../components/Product'
import RecentlyViewed from '../components/RecentlyViewed';


let decorations = [
    {
        image: 'https://images.unsplash.com/photo-1607346704652-de050550a758?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Ballons",
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
    {
        image: 'https://images.unsplash.com/photo-1608825154649-2e9bb4cd4211?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: 'https://images.unsplash.com/photo-1576533282779-2808a6d56728?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1635719921177-88e400a2812e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Ballons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
    {
        image: 'https://images.unsplash.com/photo-1626887339042-9ff4af20e05b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: 'https://images.unsplash.com/photo-1602678460152-719a9af1fb6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1605877649430-6cc78e85c4e9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Ballons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1709431587013-1b750b46674c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: 'https://images.unsplash.com/photo-1609368776780-d01ea4fcd2d8?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
];

let recently = [
    {
        image: 'https://images.unsplash.com/photo-1561580726-1bd7aed04eb0?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Gold Medals",
        price: '5, 000',
        have: 10,
        expected: 20,
    },
    {
        image: '/8d56fe9d94553558501dde4bde61a481.jpeg',
        name: "Gold Cup",
        price: '25, 000',
        have: 1,
        expected: 1,
    },
    {
        image: '/a45f1f9cb7bf1deb659c25ba8309f435.jpeg',
        name: "Bronze Medals",
        price: '3, 000',
        have: 10,
        expected: 20,
    },
    {
        image: '/ea18657f0ade0e070adc2002499b6cb8.jpeg',
        name: "Silver Cup",
        price: '15, 000',
        have: 1,
        expected: 1,
    },
]

function Decorations() {

    return (
        <>
            <Navbar/>
            <div className='bg-[#15141F] space-y-6'>
            <div className='p-4 space-y-4 px-10'>
                <div className="flex justify-between mt-[100px] mb-2">
                    <div>
                        <h2 className='text-3xl font-bold text-[#EEEFF8]'>Decorations</h2>
                        <p className='text-[#DDDFF1]'>18 items found</p>
                    </div>
                    <p><span className='text-[#EEEFF8]'>Sort by: </span><span className='text-[#6B6E8D]'>Quantity</span></p>
                </div>
                <div className="grid grid-cols-4 gap-x-4">
                    {
                        decorations.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
            <RecentlyViewed recently={recently} />
            <Footer/>
        </div>
        </>

    )
}

export default Decorations
