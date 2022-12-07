import React from "react";
import InvoiceDetails from "./InvoiceDetails";
// import Data from "../Data.json";

const ClientDetails = ({ data }) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row p-4">
                    <div className="col-4">
                        <p className="ms-3 p-0">Billed to</p>
                        <h4>{data.Fname}</h4>
                        <p className="ms-3 p-0">{data.address}</p>
                        <p className="ms-3 p-0">{data.mobileNum}</p>
                        <p className="ms-3 p-0">{data.email}</p>
                    </div>

                    <InvoiceDetails data={{ dateInvoice: "12/11/2022", invoiceNum: "23332" }} />
                    <article className="invoice-column col-4">
                        <ul>
                            <div className="total">
                                <li>Invoicer Total</li>
                                <li className="invoice-total">$1466.99</li>
                            </div>
                        </ul>
                    </article>
                </div>
            </div >
        </>
    )
}

export default ClientDetails;
