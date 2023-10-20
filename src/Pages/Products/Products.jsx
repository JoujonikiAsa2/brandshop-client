import { useLoaderData, useParams } from "react-router-dom";
// import Product from "../../components/Product/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Product from "../../components/Product/Product";
import Advertise from "../../components/Advertise/Advertise";

const Products = () => {
    const products = useLoaderData()
    const id = useParams()
    console.log(id)
    return (
        <div>
            <div>
                {
                    products.length > 0
                        ?
                        <div className="my-20">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    products.slice(0, 3).map(product => <SwiperSlide className="bg-[#F3F0CA]" key={product._id}><Advertise product={product}></Advertise></SwiperSlide>)
                                }
                            </Swiper>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
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