import ProgressBar from "./ProgressBar";
import PropTypes from 'prop-types'; // Import PropTypes for validation

const Product = ({ product }) => {
      // Prop validation using PropTypes
    Product.propTypes = {
        product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        have: PropTypes.number.isRequired,
        expected: PropTypes.number.isRequired,
        }).isRequired,
    };
    return (
        <div className='h-[573px] rounded-lg bg-black mt-4 shadow-lg'>
            <div className='w-100 h-[374px] rounded-lg bg-cover bg-center mb-4' style={{ backgroundImage: `url(${product.image})` }} >
            </div>
            <h3 className="text-2xl text-white">{product.name}</h3>
            <h3 className='text-3xl font-bold text-[#DDDFF1]'>N {product.price}</h3>
            <ProgressBar percent={(product.have / product.expected) * 100} />
            <p className='text-[#CED0E4] text-sm flex items-center'>
                <span className="me-2">
                    <img src="/ellipse.png" />
                </span>
                {product.have} items procured out of {product.expected} items
            </p>
        </div>
    )
}

export default Product;