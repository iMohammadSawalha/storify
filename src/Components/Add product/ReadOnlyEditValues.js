import React from 'react'
import { BsFillBackspaceFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
const ReadOnlyRow = ({ proData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={proData.id}>
            <td>{proData.id}</td>
            <td></td>
            <td>{proData.name}</td>
            <td>{proData.desc}</td>
            <td>{proData.categ}</td>
            <td>{proData.price}</td>
            <td>{proData.status}</td>
            <td><BsFillPenFill onClick={(event) => handleEditClick(event, proData)}/></td>
          <td><BsFillBackspaceFill onClick={() => handleDeleteClick(proData.id)} /></td>
        </tr>
    )
}
export default ReadOnlyRow;