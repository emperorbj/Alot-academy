import Product from "./Product";


const RecentlyViewed = ({ recently }) => {
    return (
        <div className='p-4 text-[#EEEFF8] space-y-4 px-10'>
            <div className="flex justify-between mb-2">
                <div>
                    <h2 className='text-3xl font-bold'>Recently viewed</h2>
                    <p className='text-[#DDDFF1]'>Your donations will go a long way in procuring these items.</p>
                </div>
                <a className='uppercase font-light'>
                    see all
                </a>
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-4 lg:gap-x-4">
                {
                    recently.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentlyViewed;