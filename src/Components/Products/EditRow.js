import {MdCancel} from "react-icons/md"
import {BsFillBookmarkCheckFill} from "react-icons/bs"
import './List.css'


const EditRow = ({proData, editFormData, handleEditFormChange, handleCancelClick,handleEditFromSubmit }) => {
    return (
        <>
            <tr key={proData.id}>
                <td> <input type="text" name="name" defaultValue={editFormData.name} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="desc" value={editFormData.desc} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="categ" value={editFormData.categ} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="price" value={editFormData.price} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="status" value={editFormData.status} onChange={handleEditFormChange}/></td>
                <td><BsFillBookmarkCheckFill className="editBtn" onClick={handleEditFromSubmit}/></td>
               <td><MdCancel className="editBtn" onClick={handleCancelClick}/></td>
            </tr>
            
        </>
    )


}
export default EditRow;