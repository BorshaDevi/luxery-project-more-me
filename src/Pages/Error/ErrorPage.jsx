import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='max-w-6xl mx-auto mt-72 ml-96 '>
            <h1 className="font-bold">oops!</h1>
            <p className="font-bold">This page is define.</p>
            <Link to='/'>
            Go back <button className="btn">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;