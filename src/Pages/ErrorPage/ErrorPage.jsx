import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold my-5">404! Not Found</h1>
            <Link className="text-2xl text-white font-semibold px-5 py-2 bg-red-500" to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;