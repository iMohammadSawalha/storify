import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Form.css';
 
function Add(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   function handleShow() {
    setShow(true)
  };
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [categ, setCateg] = useState('');
  const [price, setPrice] = useState('');
  const [curr, setCurr] = useState('');
  const [status, setStatus] = useState('');
  const changeStatus=(event)=>{
       if(event.target.checked){
        setStatus('active')
       }else{
        setStatus('not active')
       }
  }
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeDesc = (event) => {
    setDesc(event.target.value);
  };
  const changeCateg = (event) => {
    setCateg(event.target.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  const changeCurr = (event) => {
    setCurr(event.target.value);
  };
  const transferValue = (event) => {
    event.preventDefault();
    //if no values entered:
    if(name===''||desc===''||categ===''||price===''){
      alert('PLEASE ENTER VALUES');
    }
   else{ const val = {
      name,
      desc,
      categ,
      price,
      curr,
      status
    };
    props.func(val);
    clearState();}
  };
  
  const clearState = () => {
    setName('');
    setDesc('');
    setCateg('');
    setPrice('');
    setCurr('');
    setStatus('');
    setShow(false)
  };
  return (
    <>
      <Button  onClick={handleShow} className='btn btn-primary bttn'>
        + Add Product
      </Button>
      <Modal
        show={show}
        onHide={clearState}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='formBody'> 
     <form className='form-style'>
       <label className='Labels'> Product title:</label>
       <input value={name} onChange={changeName} name='title' type="text" id="title" placeholder='Add Title'/>
       
       <div className='flex'></div>
       <label className='descLabel'> Describtion:</label>
       <textarea value={desc} onChange={changeDesc} name="desc" id="desc" placeholder='Type here'></textarea>

       <div className='flex'></div>
        <label htmlFor="cat-select" className='Labels'>Category:</label>
        <select name="categ" id="categ" value={categ} onChange={changeCateg}>
            <option value="">Select</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
            <option value="hime">Home</option>
            <option value="beauty">Beauty</option>
       </select>

       <div className='flex'></div>
        <label className='Labels'> price:</label>
        <span>
        <input  value={price} onChange={changePrice} type="text" name="price" id="price"/>
        <select name="currency" id="currency" value={curr} onChange={changeCurr}>
            <option value="usd">$</option>
            <option value="nis">₪</option>
            <option value="nis">€</option>
            <option value="jds">£</option>
            <option value="jds">¥</option>
       </select>
       </span>
        <div className='flex'></div>
        <label id='check'> 
        <input type="checkBox" value ={status}onChange={changeStatus}/>
        Publish On Site </label>
        <div className='flex'></div>
     </form>        
     </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close

          </Button>
          <Button variant="primary" onClick={transferValue}>Submit item</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;