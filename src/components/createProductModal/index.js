import React, { useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import axios from "axios";
import M, { Modal } from "materialize-css";
import API from "../../api/admin-routes";
import dotenv from "dotenv";
import "./style.css"
dotenv.config();

function CreateItem() {
 

  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems);
  }, []);
  return (

<div className="center">

    <a className='dropdown-trigger btn-large adminHamberger' href='#' data-target='dropdown2'><i className="material-icons">menu</i></a>
    <ul id='dropdown2' className='dropdown-content'>
      <li><a href="#!"onClick={()=> {localStorage.clear(); window.location.reload()}}>LOGOUT</a></li>
      <li><Link to="./admin" 
          className="btn btn-large white"
          style={{marginRight: "0px"}}
          id="loginBtn">AddItem</Link></li>
    </ul>

    </div>
  );
}

export default CreateItem;
