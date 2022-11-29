import {MdCancel} from "react-icons/md"
import {BsFillBookmarkCheckFill} from "react-icons/bs"
const EditRow = ({ editForm, handleEditForm, handleCancle, handleEditFormSubmit }) => {
    return (
        <>
            <tr>
                <td></td><td></td>
                <td> <input type="text" name="name" defaultValue={editForm.name} onChange={handleEditForm}/></td>
                <td> <input type="text" name="desc" value={editForm.desc} onChange={handleEditForm}/></td>
                <td> <input type="text" name="categ" value={editForm.categ} onChange={handleEditForm}/></td>
                <td> <input type="text" name="price" value={editForm.price} onChange={handleEditForm}/></td>
                <td> <input type="text" name="curr" value={editForm.curr} onChange={handleEditForm}/></td>
                <td><BsFillBookmarkCheckFill onClick={handleEditFormSubmit}/></td>
               <td><MdCancel onClick={handleCancle}/></td>

            </tr>
            
        </>
    )


}
export default EditRow;