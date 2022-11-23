import InvoiceDetails from "./InvoiceDetails"
import React from "react";

const ClientDetails = ({ name, email, mobileNum, address }) => {
    return (
        <div className="details container-fluid">
            <div className="row p-4">
                <div className="col-4">
                    <p className="ms-3 p-0">Billed to</p>
                    <h4>{name}</h4>
                    <p className="ms-3 p-0">{address}</p>
                    <p className="ms-3 p-0">{mobileNum}</p>
                    <p className="ms-3 p-0">{email}</p>
                </div>
                <InvoiceDetails dateInvoice="12/11/2022" invoiceNum="00000" />
                <article className="invoice-table col-4">
                    <ul>
                        <li>Invoicer total</li>
                        <li className="invoice-total">$663.00</li>
                    </ul>
                </article>
            </div>
        </div >
    )
}

export default ClientDetails
