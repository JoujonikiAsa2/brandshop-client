import PropTypes from 'prop-types'
const Product = ({ product,productRat,setProductRat }) => {
    const { image, name, brandName, type, price, rating } = product

    return (
        <div className="card shadow-lg border space-y-4 p-4">
            <img src={image} alt="" />
            <h4 className='card-title'>{name}</h4>
            <div className='capitalize'>
                <p><span className='text-lg font-semibold'>Brand: &nbsp;</span> {brandName}</p>
                <p><span className='text-lg font-semibold'>Type: &nbsp;</span> {type}</p>
                <p><span className='text-lg font-semibold'>Price: &nbsp;</span> {price} Tk</p>
                <p className='text-sm'><span className='text-lg font-semibold'>Rating: &nbsp;</span>
                    {
                        rating && <div className="rating rating-md rating-half">
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="rating-hidden" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat+1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                        </div>
                    }
                </p>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='btn'>Details</button>
                <button className='btn'>Update button</button>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
    productRat: PropTypes.number,
    setProductRat: PropTypes.func
}

export default Product;