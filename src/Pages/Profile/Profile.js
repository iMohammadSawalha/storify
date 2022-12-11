import "./Profile.css"
import React, { useState } from 'react';

const Profile = () => {

  const [picture, setPicture] = useState('https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=612x612&w=0&h=Ov2YWXw93vRJNKFtkoFjnVzjy_22VcLLXZIcAO25As4=')
  const [updatedpicture, setUpdatedpicture] = useState(picture);
  const handleChange = (event) => {
    setPicture(URL.createObjectURL(event.target.files[0]));
  }
  const [name, setName] = useState('Mohammed');
  const [updatedname, setUpdatedname] = useState(name);
  const handleChange1 = (event1) => {
    setName(event1.target.value);
  };
  const [phone, setPhone] = useState('+(970)---------');
  const [updatedphone, setUpdatedphone] = useState(phone);
  const handleChange2 = (event2) => {
    setPhone(event2.target.value);
  };
  const [email, setEmail] = useState('Mohammed@info.com');
  const [updatedemail, setUpdatedemail] = useState(email);
  const handleChange3 = (event3) => {
    setEmail(event3.target.value);
  };
  const handleClick = () => {
    setUpdatedname(name);
    setUpdatedphone(phone);
    setUpdatedemail(email);
    setUpdatedpicture(picture);
  };

  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-6 ">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5" id="photo_and_its_components"><img className="rounded-circle mt-3" alt=""
                src={updatedpicture} />
                <span><input onChange={handleChange} type="file" id="picture1" accept="image/*" /></span>
                <span className="font-weight-bold" id="fname"  >{updatedname}</span>
                <span className="text-black-50" id="email">{updatedemail}</span>
                <span className="text-black-50" id="number">{updatedphone}</span>
              </div>
            </div>

            <div className="col-12 col-md-9 col-lg-6 ">
              <div className="p-3 py-5">

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 id='titlecol'>Profile Settings</h4>
                </div>
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Name</label><input type="text" className="form-control" id="firstbox" placeholder="Mohammed" onChange={handleChange1} value={name} /></div>
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Surname</label><input type="text" className="form-control" id="secondbox" placeholder="AbuZahra" /></div>
                </div>

                <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Mobile Number</label><input type="text" className="form-control" id="thirdbox" placeholder="(+970)" onChange={handleChange2} value={phone} /></div>
                <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Email </label><input type="text" className="form-control" id="fourthbox" placeholder="Mohammed@info.com" onChange={handleChange3} value={email} /></div>

                <div className="row">
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Date of Birth</label><input type="text" className="form-control" id="fifthbox" placeholder="dd/dd/yyyy" /></div>
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Password</label><input type="text" className="form-control" id="sixthbox" placeholder="*********" /></div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Country</label><input type="text" className="form-control" id="seventhbox" placeholder="Palestine" /></div>
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">City</label><input type="text" className="form-control" id="eighthbox" placeholder="Nablus" />
                  </div>
                </div>

                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" onClick={handleClick}>Save</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;            
