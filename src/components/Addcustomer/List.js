
import { useState ,Fragment} from 'react'
import './ListStyle.css';
import PopupCustomer from './PopupCustomer';
import jsonData from './data.json';
import Form from 'react-bootstrap/Form';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import { Table ,Card} from 'react-bootstrap';
import { BsSortAlphaUp } from "react-icons/bs";
import { BsSortAlphaDown } from "react-icons/bs";
import { InputGroup } from 'react-bootstrap';
import {TfiSearch} from "react-icons/tfi"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
  const List = () => {
    const [editFormData, setEditFormData] = useState({
        name: "",
        email: "",
        phon: "",
        city: "",
        gender:"",
        password:""
      })
      const [customerData, setcustomerData] = useState(jsonData);
      const [EditcustomerDataId, setEditcustomerDataId] = useState(null);
      const [CustomerDataLength, setCustomerDataLength] = useState(customerData.length + 1);
      const [search, setSearch] = useState('');
      const [isActive, setIsActive] = useState(true);


      // sort......
      const onSorterDow =(e)=>{
    
        const sortedData=[...customerData]
          sortedData.sort((a,b)=>a.name < b.name ? 1 : -1)
        setcustomerData(sortedData);
     
       };
       const onSorterUp =(e)=>{
       
        const sortedData=[...customerData]
          sortedData.sort((a,b)=>a.name < b.name ? -1 : 1)
        setcustomerData(sortedData);
    
       };
       
//delete row:
       const handleDeleteClick = (customerDataId) => {
		const newCustomerData = [...customerData];
		const index = customerData.findIndex((customerData) => customerData.ind === customerDataId);
		newCustomerData.splice(index, 1);
		setcustomerData(newCustomerData);

	}
  //save info after edit:
    const handleEditFromSubmit = (event) => {
        event.preventDefault();
        const editedcustomerData = {
          ind: EditcustomerDataId,
          name: editFormData.name,
          email: editFormData.email,
          phon: editFormData.phon,
          city: editFormData.city,
          gender: editFormData.gender,
          password: editFormData.password
        }

        const newCustomerData = [...customerData];
      const index = customerData.findIndex((customerData) => customerData.ind === EditcustomerDataId);
      newCustomerData[index] = editedcustomerData;
      setcustomerData(newCustomerData);
      setEditcustomerDataId(null);
    
    }
// cancel the edit operation:
    const handleCancelClick = () => {
        setEditcustomerDataId(null);
      }

const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    }
    //edit row:
    const handleEditClick = (event, customerData) => {
        event.preventDefault();
    
        setEditcustomerDataId(customerData.ind);
        const formValues = {
        ind:customerData.ind,
          name: customerData.name,
          email: customerData.email,
          password: customerData.password,
          phon: customerData.phon,
          city: customerData.city,
          gender: customerData.gender
        }
    
        setEditFormData(formValues)
      }

      const tableRows = customerData.filter((item)=>{
       
        return (search.toLowerCase() === '') || (search.toUpperCase() === '') ? item : (item.name.toLowerCase().includes(search)) || (item.name.toUpperCase().includes(search)) }).map((customerData) => {
           
      return (
        
				<Fragment  key={customerData.ind} >
					{EditcustomerDataId === customerData.ind? (<EditableRow customerData={customerData} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} handleEditFromSubmit={handleEditFromSubmit} />): (<ReadOnlyRow customerData={customerData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
				</Fragment>
      
		);
           
    
    
	});
  //addRows
    const addRows = (data) => {
		setCustomerDataLength(CustomerDataLength + 1);
		data.ind = CustomerDataLength;
		const updatedcustomerData = [...customerData];
		updatedcustomerData.push(data);
		setcustomerData(updatedcustomerData);
	};
  
  return ( 
    <>
<div className='list'>
     <Card id='tableCard'>
		  <Card.Header>
        <h1 >Customer List</h1>
        <Breadcrumb>
				<Breadcrumb.Item active>Add Customer</Breadcrumb.Item>
			</Breadcrumb>
      <div className='row'>
					<div className="col-lg-5 col-md-5 col-sm-5 col-xs-2 searchForm">
						<InputGroup id="searchInput">
						<InputGroup.Text id="basic-addon1"><TfiSearch/></InputGroup.Text>
						<Form.Control 
						placeholder="Search....."
						aria-label="search"
						aria-describedby="basic-addon1"
						onChange={(e) => setSearch(e.target.value)}/>
						</InputGroup>
					</div>
					<div className="col-lg-5 col-md-3 col-sm-3 col-xs-3 "></div>
					<div className="col-lg-2 col-md-4 col-sm-4 col-xs-7 addPro">
						<PopupCustomer func={addRows} />
					</div>
				</div>
          </Card.Header>
    <Card.Body>
          <Table  className='tab'>
           <thead >
            <tr >
              <th > Name <div id='sort'  onClick={() => setIsActive(!isActive)}>
               {isActive ? <BsSortAlphaUp onClick={()=>onSorterDow()}/> :<BsSortAlphaDown onClick={()=>onSorterUp()}/>}</div> </th>
              <th>E-mail</th>
              <th>password</th>
              <th>Phone</th>
              <th>City</th>
              <th>Gender</th>
              <th> Edit </th>
              <th>Delete </th>
              
              
            </tr>
           </thead>
           <tbody className='table-body'>{tableRows}</tbody>
          </Table>
        </Card.Body>
        </Card>
        </div>
        
        </>
  );
}

export default List;


