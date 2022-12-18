import React from "react";
import Table from 'react-bootstrap/Table';
import Data from "../../Data/Invoices/Table.json";

const InvocieTable = () => {
    return (
        <>
            <Table responsive="sm" className="table-hover p-3 ms-4">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>{
                    Data.map((data, index) => (
                        <tr key={index}>
                            <td id="table-product"> {data.product}
                                <p className="p-1" id="table-desc">{data.description}</p>
                            </td>
                            <td id="table-cost">{data.curr}{data.cost}</td>
                            <td id="table-amount">{data.amount}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    )
}



export default InvocieTable;
