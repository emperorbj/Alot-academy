import Footer from '../components/Footer';
import Product from '../components/Product'
import RecentlyViewed from '../components/RecentlyViewed';
import Navbar from '../components/Navbar';

let decorations = [
    {
        image: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Ballons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
    {
        image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Ballons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
    {
        image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1666649675527-6a7859752c53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1621188988909-fbef0a88dc04?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Ballons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
    {
        image: 'https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
    {
        image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Ballons",
        price: '20, 000',
        have: 90,
        expected: 90,
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1668095398227-c943ddb69d89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Lights",
        price: '2, 000',
        have: 5,
        expected: 15,
    },
    {
        image: 'https://images.unsplash.com/photo-1619337744931-97f65a4f14d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Tinsels",
        price: '10, 000',
        have: 20,
        expected: 20,
    },
];

let recently = [
    {
        image: '/a45f1f9cb7bf1deb659c25ba8309f435.jpeg',
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

const Refreshment = () => {
    return (
        <>
        <Navbar/>
        <div className='bg-[#15141F] space-y-6'>
        <div className='p-4 space-y-4 px-10'>
            <div className="flex justify-between mt-[100px] mb-2">
                <div>
                    <h2 className='text-3xl font-bold text-[#EEEFF8]'>Refreshments</h2>
                    <p className='text-[#DDDFF1]'>18 items found</p>
                </div>
                <p><span className='text-[#EEEFF8]'>Sort by: </span><span className='text-[#6B6E8D]'>Quantity</span></p>
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 lg:gap-x-4">
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

export default Refreshment
