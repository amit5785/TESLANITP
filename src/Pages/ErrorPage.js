import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css'



const ErrorPage=()=>{
  return (
    <div className="main-Error-page-container">
      <div className="Error-page-container">
        <h1>No Such Page Exits :)</h1>
        <form className="commingsoon" >
          <Link to='/' className="homePageRef">
           <button type='button'>Go To Home</button>
          </Link>
        </form>
      </div>
    </div>);
}

export default ErrorPage;