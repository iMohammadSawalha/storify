import { Link } from "react-router-dom";
import "./styleErrorPage.css"
const ErrorPage = () => {
    return (
        <>
            <div className="container">
                <div className="row error-page">
                    <div className="col-md-6">
                        <div className="content-page">
                            <h1 className="content-title text-uppercase">Storify</h1>
                            <h2>Page Note Found</h2>
                            <p><span className="text-danger">Sorry</span>, The page you’re looking for doesn’t exist.</p>
                            <Link to="/Home"> <button className="btn btn-primary home-btn">Go Home</button></Link>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div>
                            <img src="https://img.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg?w
                            =740&t=st=1670975082~exp=1670975682~hmac=e89e62da81bcd1a8575c45628bf6a63aa241bb8ddadfe59173f4bb531d0787f9" alt="Error Picture" className="pic" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;