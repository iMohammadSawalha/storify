import React from 'react'
import { BsFillPenFill } from "react-icons/bs";
import DeleteWarning from './Warning'
import './List.css'
const ReadOnlyRow = ({ proData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={proData.id}>
            <td>{proData.name}</td>
            <td>{proData.desc}</td>
            <td>{proData.categ}</td>
            <td>{proData.curr}{proData.price}</td>
            <td>{proData.status}</td>
            <td><a><BsFillPenFill className="editBtn" onClick={(event) => handleEditClick(event, proData)}/></a></td>
            <td><DeleteWarning handleDeleteClick={handleDeleteClick} data={proData}/></td>
        </tr>
    )
}
export default ReadOnlyRow;