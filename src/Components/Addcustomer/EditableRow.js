import React from 'react'
import { BsFillBookmarkCheckFill } from "react-icons/bs"
import { MdCancel } from "react-icons/md"
import './ListStyle.css'

 const EditableRow = ({customerData ,editFormData, handleEditFormChange, handleCancelClick,handleEditFromSubmit }) => {
    return (
        <>
            <tr key={customerData.id}>
              <td> <input type="text" name="name" defaultValue={editFormData.name} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="email" defaultValue={editFormData.email} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="password" defaultValue={editFormData.password} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="phon" defaultValue={editFormData.phon} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="city" defaultValue={editFormData.city} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="gender" defaultValue={editFormData.gender} onChange={handleEditFormChange} /></td>
              <td><BsFillBookmarkCheckFill className="btn1"  onClick={handleEditFromSubmit}/></td>
              <td> <MdCancel  className="btn1" onClick={handleCancelClick}/> </td>
            </tr>
        </>
    )
}
export default EditableRow;