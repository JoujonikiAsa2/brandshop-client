import banner from "../../assets/photos/Banner/Banner.jpg"
import banner2 from "../../assets/photos/Banner/Banner2.jpg"
import banner3 from "../../assets/photos/Banner/Banner33.jpg"
import banner4 from "../../assets/photos/Banner/Top-10-Mobile-Brands-in-World.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center py-8">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={banner} alt="" className="rounded-lg w-[40rem] h-[20rem] z-10"/>
                        <div className="max-w-lg py-20 space-y-3 herotext">
                            <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Offer</h1>
                            <p><span className="text-xl uppercase text-red-500">10% discount on Laptop</span></p>
                            <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={banner2} alt="" className="rounded-lg w-[40rem] z-10"/>
                        <div className="max-w-lg py-20">
                            <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Watches</h1>
                            <p className="text-xl py-6">Explore to find best watches with best price</p>
                            <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">Explore</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={banner3} alt="" className="rounded-lg w-[40rem] z-10"/>
                        <div className="max-w-lg py-20">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Headphones</h1>
                            <p className="text-xl py-6">Explore to find best headphones with best price</p>
                            <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">Explore</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={banner4} alt="" className="rounded-lg w-[40rem] z-10"/>
                        <div className="max-w-lg py-20">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Mobiles</h1>
                            <p className="text-xl py-6">Explore to find best mobiles with best price</p>
                            <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">Explore</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomePage
