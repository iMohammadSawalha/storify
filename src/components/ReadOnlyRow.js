import React from 'react'
import { BsFillPenFill } from "react-icons/bs";
import DeleteWarning from './Warning';
const ReadOnlyRow = ({Data, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{Data.compname}</td>
            <td>{Data.email}</td>
            <td>{Data.address}</td>
            <td>{Data.phone}</td>
            <td>{Data.comptype}</td>
            <td><BsFillPenFill onClick={(event) => handleEditClick(event, Data)} /></td>
            <td>
                <DeleteWarning handleDeleteClick={handleDeleteClick} Data={Data} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;
