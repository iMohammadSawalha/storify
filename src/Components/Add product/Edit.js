import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link , useNavigate} from "react-router-dom";
import './Form.css';
import './AddBtn.css';

function Edit(){
    const [name, setName] = useState('');
    let history=useNavigate();
    var index=proData.map(function(e){
        return e.id
    
    }).indexOf(id);
    const changeName = (event) => {
        setName(event.target.value);
      };
    const transferValue = (event) => {
        event.preventDefault();
        let a =proData[index];
        
        a.name=name;
        props.func(index);
        clearState();
      };
      
      const clearState = () => {
        setName('');
        setDesc('');
        setCateg('');
        setPrice('');
        setCurr('');
        setStatus('');
      };
      useEffect( ()=>{},[]    )
    return(
        <div>

          <form className='form-style'>
       <label className='lab'> Product title:</label>
       <input value={name} onChange={changeName} name='title' type="text" id="title" placeholder='Add Title'/>
       
       <div className='flex'></div>
       <label className='labdesc'> Describtion:</label>
       <textarea value={desc} onChange={changeDesc} name="desc" id="desc" placeholder='Type here'></textarea>
       
       <div className='flex'></div>
        <label className='lab'> Picture:</label>
        <input  value={pic} onChange={changePic} type="file" name="pic" id="pic" accept="image/*"/>

       <div className='flex'></div>
        <label for="cat-select" className='lab'>Category:</label>
        <select name="categ" id="categ" value={categ} onChange={changeCateg}>
            <option value="">Select</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
            <option value="hime">Home</option>
            <option value="beauty">Beauty</option>
       </select>

       <div className='flex'></div>
        <label className='lab'> price:</label>
        <span>
        <input  value={price} onChange={changePrice} type="number" name="price" id="price"/>
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
        <input type="checkBox" value ={status} onChange={changeStatus}/>
        Publish On Site </label>
        <div className='flex'></div>
     </form>        
     <Button variant="primary" onClick={transferValue}>Update item</Button>

        </div>
    )
}
export default Edit;