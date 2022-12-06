import React, { Fragment, useState } from 'react';
import Add from './PopUp';
import jsonData from './data.json';
import './List.css';
import ReadOnlyRow from './ReadOnlyEditValues';
import EditRow from './EditRow';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Table } from 'react-bootstrap';
import {TbSortAscendingLetters ,TbSortAscendingNumbers} from "react-icons/tb"

function AddProduct() {
	const [editFormData, setEditFormData] = useState({
	name: "",
    desc: "",
    categ: "",
    price: "",
    curr: "",
    status: "",
	})
    const [proData, setproData] = useState(jsonData);
	const [EditproductDataId, setEditProductDataId] = useState(null);
	const [productDataLength, setProductDataLength] = useState(proData.length + 1);
	const [search, setSearch] = useState('');
	const [order, setOrder] = useState("ASC");

    const sorting = (col) => {
		if (order === "ASC") {
			const sorted = [...proData].sort((a, b) =>
				a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
			);
			setproData(sorted);
			setOrder("DSC");
		}
		if (order === "DSC") {
			const sorted = [...proData].sort((a, b) =>
				a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
			);
			setproData(sorted);
			setOrder("ASC");
		}
	}
//delete row:
    const handleDeleteClick = (proDataId) => {
		const newProData = [...proData];

		const index = proData.findIndex((proData) => proData.id === proDataId);

		newProData.splice(index, 1);

		setproData(newProData);

	}
//save info after edit:
    const handleEditFromSubmit = (event) => {
		event.preventDefault();
		const editedProData = {
			id: EditproductDataId,
			name: editFormData.name,
			desc: editFormData.desc,
			categ: editFormData.categ,
			price: editFormData.price,
			status: editFormData.status
		}
        const newProData = [...proData]
        const index = proData.findIndex((proData) => proData.id === EditproductDataId);
        newProData[index] = editedProData;
		setproData(newProData);
		setEditProductDataId(null);
	}
// cancel the edit operation:
    const handleCancelClick = () => {
		setEditProductDataId(null);
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
    const handleEditClick = (event, proData) => {
		event.preventDefault();

		setEditProductDataId(proData.id);
		const formValues = {
			name: proData.name,
			desc: proData.desc,
			categ: proData.categ,
			price: proData.price,
			status:proData.status
		}
        setEditFormData(formValues)
	};

    const tableRows = proData.filter((item) =>
     { return (search.toLowerCase() === '') || (search.toUpperCase() === '') ? item :
      (item.name.toLowerCase().includes(search)) || (item.name.toUpperCase().includes(search)) }).map((proData) => {
		return (
			<>
				<Fragment>
					{EditproductDataId === proData.id ? (<EditRow editFormData={editFormData}
                     handleEditFormChange={handleEditFormChange} 
                     handleCancelClick={handleCancelClick}
                      handleEditFromSubmit={handleEditFromSubmit} />) : 
                      (<ReadOnlyRow proData={proData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
				</Fragment>
			</>
		);
	}); //tableRows

    const addRows = (data) => {
		setProductDataLength(productDataLength + 1);
		data.id = productDataLength;
		const updatedProductData = [...proData];
		updatedProductData.push(data);
		setproData(updatedProductData);
	}; //addRows


    return (
        <>

        <div id="pageTitle">
          <h1> Product List</h1>
          <p id="txt"> Dashbourd --- Add Product</p>
        </div>

        <div className='list' >
        <section className='listbar'>
          <div className='container-fluid Btns' >
			<div className='row'>
				
				<div className='col lg-4 md-4  sm-4 addPro'>
            <Add func={addRows} />
			</div>
			
			<div className='col lg-8 md-8 sm-8 searchForm'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search product..."
              className="me-2"
              aria-label="Search"
			  onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="primary">Search</Button>
          </Form>
			</div>

		</div>
        </div>
		</section>
          <div className='space'></div>
		  
          <Table striped bordered hover className='tab'>
            <thead>
              <tr>
                <th>#</th>
                <th>pic</th>
                <th>Product  <TbSortAscendingLetters onClick={() => { sorting("name") }}/> </th>
                <th>Describtion <TbSortAscendingLetters onClick={() => { sorting("desc") }}/></th>
                <th>Category <TbSortAscendingLetters onClick={() => { sorting("categ") }}/></th>
                <th>Price <TbSortAscendingNumbers onClick={() => { sorting("price") }}/></th>
                <th>Status <TbSortAscendingLetters onClick={() => { sorting("status") }}/></th>
              </tr>
            </thead>
            <br />
            <tbody className='tab'>{tableRows} </tbody>
          </Table>













































        </div>
      </>
	);
}
export default AddProduct;
