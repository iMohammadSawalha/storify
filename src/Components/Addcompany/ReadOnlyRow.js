import React from 'react'
import './Style.css'
import { BsFillBackspaceFill, BsFillPenFill } from "react-icons/bs";
const ReadOnlyRow = ({ Data1, Data2, Data3, Data4, Data5, Data, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={Data.id}>
            <td data-table="compname" >{Data1}</td>
            <td data-table="email" >{Data2}</td>
            <td data-table="address" >{Data3}</td>
            <td data-table="phone" >{Data4}</td>
            <td data-table="comptype" >{Data5}</td>
            <td data-table="actions" className="TD2">
                <BsFillPenFill onClick={(event) => handleEditClick(event, Data)} />
            </td>
            <td data-table="actions" className="TD2">
                <BsFillBackspaceFill onClick={() => handleDeleteClick(Data.id)} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;
