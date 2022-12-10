import "./Profile.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {

  const [picture, setPicture] = useState('')
  const changePicture = (event) => {
    setPicture(event.target.value);
  }
  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-6 ">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5" id="photo_and_its_components"><img className="rounded-circle mt-3" alt=""
                src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=612x612&w=0&h=Ov2YWXw93vRJNKFtkoFjnVzjy_22VcLLXZIcAO25As4=" />
                <span><input value={picture} onChange={changePicture} type="file" id="picture1" accept="image/*" /></span>
                <span className="font-weight-bold" id="fname">Mohammed</span>
                <span className="text-black-50" id="email">Mohammed@info.com</span>
                <span className="text-black-50" id="number">+(970)---------</span>
              </div>
            </div>

            <div className="col-12 col-md-9 col-lg-6 ">
              <div className="p-3 py-5">

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 id='titlecol'>Profile Settings</h4>
                </div>
                <div className="row">
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Name</label><input type="text" className="form-control" id="firstbox" placeholder="Mohammed" /></div>
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Surname</label><input type="text" className="form-control" id="secondbox" placeholder="AbuZahra" /></div>
                </div>

                <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Mobile Number</label><input type="text" className="form-control" id="thirdbox" placeholder="(+970)" /></div>
                <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Email </label><input type="text" className="form-control" id="fourthbox" placeholder="Mohammed@info.com" /></div>

                <div className="row">
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Date of Birth</label><input type="text" className="form-control" id="fifthbox" placeholder="dd/dd/yyyy" /></div>
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Password</label><input type="text" className="form-control" id="sixthbox" placeholder="*********" /></div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">Country</label><input type="text" className="form-control" id="seventhbox" placeholder="Palestine" /></div>
                  <div className="col-12 col-md-9 col-lg-6"><label className="labelscol">City</label><input type="text" className="form-control" id="eighthbox" placeholder="Nablus" />
                  </div>
                </div>

                <div className="mt-5 text-center"><Link to="/"><button className="btn btn-primary profile-button" type="submit">Home</button></Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;