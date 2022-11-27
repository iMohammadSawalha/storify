import { useState } from 'react'
import './TableStyle.css'
import { BsFillBackspaceFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import PopupCu from './PopupCu';
import jsonData from './data.json';
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Table =()=>{
    const [customerData, setcustomerData] = useState(jsonData);
    const [search, setSearch] = useState('');
 

    const tableRows = customerData.filter((item)=>{
      return search.toLocaleLowerCase()===""? item :item.title.toLocaleLowerCase().includes(search)
    }).map((info,ind) => {
      return (
        <tr key={ind}>
            
          <td>{ind+1}</td>
          <td>{info.title}</td>
          <td>{info.email}</td>
          <td>{info.city}</td>
          <td>{info.address}</td>
          <td>{info.gender}</td>
          <td>{info.interset}</td>
          <td><BsFillBackspaceFill onClick={()=>delethandle(ind)} /></td>
          <td><BsFillPenFill onClick={()=>edithandle()} /></td>
        </tr>
      );
 
    }
    
    );
    
    const addRows = (data) => {
      
      const updatedcustomerData = [...customerData];
      updatedcustomerData.push(data);
      setcustomerData(updatedcustomerData);
    };
    let delethandle =(i)=>{
        let newdataArr=[...customerData]
        newdataArr.splice(i,1)
        setcustomerData(newdataArr)
     }
     
     let edithandle =()=>{
      console.log("hi")
   }

   const onSorterDow =(e)=>{
    
    const sortedData=[...customerData]
      sortedData.sort((a,b)=>a.title < b.title ? 1 : -1)
    setcustomerData(sortedData);
   };
   const onSorterUp =(e)=>{
   
    const sortedData=[...customerData]
      sortedData.sort((a,b)=>a.title < b.title ? -1 : 1)
    setcustomerData(sortedData);
   };
  
    return (
        
      <div className='all'>

        
        <h2 >Customer List</h2>
        <p>Dashbourd-- Add Customer</p>
        
       <div className='Customer'> 
       <div className='bar'>
       <PopupCu func={addRows} />
       <Form id='search'>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search  ...'
            />
          </InputGroup>
        </Form>
          </div>
    
         <table className="styled-table"  >
           <thead className="table-header">
            <tr >
              <th>Sr.NO</th>
              <th>
                Name<BiChevronUp onClick={()=>onSorterUp()}/>< BiChevronDown onClick={()=>onSorterDow()}/> </th>
              <th>email</th>
              <th>City</th>
              <th>addres</th>
              <th>Gender</th>
              <th>interest</th>
              <th>  </th>
              <th>  </th>
            </tr>
          </thead>
          <br/>
          <tbody>{tableRows}</tbody>
        </table>
        </div>
        </div>
    );
 }
 export default Table