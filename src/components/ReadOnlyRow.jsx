import React from 'react'
import editPhoto from './Editphoto.png'
import deletephoto from './Deletephoto.png'
import './ReadOnlyRow.css'
const ReadOnlyRow = ({ companyData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>

            <td>{companyData.compname}</td>
            <td>{companyData.email}</td>
            <td>{companyData.address}</td>
            <td>{companyData.phone}</td>
            <td>{companyData.comptype}</td>
            <td>
                <img src={editPhoto} onClick={(event) => handleEditClick(event, companyData)}  />
                <img src={deletephoto} onClick={() => handleDeleteClick(companyData.id)} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;
