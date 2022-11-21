import React from 'react'

export const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <>
            <tr>
                <td> <input type="text" name="compname" defaultValue={editFormData.compname} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="email" defaultValue={editFormData.email} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="address" defaultValue={editFormData.address} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="phone" defaultValue={editFormData.phone} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name="comptype" defaultValue={editFormData.comptype} onChange={handleEditFormChange} /></td>

                <td>
                    <button type="submit" >save</button>
                    <button type="button" onClick={handleCancelClick}>cancel</button>

                </td>
            </tr>
        </>
    )
}
export default EditableRow;