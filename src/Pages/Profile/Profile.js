import "./Profile.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccountCircleOutlined } from "@mui/icons-material";

const Profile = () => {

const [picture,setPicture] = useState('')
const changePicture = (event) =>
{
  setPicture(event.target.value);
}
const [fname,setFname]=useState('Mohammed')
const changeName= (event) =>
{
  setFname(event.target.value)
}
  return (
    <>
      <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 ">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-3"
              width="150px"
              src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=612x612&w=0&h=Ov2YWXw93vRJNKFtkoFjnVzjy_22VcLLXZIcAO25As4="  />
              <input  value={picture} onChange={changePicture} type="file" id="picture1" accept="image/*"/>
              <span className="font-weight-bold">Mohammed</span>
              <span className="text-black-50">Mohammed@info.com</span>
              <span className="text-black-50">+(970)---------</span>
            </div>
          </div>

          <div className="col-md-9 ">
            <div className="p-3 py-5">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row">
                <div className="col-md-9"><label className="labels">Name</label><input type="text" className="form-control" placeholder="Mohammed" /></div>
                <div className="col-md-9"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="AbuZahra" /></div>
              </div>

              <div className="col-md-9"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="(+970)" /></div>
              <div className="col-md-9"><label className="labels">Email </label><input type="text" className="form-control" placeholder="Mohammed@info.com" /></div>

              <div className="row">
                <div className="col-md-9"><label className="labels">Date of Birth</label><input type="text" className="form-control" placeholder="dd/dd/yyyy" /></div>
                <div className="col-md-9"><label className="labels">Password</label><input type="text" className="form-control" placeholder="*********" /></div>
              </div>

              <div className="row">
                <div className="col-md-9"><label className="labels">Country</label><input type="text" className="form-control" placeholder="Palestine" /></div>
                <div className="col-md-9"><label className="labels">City</label><input type="text" className="form-control" placeholder="Nablus" />
                </div>
              </div>

              <div className="mt-5 text-center"><Link to="/"><button  className="btn btn-primary profile-button" type="submit">Home</button></Link></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profile;