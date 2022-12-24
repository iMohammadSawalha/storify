import { BsFillPenFill } from "react-icons/bs";
import './ListStyle.css';
import DeleteWarning from '../Add product/Warning';
const ReadOnlyRow = ({ customerData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={customerData.id}>
            <td>{customerData.name}</td>
            <td>{customerData.email}</td>
            <td>{customerData.password}</td>
            <td>{customerData.phon}</td>
            <td>{customerData.city}</td>
            <td>{customerData.gender}</td>
          <td > <a>< BsFillPenFill className="btn1"  onClick={(event) => handleEditClick(event, customerData)}  /></a></td>
          <td ><DeleteWarning handleDeleteClick={handleDeleteClick} data ={customerData} /></td>
         
        </tr>
    )
}
export default ReadOnlyRow;