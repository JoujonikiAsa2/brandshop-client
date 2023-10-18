import PropTypes from 'prop-types'
const ProductDetails = ({product}) => {
    const {image, name,brandName,type, price, rating,shortDescription} = product
    return (
        <div className="card shadow-lg border">
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{brandName}</p>
            <p>{type}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <p>{shortDescription}</p>
            <div>
                <button>Details</button>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

ProductDetails.propTypes={
    product: PropTypes.object
}
export default ProductDetails;