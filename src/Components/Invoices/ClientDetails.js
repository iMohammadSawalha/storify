import InvoiceDetails from "./InvoiceDetails"
import React from "react";

const ClientDetails = ({ data }) => {
    return (
        <div className="details container-fluid">
            <div className="row p-4">
                <div className="col-4">
                    <p className="ms-3 p-0">Billed to</p>
                    <h4>{data.Fname}</h4>
                    <p className="ms-3 p-0">{data.address}</p>
                    <p className="ms-3 p-0">{data.mobileNum}</p>
                    <p className="ms-3 p-0">{data.email}</p>
                </div>
                <InvoiceDetails data={{dateInvoice:"12/11/2022", invoiceNum:"00000"}} />
                <article className="invoice-table col-4">
                    <ul>
                        <li>Invoicer Total</li>
                        <li className="invoice-total">{data.total}</li>
                    </ul>
                </article>
            </div>
        </div >
    )
}

export default ClientDetails
