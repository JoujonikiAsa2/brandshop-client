import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {

    const user = false

    const links = <>
        <li><NavLink to='/' style={({isActive}) => {
            return{
                backgroundColor: isActive ? "#E1AA74" : "",
                color: isActive ? "#FFF" : "",
            }
        }}>Home</NavLink></li>
        <li><NavLink to='/addProduct' style={({isActive}) => {
            return{
                backgroundColor: isActive ? "#E1AA74" : "",
                color: isActive ? "#FFF" : "",
            }
        }}>Add Product</NavLink></li>
        <li><NavLink to='/products' style={({isActive}) => {
            return{
                backgroundColor: isActive ? "#E1AA74" : "",
                color: isActive ? "#FFF" : "",
            }
        }}>Products</NavLink></li>
    </>
    return (
        <div className="font-noto z-30">
            <div className="flex flex-col md:lg:flex-col lg:flex-row justify-between items-center py-4 px-4 s">
                <div className="">
                    <Link className="lg:text-3xl md:text-2xl text-xl font-tavi font-bold text-[#3876BF]">Fuision<span className="text-[#E1AA74]">Electro</span>Hub</Link>
                </div>
                <div className="py-3 lg:py-0 md:py-3">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered lg:w-96 md:w-96 w-60" />
                            <button className="btn btn-square bg-[#E1AA74] text-[#FFF] font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 ">
                    {
                        user == true && <button className="btn flex gap-2 items-center rounded-lg capitalize">
                            <span>My Cart</span><FaShoppingCart></FaShoppingCart>
                        </button>
                    }
                    {
                        user == true ? <div>
                            <div className="avatar ">
                                <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold">Name</h4>
                            </div>
                        </div>
                            :
                            <Link to='/signIn'><button className="btn h-4 rounded-lg capitalize bg-[#E1AA74] text-lg text-[#FFF] hover:bg-transparent hover:text-[#E1AA74]">SignIn</button></Link>
                    }
                </div>
            </div>
            <div className="navbar bg-[#3876BF] text-[#58573c]">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown z-30">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#3876BF] rounded-box w-52  space-y-3 text-lg text-[#FFF] font-bold">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="lg:navbar-start md:navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-lg text-[#F3F0CA] font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Header;