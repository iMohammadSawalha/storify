import Table from 'react-bootstrap/Table';
import Add from './PopUp';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'
import './List.css';
import jsonData from './data.json';
import{BiEditAlt} from "react-icons/bi";
import{AiTwotoneDelete}from "react-icons/ai";

function List() {
    const deleteHandler=(i)=>{
             let newDataArr=[...proData]
             newDataArr.splice(i,1)
             setproData(newDataArr)
    }
    const [search, setSearch] = useState(""); 
    const [proData, setproData] = useState(jsonData);

    const tableRows = proData.filter((item) => {
      return search.toLowerCase() === ''? item: item.name.toLowerCase().includes(search);
     }).map((info,i) => {
        return (
          <tr key={i}>
            <td>{info.id}</td>
            <td>{info.pic}</td>
            <td>{info.name}</td>
            <td>{info.desc}</td>
            <td>{info.categ}</td>
            <td>{info.price}</td>
            <td>{info.status}</td>
            <td><button><BiEditAlt/></button></td>
            <td><button onClick={()=>deleteHandler(i)}><AiTwotoneDelete/></button></td>
    
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
   <h id="t1"> Product List</h>
   <p id="t2"> Dashbourd --- Add Product</p>
</div>

<div className='list' >
    <div className='listbar'>
    <Add func={addRows}/>
    <Form id='search'>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search product ...'
            />
          </InputGroup>
        </Form>
        <Button  id="resetBtn"> Reset</Button>
          </div>
          <div className='space'></div>
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
      <br/>
      <tbody className='tab'>{tableRows} </tbody>
    </Table>
    
    </div>
    </>
  );
}

export default List;