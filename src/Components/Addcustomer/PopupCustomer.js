import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Popup.css';

const PopupCustomer =(props)=>{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [name,setname]=useState('');
    const [phon,setphon]=useState('');
    const [city,setcity]=useState('');
    const [email,setemail]=useState('');
    const [gender,setgender]=useState('');
    const [password,setpassword]=useState("");
    const [error,setError]=useState(false)

    const changeCity = (event) => {
   setcity(event.target.value);
    };
    

    const transferValue = (event) => {
      event.preventDefault();
      if (name===""||email===""||phon===""||city===""||gender===""||password==="") {
        setError(true)
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
      setError(false)
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
     {error&&name.length<=0?
               <label className='error'> Please enter the name</label>:""}
     <div className='flex'></div>


    <label className='emaill'> Email :</label>
     <input value={email} className='form-control' onChange={(e)=>setemail(e.target.value)} name='email' type="text" id="email" placeholder='someone@something.com'/>
     {error&&email.length<=0?
               <label className='error'> Email field is required</label>:""}
     <div className='flex'></div>
    

     <label htmlFor="user-pass" className='password'> Password :</label>
     <div className='input-group mb-3 pass'>
     <input className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)} name='password' type="text" id="password" placeholder='click on Generate'/>
     <button id="gen-pass" className="btn btn-outline-secondary" type="button" onClick={generatePassword}>Generate</button>
                {error&&password.length<=0?
               <label id='errorp'> This field is required</label>:""}
       </div>


     <label className='phone'> Phone Number :</label>
     <input value={phon} className='form-control' onChange={(e)=>setphon(e.target.value)} name="phone" id="phone" placeholder='Type here'/>
     {error&&phon.length<=0?
               <label className='error'> Phone number can't be Empty</label>:""}

               
     <div className='flex'></div>
     <label className='city'> City :</label>
     <input value={city} className='form-control' onChange={changeCity} placeholder='Type here' name="city" id="city" />
     {error&&city.length<=0?
               <label className='error'> This field is required</label>:""}


     <div className='flex'></div>
      <label htmlFor="gender-select" className='lab' > Gender :</label>
      <select value={gender} className='form-control' name="rest" id="gender"  onChange={(e)=>setgender(e.target.value)}>
      <option >select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
          {error&&gender.length<=0?
               <label className='error'> Please select the gender</label>:""}
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

export default PopupCustomer