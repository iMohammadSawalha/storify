import React from 'react'
import editPhoto from './Editphoto.png'
import deletephoto from './Deletephoto.png'
import './ReadOnlyRow.css'
import Image from 'react-bootstrap/Image'
const ReadOnlyRow = ({ companyData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={companyData.id}>

            <td>{companyData.compname}</td>
            <td>{companyData.email}</td>
            <td>{companyData.address}</td>
            <td>{companyData.phone}</td>
            <td>{companyData.comptype}</td>
            <td>
                <Image src={editPhoto} onClick={(event) => handleEditClick(event, companyData)}  />
                <Image src={deletephoto} onClick={() => handleDeleteClick(companyData.id)} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;
