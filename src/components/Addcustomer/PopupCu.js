import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import './PopupC.css'

const PopupCu =(props)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,settitle]=useState('');
    const [address,setaddress]=useState('');
    const [pho,setpho]=useState('');
    const [city,setcity]=useState('');
    const [email,setemail]=useState('');
    const [gender,setgender]=useState('');
    const [interset,setinterset]=useState('');

    const changeCity = (event) => {
   setcity(event.target.value);
    };
    const changeinterset = (event) => {
      setinterset(event.target.value);
       };

    const transferValue = (event) => {
      event.preventDefault();
      const val = {
        title,
        email,
        address,
        pho,
        city,
        gender,
        interset
      };
      props.func(val);
      clearState();
    };
    
    const clearState = () => {
      settitle('');
      setaddress('');
      setpho('');
      setcity('');
      setemail('');
      setgender('');
      setinterset('');
      

    };

return(
    <>
    <Button  variant="primary" id ="add" onClick={handleShow} >
    Add Customer +</Button>

    <Modal className='form'
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Customer Details:</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bodyM' >
     
   <form className='form-style'>
     <label className='lab'> Username :</label>
     <input value={title} onChange={(e)=>settitle(e.target.value)} name='title' type="text" id="title" placeholder='Add Name'/>
     <div className='flex'></div>
    <label className='emaill'> E-mail :</label>
     <input value={email} onChange={(e)=>setemail(e.target.value)} name='email' type="text" id="email" placeholder='ex:myname@example.com'/>
     <div className='flex'></div>
     <label className='addres'> Address :</label>
     <input value={address} onChange={(e)=>setaddress(e.target.value)} name="addres" id="address" placeholder='Type here'/>

     <div className='flex'></div>
     <label className='phone'> Phone Number :</label>
     <input value={pho} onChange={(e)=>setpho(e.target.value)} name="phone" id="phonen" placeholder='Type here'/>

     <div className='flex'></div>
     <label className='city'> City :</label>
     <input value={city} onChange={changeCity} name="city" id="citty" />

    
     <div className='flex'></div>
      <label htmlFor="interest-select" className='lab'> Interest :</label>
      <select value= {interset} name="rest" id="rest" onChange={changeinterset}>
      <option >select</option>
          <option value="Sport">Sport</option>
          <option value="Clothing">Clothing</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessorie">Accessorie</option>
          <option value="Home & Pets">Home & Pets</option>
          <option value="Beauty">Beauty</option>
     </select>
     <div className='flex'></div>
      <label htmlFor="gender-select" className='lab' > Gender :</label>
      <select value={gender} name="rest" id="rest"  onChange={(e)=>setgender(e.target.value)}>
      <option >select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>

    

     <div className='flex'></div>
   </form>        
 
  

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={transferValue} variant="primary">Save </Button>
      </Modal.Footer>
    </Modal>

  </>
)


}

export default PopupCu