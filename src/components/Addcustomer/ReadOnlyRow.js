import { BsFillPenFill } from "react-icons/bs";
import WarningC from "./WarningC";
import './ListStyle.css';
const ReadOnlyRow = ({ customerData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={customerData.ind}>
            <td>{customerData.name}</td>
            <td>{customerData.email}</td>
            <td>{customerData.password}</td>
            <td>{customerData.phon}</td>
            <td>{customerData.city}</td>
            <td>{customerData.gender}</td>
            <td>< BsFillPenFill className="editBtn"  onClick={(event) => handleEditClick(event, customerData)}  />
                <WarningC  handleDeleteClick={handleDeleteClick} customerData={customerData} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;