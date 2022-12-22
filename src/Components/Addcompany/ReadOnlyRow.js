import React from 'react';
import { BsFillPenFill } from "react-icons/bs";
import DeleteWarning from './Warning';
const ReadOnlyRow = ({ Data1, Data2, Data3, Data4, Data5, Data, handleEditClick, handleDeleteClick }) => {
return (
    <tr key={Data.id}>
        <td>{Data1}</td>
        <td>{Data2}</td>
        <td>{Data3}</td>
        <td>{Data4}</td>
        <td>{Data5}</td>
        <td className="TD2">
        <BsFillPenFill onClick={(event) => handleEditClick(event, Data)}/>
        </td>
        <td className="TD2">
            <DeleteWarning handleDeleteClick={handleDeleteClick} Data={Data} />
        </td>
    </tr>
)
}
export default ReadOnlyRow;