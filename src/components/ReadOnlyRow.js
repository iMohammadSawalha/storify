import React from 'react'
import './Style.css'
import { BsFillBackspaceFill, BsFillPenFill } from "react-icons/bs";
const ReadOnlyRow = ({ companyData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={companyData.id} className="TR">
            <td data-table="compname" className="TD" >{companyData.compname}</td>
            <td data-table="email" className="TD">{companyData.email}</td>
            <td data-table="address" className="TD">{companyData.address}</td>
            <td data-table="phone" className="TD">{companyData.phone}</td>
            <td data-table="comptype" className="TD">{companyData.comptype}</td>
            <td data-table="actions" className="TD2">
                <BsFillPenFill onClick={(event) => handleEditClick(event, companyData)} />
            </td>
            <td data-table="actions" className="TD2">
                <BsFillBackspaceFill onClick={() => handleDeleteClick(companyData.id)} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;
