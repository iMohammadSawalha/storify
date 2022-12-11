import React from "react";

const Footer = ({ data }) => {
    return (
        <>
            <div className="row p-4">
                <div className="container-fluid footer">
                    <p className="fw-bold">Sub Total: <span id="sub-total">${data.total}</span> </p>
                    <p className="fw-bold">Tax: <span id="tax">${data.tax}</span> </p>
                </div>
            </div>
        </>
    )
}
export default Footer; 