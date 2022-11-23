import React from "react";
import Table from 'react-bootstrap/Table';

const InvocieTable = () => {
    return (
        <Table responsive="sm" className="table-hover p-3 ms-4">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Your Item Name
                        <p className="p-1">Brief description</p>
                    </td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td> Your Item Name
                        <p className="p-1">Brief description</p>
                    </td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td> Your Item Name
                        <p className="p-1">Brief description</p>
                    </td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default InvocieTable;