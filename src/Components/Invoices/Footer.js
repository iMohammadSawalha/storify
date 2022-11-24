import React from "react";

const Footer = ({ data }) => {
    const btnPrint = () => {
        window.print();
    }
    return (
        <footer>
            <div className="row p-4">
                <div className="container-fluid">
                    <p className="fw-bold col-4">Sub Total: <span>{data.total}$</span> </p>
                    <p className="fw-bold col-4">Tax: <span>{data.tax}$</span> </p>
                    <div className="buttons ">
                        <button className="btn col-1 btn-outline-primary" onClick={btnPrint}>Print</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
