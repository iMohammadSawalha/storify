import React from "react";

const InvoiceDetails = ({ invoiceNum, dateInvoice }) => {
    return (
        <div className="dates col-4">
            <ul>
                <li>Invoicer Number</li>
                <li className="invoice-num">{invoiceNum}</li>
                <li>Date of issue</li>
                <li className="date-invoice">{dateInvoice}</li>
            </ul>
        </div>
    )
}

export default InvoiceDetails;
