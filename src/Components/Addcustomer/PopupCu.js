import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './PopupC.css'

const PopupCu =(props)=>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [name,setname]=useState('');
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
      if (name===""||email===""||phon===""||city===""||gender===""||password==="") {
        alert("Please enter the information");
      }
      else{
        const val = {
          name,
          email,
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
      setphon('');
      setcity('');
      setemail('');
      setgender('');
      setpassword('');
      setShow(false);
    };

    const generatePassword = () => {
     var length = 12;
      var result = '';
      var characters = 'ABCDEFGHIJKLMNO_PQRSTUVWXY_Zabcdefghijklm_nopqrstuvwxyz0123_456789_12345_67890';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      setpassword(result);
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
     <input value={name} className='form-control' onChange={(e)=>setname(e.target.value)} name='name' type="text" id="name" placeholder='Add Name'/>
     <div className='flex'></div>

    <label className='emaill'> Email :</label>
     <input value={email} className='form-control' onChange={(e)=>setemail(e.target.value)} name='email' type="text" id="email" placeholder='someone@something.com'/>
     <div className='flex'></div>

     <div className="form-field mb-3 customer">
     <label htmlFor="user-pass" className='password'> Password :</label>
     <div className='input-group mb-3 pass'>
     <input className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)} name='password' type="text" id="password" placeholder='Type here'/>
    
     <button id="gen-pass" className="btn btn-outline-secondary" type="button" onClick={generatePassword}>Generate</button>
     </div>
    </div>
     <label className='phone'> Phone Number :</label>
     <input value={phon} className='form-control' onChange={(e)=>setphon(e.target.value)} name="phone" id="phone" placeholder='Type here'/>

     <div className='flex'></div>
     <label className='city'> City :</label>
     <input value={city} className='form-control' onChange={changeCity} placeholder='Type here' name="city" id="city" />
     <div className='flex'></div>
      <label htmlFor="gender-select" className='lab' > Gender :</label>
      <select value={gender} className='form-control' name="rest" id="gender"  onChange={(e)=>setgender(e.target.value)}>
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