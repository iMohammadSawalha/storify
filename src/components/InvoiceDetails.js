import React from "react";

const InvoiceDetails = ({ data }) => {
    return (
        <div className="dates col-4">
            <ul>
                <li>Invoicer Number</li>
                <li className="invoice-num">{data.invoiceNum}</li>
                <li>Date of issue</li>
                <li className="date-invoice">{data.dateInvoice}</li>
            </ul>
        </div>
    )
}

export default InvoiceDetails;
