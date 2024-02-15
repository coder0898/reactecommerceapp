import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="error-box">
                <p><i class="fa-solid fa-circle-exclamation"></i></p>
                <p>404 Page not Found</p>
                <div className="back-box">
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}><i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;
