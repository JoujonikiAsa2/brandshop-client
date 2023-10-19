import PropTypes from 'prop-types'
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product)
    const { image, name, brandName, type, price, rating, shortDescription } = product
    const cartProduct = { image, name, brandName, type, price, rating }

    const handleCart = () =>{
        fetch('https://fusion-electro-hub-server-side.vercel.app/carts',{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(cartProduct)
        })
    }
    return (
        <div>
            <Link to='/' className='pt-6 flex gap-2 justify-center items-center'><BsArrowLeftSquareFill></BsArrowLeftSquareFill>Back</Link>
            <div className="card shadow-lg flex justify-between items-center p-6 m-12 bg-[#F3F0CA] space-y-4">

                <img src={image} alt="" className='w-[500px] h-[500px]' />
                <div className='font-Montserrat  space-y-4'>
                    <h4 className='text-xl font-bold clear-left font-tavi'>{name}</h4>
                    <p className='text-lg font-tavi capitalize font-bold'>Brand: <span className='font-font-Montserrat font-normal text-gray-600'>{brandName}</span></p>
                    <p className='text-lg font-tavi capitalize font-bold'>Type: <span className='font-font-Montserrat font-normal text-gray-600'>{type}</span></p>
                    <p className='text-lg font-tavi capitalize font-bold'>Price: <span className='font-font-Montserrat font-normal text-gray-600'>{price}</span></p>
                    <p className='text-lg font-tavi capitalize font-bold'>Rating: <span className='font-font-Montserrat font-normal text-gray-600'>{rating}</span></p>
                    <p className='text-lg font-tavi capitalize text-gray-600'>Description: <span className='font-font-Montserrat font-normal text-gray-200]'>{shortDescription}</span></p>
                    <div className='text-lg font-tavi capitalize'>
                        <button className='btn btn-md bg-[#3876BF] hover:bg-transparent' onClick={handleCart}>Add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    product: PropTypes.object
}
export default ProductDetails;