
import { BsFillBackspaceFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";

const ReadOnlyRow = ({ customerData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={customerData.ind}>
            <td> {customerData.ind}</td>
            <td>{customerData.name}</td>
            <td>{customerData.email}</td>
            <td>{customerData.password}</td>
            <td>{customerData.address}</td>
            <td>{customerData.phon}</td>
            <td>{customerData.city}</td>
            <td>{customerData.gender}</td>
           
            <td>< BsFillPenFill id="penfill" data-tip="edit" onClick={(event) => handleEditClick(event, customerData)}  /></td>
        
                <td>
                <BsFillBackspaceFill id="backspace" data-tooltip-content="delete" onClick={() => handleDeleteClick(customerData.ind)} />
            </td>
           
        </tr>
    )
}
export default ReadOnlyRow;