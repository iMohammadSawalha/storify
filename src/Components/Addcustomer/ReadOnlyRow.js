import { BsFillPenFill } from "react-icons/bs";
import './ListStyle.css';
import Warning from "./Warning";
const ReadOnlyRow = ({ customerData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={customerData.id}>
            <td>{customerData.name}</td>
            <td>{customerData.email}</td>
            <td>{customerData.password}</td>
            <td>{customerData.phon}</td>
            <td>{customerData.city}</td>
            <td>{customerData.gender}</td>
          <td >< BsFillPenFill className="btn1"  onClick={(event) => handleEditClick(event, customerData)}  /></td>
          <td ><Warning handleDeleteClick={handleDeleteClick} customerData={customerData} /></td>
         
        </tr>
    )
}
export default ReadOnlyRow;