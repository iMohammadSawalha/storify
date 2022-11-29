import React from "react";
import InvoiceDetails from "./InvoiceDetails";
const ClientDetails = ({ data }) => {
    return (
        // const [clientName, setClientName] = useState('');
        // const [clientAddress, setClientAddress] = useState('');
        // const [clientPhone, setClientPhone] = useState('');

        <div className="details container-fluid">
            <div className="row p-4">
                <div className="col-4">
                    <p className="ms-3 p-0">Billed to</p>
                    <h4>{data.Fname}</h4>
                    <p className="ms-3 p-0">{data.address}</p>  {/* city, address */}
                    <p className="ms-3 p-0">{data.mobileNum}</p>
                    <p className="ms-3 p-0">{data.email}</p>
                </div>
                <InvoiceDetails data={{ dateInvoice: "12/11/2022", invoiceNum: "00000" }} />
                <article className="invoice-table col-4">
                    <ul>
                        <div className="total">
                            <li>Invoicer Total</li>
                            <li className="invoice-total">{data.total}$</li>
                        </div>
                    </ul>
                </article>
            </div>
        </div >
    )
}

export default ClientDetails;
