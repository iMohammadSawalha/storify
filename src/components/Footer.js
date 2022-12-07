import React from "react";
import Button from 'react-bootstrap/Button';

const Footer = ({ data }) => {
    const btnPrint = () => {
        window.print();
    }
    return (
        <>
            <div className="row p-4">
                <div className="container-fluid footer">
                    <p className="fw-bold">Sub Total: <span id="sub-total">${data.total}</span> </p>
                    <p className="fw-bold">Tax: <span id="tax">${data.tax}</span> </p>
                    <Button variant="btn col-1 btn-outline-primary" onClick={btnPrint}>Print</Button>
                </div>
            </div>
        </>
    )
}
export default Footer; 