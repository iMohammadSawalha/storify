import React from 'react'
import { MdCancel } from "react-icons/md"
import './Style.css';
import { BsFillBookmarkCheckFill } from "react-icons/bs"
export const EditableRow = ({Col1, Col2,Col3,Col4,Col5,editFormData1,editFormData2,editFormData3,editFormData4,editFormData5,handleEditFormChange, handleCancelClick, handleEditFromSubmit }) => {
    return (
        <>
            <tr>
                <td> <input type="text" name={Col1} defaultValue={editFormData1} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name={Col2} defaultValue={editFormData2} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name={Col3} defaultValue={editFormData3} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name={Col4} defaultValue={editFormData4} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name={Col5} defaultValue={editFormData5} onChange={handleEditFormChange} /></td>

                <td className="TD2">
                    <BsFillBookmarkCheckFill onClick={handleEditFromSubmit} />
                </td>

                <td className="TD2">
                    <MdCancel onClick={handleCancelClick} />
                </td>

            </tr>
        </>
    )
}
export default EditableRow;