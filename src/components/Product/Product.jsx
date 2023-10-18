import PropTypes from 'prop-types'
import { AiFillEdit } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiDeleteBin2Fill } from 'react-icons/ri';
const Product = ({ product,productRat,setProductRat }) => {
    const { image, name, brandName, type, price, rating } = product

    return (
        <div className="card shadow-xl hover:shadow-black border space-y-4 p-4">
            <img src={image} alt="" />
            <h4 className='card-title'>{name}</h4>
            <div className='capitalize'>
                <p><span className='text-lg font-semibold'>Brand: &nbsp;</span> {brandName}</p>
                <p><span className='text-lg font-semibold'>Type: &nbsp;</span> {type}</p>
                <p><span className='text-lg font-semibold'>Price: &nbsp;</span> {price} Tk</p>
                <p className='text-sm'><span className='text-lg font-semibold'>Rating: &nbsp;</span>
                    {
                        rating && <div className="rating rating-sm rating-half">
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
            <div className='flex flex-row gap-2'>
                <button className='btn btn-sm capitalize bg-green-400 flex justify-center items-center'><BsFillInfoCircleFill></BsFillInfoCircleFill> Details</button>
                <button className='btn btn-sm capitalize bg-yellow-400 flex justify-center items-center'><AiFillEdit></AiFillEdit> Update</button>
                <button className='btn btn-sm capitalize bg-red-400 flex justify-center items-center'><RiDeleteBin2Fill></RiDeleteBin2Fill> Delete</button>
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