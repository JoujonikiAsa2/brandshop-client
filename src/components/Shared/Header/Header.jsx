import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
    const { user } = useContext(AuthContext)
    const { logOut } = useContext(AuthContext)

    const [carts, setCart] = useState([])

    const handleLogOut = () => {
        logOut()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed out successfully'
                })
            })
            .catch(error => console.log(error.message))
    }

    fetch('https://fusion-electro-hub-server-side.vercel.app/carts')
        .then(res => res.json())
        .then(data => setCart(data))

    console.log(carts.length)

    const links = <>
        <li><NavLink to='/' style={({ isActive }) => {
            return {
                backgroundColor: isActive ? "#E1AA74" : "",
                color: isActive ? "#FFF" : "",
            }
        }}>Home</NavLink></li>
        <li><NavLink to='/addProduct' style={({ isActive }) => {
            return {
                backgroundColor: isActive ? "#E1AA74" : "",
                color: isActive ? "#FFF" : "",
            }
        }}>Add Product</NavLink></li>
        <li><NavLink to='/products' style={({ isActive }) => {
            return {
                backgroundColor: isActive ? "#E1AA74" : "",
                color: isActive ? "#FFF" : "",
            }
        }}>Products</NavLink></li>
    </>
    return (
        <div className="font-noto z-30">
            <div className="flex flex-col md:lg:flex-col lg:flex-row justify-between items-center py-4 px-4 s">
                <div className="">
                    <Link className="lg:text-2xl md:text-2xl text-xl font-tavi font-bold text-[#3876BF]">Fusion<span className="text-[#E1AA74]">Electro</span>Hub</Link>
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
                        user ?
                            <div className="navbar bg-base-100">
                                <div className="flex-none">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                <span className="badge badge-sm indicator-item">{carts.length}</span>
                                            </div>
                                        </label>
                                        <div tabIndex={0} className="mt-3 z-[30] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                            <div className="card-body">
                                                <span className="font-bold text-lg">{carts.length} Items</span>
                                                <div className="card-actions">
                                                    <Link to='/cartDetails'>
                                                        <button className="btn btn-primary btn-block">View cart</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <a className="btn btn-ghost normal-case text-sm">{user.displayName}</a>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <Link onClick={handleLogOut}>Log Out</Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :
                            <Link to='/signIn'><button className="btn h-4 rounded-lg capitalize bg-[#E1AA74] text-md text-[#FFF] hover:bg-transparent hover:text-[#E1AA74]">SignIn</button></Link>
                    }
                </div>
            </div>
            <div className="navbar bg-[#3876BF] text-[#58573c] text-md">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown z-30">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-[#3876BF] rounded-box w-52  space-y-3 text-md text-[#FFF] font-bold">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="lg:navbar-start md:navbar-start hidden lg:flex text-md">
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