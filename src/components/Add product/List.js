//import Table from 'react-bootstrap/Table';
import { Card, Table } from 'react-bootstrap';
import Add from './PopUp';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import './List.css';
import jsonData from './data.json';
import { BsFillBackspaceFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import EditRow from './EditRow';

function List() {
  const [editFormData, setEditFormData] = useState({
    name: "",
    desc: "",
    categ: "",
    price: "",
    curr: "",
    status: "",
  })
  const [EditproDataId, setEditproDataId] = useState(null);
  //delete row function:
  const deleteHandler = (i) => {
    let newDataArr = [...proData]
    newDataArr.splice(i, 1)
    setproData(newDataArr)
  }

  const [search, setSearch] = useState("");
  const [proData, setproData] = useState(jsonData);
  //edit row function:
  const handleEditFromSubmit = (event) => {
    event.preventDefault();
    const editedproData = {
      id: EditproDataId,
      name: editFormData.name,
      desc: editFormData.desc,
      categ: editFormData.categ,
      price: editFormData.price,
      curr: editFormData.curr,
      status: editFormData.status
    }
    const newproData = [...proData]
    const index = proData.findIndex((proData) => proData.id === EditproDataId);
    newproData[index] = editedproData;
    setproData(newproData);
    setEditproDataId(null);
  }
  //cancel the edit :
  const handleCancelClick = () => {
    setEditproDataId(null);
  }
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }
  //save the edit :
  const handleEditClick = (event, proData) => {
    event.preventDefault();

    setEditproDataId(proData.id);
    const formValues = {
      name: proData.name,
      desc: proData.desc,
      categ: proData.categ,
      price: proData.price,
      curr: proData.curr,
      status: proData.status
    }

    setEditFormData(formValues)
  };
  const tableRows = proData.filter((item) => {
    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
  }).map((info, i) => {
    return (

      EditproDataId === proData.id ? (<EditRow editForm={editFormData} handleEditForm={handleEditFormChange} handleCancle={handleCancelClick} handleEditFormSubmit={handleEditFromSubmit} />) :
       
       <tr key={i}>
          <td>{info.id}</td>
          <td>{info.pic}</td>
          <td>{info.name}</td>
          <td>{info.desc}</td>
          <td>{info.categ}</td>
          <td>{info.price}</td>
          <td>{info.status}</td>
          <td><BsFillPenFill onClick={(event) => handleEditClick(event, proData)}/></td>
          <td><BsFillBackspaceFill onClick={() => deleteHandler(i)} /></td>
          
        </tr>

    );
  });
  const addRows = (data) => {
    const totalProducts = proData.length;
    data.id = totalProducts + 1;
    const updatedproData = [...proData];
    updatedproData.push(data);
    setproData(updatedproData);
  };
  // <Button  id="resetBtn"> Reset</Button>
  return (
    <>

      <div id="protitle">
        <h1 > Product List</h1>
        <p id="t2"> Dashbourd --- Add Product</p>
      </div>

      <div className='list' >
        <div className='listbar'>
          <Add func={addRows} />
          <Form id='search'>
            <InputGroup className='my-3'>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search product ...'
              />
            </InputGroup>
          </Form>
          <Button id="resetBtn"> Reset</Button>
        </div>
        <div className='space'></div>
        <Card>
        <Table striped bordered hover className='tab'>
          <thead>
            <tr>
              <th>#</th>
              <th>pic</th>
              <th>Product</th>
              <th>Describtion</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <br />
          <tbody className='tab'>{tableRows} </tbody>
        </Table>
        </Card>
      </div>
    </>
  );
}

export default List;