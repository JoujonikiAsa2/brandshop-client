import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from 'react-icons/fa'
import signIn from '../../assets/photos/Athentication/1.jpg'
const Login = () => {
    return (
        <div className='md:max-w-4xl lg:max-w-5xl mx-auto shadow-lg m-5 lg:m-20 md:m-16'> <h1 className="text-center text-2xl font-bold pt-8 text-[#3876BF]">SignUp</h1>
            <div className=" flex flex-col-reverse md:flex-row-reverse lg:flex-row justify-center items-center">
                <form className="space-y-4 pt-4">
                    <div className="flex-col  gap-4  items-center font-Montserrat">
                        <div className="flex items-center gap-6 w-full border-b-2">
                            <label className="">
                                <span className="text-lg font-medium font-tavi"><AiTwotoneMail></AiTwotoneMail></span>
                            </label>
                            <input type="text" name="email" placeholder="Your email address" className=" p-1 text-sm" required />
                        </div>
                        <div className="flex items-center gap-6 w-full border-b-2">
                            <label className="">
                                <span className="text-lg font-medium font-tavi"><RiLockPasswordFill></RiLockPasswordFill></span>
                            </label>
                            <input type="text" name="password" placeholder="Password" className=" p-1 text-sm" required />
                        </div>
                        <div className="flex items-center gap-3 pt-5">
                            <input type="checkbox" className=" p-1 text-sm" required />
                            <label className="">
                                <span className="font-medium font-tavi text-xs">I agree all statement in Terms of ervice</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-4 items-center font-Montserrat">
                        <div className="flex  flex-col gap-4 items-center font-Montserrat">
                            <div className="flex items-center gap-6 w-full">
                                <input type="submit" value="SignUp" className="input input-bordered text-sm font-bold bg-[#80B3FF] text-[#FFF]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-bold">Or</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-lg font-bold text-[#3876BF]'>
                        <soan className="pb-2">Sign up with </soan>
                        <button className='flex flex-row items-center gap-2 btn capitalize'><span className='text-xl text-[#3876BF] font-bold'></span>
                            <FaGoogle className='text-yellow-600 text-xl'></FaGoogle>Google</button>
                    </div>
                </form>
                <div>
                    <img src={signIn} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;