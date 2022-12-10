import React from "react";

const InvoiceDetails = ({ data }) => {
    return (
        <>
            <div className="date-column col-4">
                <ul>
                    <li>Invoicer Number</li>
                    <li className="invoice-num fw-bold">{data.invoiceNum}</li>
                    <li>Date of issue</li>
                    <li className="date-invoice fw-bold">{data.dateInvoice}</li>
                </ul>
            </div>
        </>
    )
}

export default InvoiceDetails;
