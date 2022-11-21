import Dates from "./Dates"


const Client = () => {
    return (
        <div className="details container-fluid">
            <div className="row p-4">
                <div className="col-4">
                    <p id="bill" className="ms-3 p-0">Billed to</p>
                    <h4>Osama AbuReesh</h4>
                    <p className="ms-3 p-0">● Nablus, Rafydia st</p>
                    <p className="ms-3 p-0">● +972-569-34320</p>
                    <p className="ms-3 p-0">● City, State, Country</p>
                </div>
                <Dates />
                <article className="invoice-table col-4">
                    <ul>
                        <li>Invoicer total</li>
                        <li className="invoice-total">$544.00</li>
                    </ul>
                </article>
            </div>
        </div >
    )
}

export default Client
