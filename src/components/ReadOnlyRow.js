import React from 'react'
import './ReadOnlyRow.css'
import { BsFillBackspaceFill,BsFillPenFill } from "react-icons/bs";
const ReadOnlyRow = ({ companyData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={companyData.id} id="TR">
            <td data-table="compname"id="TD1" >{companyData.compname}</td>
            <td data-table="email"id="TD2">{companyData.email}</td>
            <td data-table="address"id="TD3">{companyData.address}</td>
            <td data-table="phone"id="TD4">{companyData.phone}</td>
            <td data-table="comptype"id="TD5">{companyData.comptype}</td>
            <td data-table="actions" id="TD6">
            <BsFillPenFill onClick={(event) => handleEditClick(event, companyData)}  />
            <BsFillBackspaceFill onClick={() => handleDeleteClick(companyData.id)} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;
