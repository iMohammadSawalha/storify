import React, { Fragment, useState } from 'react';
import { Card, InputGroup, Table } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import { TbSortAscendingLetters, TbSortAscendingNumbers } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";
import jsonData from './data.json';
import EditRow from './EditRow';
import './List.css';
import Add from './PopUp';
import ReadOnlyRow from './ReadOnlyEditValues';
import Pagination from 'react-bootstrap/Pagination';

function AddProduct() {
	const [editFormData, setEditFormData] = useState({
	name: "",
	pic:"",
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
				<Fragment key={proData.id}>
					{EditproductDataId === proData.id ? (<EditRow 
					key={proData.id}
					proData={proData}
					editFormData={editFormData}
                     handleEditFormChange={handleEditFormChange} 
                     handleCancelClick={handleCancelClick}
                      handleEditFromSubmit={handleEditFromSubmit} />) : 
                      (<ReadOnlyRow key={proData.id} proData={proData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
				</Fragment>
		);
	}); //tableRows

    const addRows = (data) => {
		setProductDataLength(productDataLength + 1);
		data.id = productDataLength;
		const updatedProductData = [...proData];
		updatedProductData.push(data);
		setproData(updatedProductData);
	}; //addRows


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
		<>
			<div className='list' >
				<Card id='tableCard'>
					<Card.Header id='cardH'>
						<div className='headerCont'>
							<div className='firstCont'>
								<h1 id='productH'> Products List</h1>
								<Breadcrumb id='toDash'>
									<Breadcrumb.Item href='/dashboard'>Dashboard</Breadcrumb.Item>
									<Breadcrumb.Item active>Add Product</Breadcrumb.Item>
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
								<Add func={addRows} />
							</div>
						</div>
						<div className='space'></div>
					</Card.Header>
					<Card.Body>
						<Table className='tab'>
							<thead>
								<tr>
									<th onClick={() => { sorting("name") }}>Product  <TbSortAscendingLetters onClick={() => { sorting("name") }}/> </th>
									<th onClick={() => { sorting("desc") }}>Describtion <TbSortAscendingLetters onClick={() => { sorting("desc") }}/></th>
									<th onClick={() => { sorting("categ") }}>Category <TbSortAscendingLetters onClick={() => { sorting("categ") }}/></th>
									<th onClick={() => { sorting("price") }}>Price <TbSortAscendingNumbers onClick={() => { sorting("price") }}/></th>
									<th onClick={() => { sorting("status") }}>Status <TbSortAscendingLetters onClick={() => { sorting("status") }}/></th>
									<th>Edit</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{tableRows} 
							</tbody>
						</Table>
						<div><Pagination size="sm">{items}</Pagination></div>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}
export default AddProduct;
