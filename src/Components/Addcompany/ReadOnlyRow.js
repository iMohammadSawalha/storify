import React from 'react'
import { BsFillPenFill } from "react-icons/bs";
import DeleteWarning from '../Add product/Warning';

const ReadOnlyRow = ({Data, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={Data.id}>
            <td>{Data.compname}</td>
            <td>{Data.email}</td>
            <td>{Data.address}</td>
            <td>{Data.phone}</td>
            <td>{Data.comptype}</td>
            <td><BsFillPenFill className="editBtn" onClick={(event) => handleEditClick(event, Data)} /></td>
            <td>
                <DeleteWarning handleDeleteClick={handleDeleteClick} data={Data} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;