import React from "react";
import InvoiceDetails from "./InvoiceDetails";

const ClientDetails = ({ data }) => {


    return (
        <>
            <div className="container-fluid">
                <div className="row p-4">
                    <div className="client-column col-4">
                        <p className="ms-3 p-0">Billed to</p>
                        <h4>{data.name}</h4>
                        <p className="ms-3 p-0">{data.address}</p>
                        <p className="ms-3 p-0">{data.phone}</p>
                        <p className="ms-3 p-0">{data.email}</p>
                    </div>
                    <InvoiceDetails data={{ dateInvoice: calculateDate(), invoiceNum: randomInvoiceNum() }} />
                    <div className="invoice-column col-4">
                        <ul>
                            <div className="total">
                                <li>Invoicer Total</li>
                                <li className="invoice-total">$1466.99</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientDetails;

const calculateDate = () => {
    let currentDate = new Date().toLocaleDateString("de-DE");

    return currentDate;
}

const randomInvoiceNum = () => {
    let randomNum = Math.floor(100000 + Math.random() * 900000)
    return randomNum;
}