import React from 'react'
import './ListStyle.css'
import {MdCancel} from "react-icons/md"
import {BsFillBookmarkCheckFill} from "react-icons/bs"

 const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick,handleEditFromSubmit }) => {
    return (     
        <>
            <tr id='edit'>
       
              <td> <input type="text" name="name" defaultValue={editFormData.name} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="email" defaultValue={editFormData.email} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="password" defaultValue={editFormData.password} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="phon" defaultValue={editFormData.phon} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="city" defaultValue={editFormData.city} onChange={handleEditFormChange} /></td>
              <td> <input type="text" name="gender" defaultValue={editFormData.gender} onChange={handleEditFormChange} /></td>
               <td  id='action'>
                   <BsFillBookmarkCheckFill className="editBtn"  onClick={handleEditFromSubmit}/> 
                   <MdCancel id='icon' className="editBtn" onClick={handleCancelClick}/> </td>
               </tr>
        </>
    )
}
export default EditableRow;