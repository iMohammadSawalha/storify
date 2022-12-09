import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import './PopupC.css'

const PopupCu =(props)=>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [name,setname]=useState('');
    const [address,setaddress]=useState('');
    const [phon,setphon]=useState('');
    const [city,setcity]=useState('');
    const [email,setemail]=useState('');
    const [gender,setgender]=useState('');
    const [password,setpassword]=useState("***************");

    const changeCity = (event) => {
   setcity(event.target.value);
    };
    

    const transferValue = (event) => {
      event.preventDefault();
      if (name===""||email===""||address===""||phon===""||city===""||gender===""||password==="") {
        alert("Please enter the information");
      }
      else{
        const val = {
          name,
          email,
          address,
          phon,
          city,
          gender,
          password
        };
        props.func(val);
        clearState();
      }
      
    };
    
    const clearState = () => {
      setname('');
      setaddress('');
      setphon('');
      setcity('');
      setemail('');
      setgender('');
      setpassword('');
      
      setShow(false);
    };

    const generatePassword = () => {
      // Create a random password
      const randomPassword =
        Math.random().toString(18).slice(1) ;
    
      // Set the generated password as state
      setpassword(randomPassword);
    
      // Copy the password to the clipboard
     navigator.clipboard.writeText(randomPassword);
    };
return(
    <>
    <Button  variant="primary" id ="addBTN" onClick={handleShow} >
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
     <input value={name} onChange={(e)=>setname(e.target.value)} name='name' type="text" id="name" placeholder='Add Name'/>
     <div className='flex'></div>

    <label className='emaill'> Email :</label>
     <input value={email} onChange={(e)=>setemail(e.target.value)} name='email' type="text" id="email" placeholder='someone@something.com'/>
     <div className='flex'></div>
 
<label className='password'> Password :</label>
<div className='pass'>
     <input value={password} onChange={(e)=>setpassword(e.target.value)} name='password' type="text" id="password" placeholder='Type here'/>

    <Button id="gen-pass" variant='outline-secondary'onClick={generatePassword}>Generate</Button>
    </div>
    
     <label className='addres'> Address :</label>
     <input value={address} onChange={(e)=>setaddress(e.target.value)} name="addres" id="address" placeholder='Type here'/>

     <div className='flex'></div>
     <label className='phone'> Phone Number :</label>
     <input value={phon} onChange={(e)=>setphon(e.target.value)} name="phone" id="phonen" placeholder='Type here'/>

     <div className='flex'></div>
     <label className='city'> City :</label>
     <input value={city} onChange={changeCity} name="city" id="citty" />

    
      
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
        <Button variant="secondary" onClick={clearState}>
          Close
        </Button>
        <Button onClick={transferValue} variant="primary">Save </Button>
      </Modal.Footer>
    </Modal>

  </>
)


}

export default PopupCu