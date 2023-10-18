import { useLoaderData, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
// import { useEffect, useState } from "react";
// import Category from "../../components/Category/Category";
// import Swal from "sweetalert2";

const Products = () => {
    const products = useLoaderData()
    const id = useParams()
    console.log(id)
    // const [products, setAllProducts] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setAllProducts(data))
    // }, [])
    return (
        <div>
            <div>
                {
                    products.length > 0
                        ?
                        <div>
                            <h2 className="text-center text-3xl font-bold text-[#3876BF] py-12">Products</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-4">
                                {
                                    products.map(product => <Product key={product._id} product={product}></Product>)
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <div className="">
                               <h2 className="flex justify-center items-center text-3xl font-bold text-[#3876BF] py-12 h-[20rem]">No Product found</h2>
                            </div>
                        </div>

                }
            </div>
        </div>
    );
};

export default Products;