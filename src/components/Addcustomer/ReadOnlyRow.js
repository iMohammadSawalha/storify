import { BsFillPenFill } from "react-icons/bs";
import Warning from "./Warning";
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
          <td >< BsFillPenFill className="btn1"  onClick={(event) => handleEditClick(event, customerData)}  /></td>
          <td ><Warning handleDeleteClick={handleDeleteClick} customerData={customerData} /></td>
         
        </tr>
    )
}
export default ReadOnlyRow;