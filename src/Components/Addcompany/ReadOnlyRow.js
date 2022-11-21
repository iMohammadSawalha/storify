import React from 'react'

const ReadOnlyRow = ({ companyData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>

            <td>{companyData.compname}</td>
            <td>{companyData.email}</td>
            <td>{companyData.address}</td>
            <td>{companyData.phone}</td>
            <td>{companyData.comptype}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, companyData)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(companyData.id)}>Delete</button>

            </td>
        </tr>
    )
}
export default ReadOnlyRow;
