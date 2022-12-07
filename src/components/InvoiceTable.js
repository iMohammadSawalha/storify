import Table from 'react-bootstrap/Table';
import React from "react";
import Data from "../Data.json";

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
                            <td> {data.product}
                                <p className="p-1">{data.description}</p>
                            </td>
                            <td id="cost">${data.cost}</td>
                            <td>{data.amount}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    )
}



export default InvocieTable;
