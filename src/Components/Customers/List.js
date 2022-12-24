import { Fragment, useState } from 'react';
import { Card, InputGroup, Table } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import jsonData from '../../Data/Customers/data.json';
import EditableRow from './EditableRow';
import './ListStyle.css';
import PopupCustomer from './PopupCustomer';
import ReadOnlyRow from './ReadOnlyRow';
import Pagination from 'react-bootstrap/Pagination';
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
      const [order, setOrder] = useState("ASC");

      const sorting = (col) => {
      if (order === "ASC") {
        const sorted = [...customerData].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setcustomerData(sorted);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sorted = [...customerData].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setcustomerData(sorted);
        setOrder("ASC");
      }
    }

       
//delete row:
       const handleDeleteClick = (customerDataId) => {
		const newCustomerData = [...customerData];
		const index = customerData.findIndex((customerData) => customerData.id === customerDataId);
		newCustomerData.splice(index, 1);
		setcustomerData(newCustomerData);

	}
  //save info after edit:
    const handleEditFromSubmit = (event) => {
        event.preventDefault();
        const editedcustomerData = {
          id: EditcustomerDataId,
          name: editFormData.name,
          email: editFormData.email,
          phon: editFormData.phon,
          city: editFormData.city,
          gender: editFormData.gender,
          password: editFormData.password
        }

        const newCustomerData = [...customerData];
      const index = customerData.findIndex((customerData) => customerData.id === EditcustomerDataId);
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
    
        setEditcustomerDataId(customerData.id);
        const formValues = {
        id:customerData.id,
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
				<Fragment  key={customerData.id} >
					{EditcustomerDataId === customerData.id? (<EditableRow customerData={customerData} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} handleEditFromSubmit={handleEditFromSubmit} />): (<ReadOnlyRow customerData={customerData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
				</Fragment>
		);   
	});
  //addRows
    const addRows = (data) => {
		setCustomerDataLength(CustomerDataLength + 1);
		data.id = CustomerDataLength;
		const updatedcustomerData = [...customerData];
		updatedcustomerData.push(data);
		setcustomerData(updatedcustomerData);
	};
  
  let active = 1;
   let items = [];
   for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
             );
        }

  return ( 
      <div className='list'>
        <Card id='tableCard'>
		      <Card.Header id='cardH'>
            <div className='headerCont'>
              <div className='firstCont'>
                <h1 id='customerH'>Customer List</h1>
                    <Breadcrumb id='toDash'>
				              <Breadcrumb.Item href='/dashboard' >Dashboard</Breadcrumb.Item>
				              <Breadcrumb.Item active>Add Customer</Breadcrumb.Item>
			              </Breadcrumb>
                    <div id='searchForm'>
                      <InputGroup id="searchInput">
                        <InputGroup.Text id="basic-addon1"><TfiSearch/></InputGroup.Text>
                        <Form.Control 
                          placeholder="Search....."
                          aria-label="search"
                          aria-describedby="basic-addon1"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </InputGroup>
                    </div>
                  </div>
                  <div className='secCont'>
                    <PopupCustomer func={addRows} />
                  </div>
                </div>
                <div className='space'></div>
              </Card.Header>
              <Card.Body>
              <Table  className='tab'>
                <thead>
                  <tr>
                    <th onClick={() => { sorting("name"), setIsActive(!isActive)}}>
                      Name 
                      <div id='sort'  onClick={() => setIsActive(!isActive)}>
                        {isActive ? <BsSortAlphaUp onClick={() => { sorting("name") }}/> :<BsSortAlphaDown onClick={() => { sorting("name") }}/>}
                      </div> 
                    </th>    
                    <th>E-mail</th>
                    <th>password</th>
                    <th>Phone</th>
                    <th onClick={() => { sorting("city"), setIsActive(!isActive)}}>
                      City
                      <div id='sort'  onClick={() => setIsActive(!isActive)}>
                        {isActive ? <BsSortAlphaUp onClick={() => { sorting("city") }}/> :<BsSortAlphaDown onClick={() => { sorting("city") }}/>}
                      </div>
                    </th>
                    <th>Gender</th>
                    <th> Edit </th>
                    <th>Delete </th>
                  </tr>
                </thead>
              <tbody className='table-body'>
                {tableRows}
            </tbody>
          </Table>
          <div><Pagination size="sm">{items}</Pagination></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default List;

