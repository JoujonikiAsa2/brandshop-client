import { Link } from "react-router-dom";
import errorImage from '../../assets/photos/Error/Connection Error.gif'
const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center space-y-8">
            <h2 className="text-3xl text-red-400 font-bold">Something went wrong! Please go back to the Home Page</h2>
            <Link to='/'><button className="btn btn-sm bg-red-300 border-black hover:bg-transparent">Home Page</button></Link>
            <div>
                <img src={errorImage} alt="" className="h-96"/>
            </div>
        </div>
    );
};

export default ErrorPage;