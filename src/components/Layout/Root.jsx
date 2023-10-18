import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-Montserrat font-noto font-tavi">
            <Header></Header>
            <div className="max-w-5xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;