import React, { useState } from "react";
import "./Productscss.css";

import Productitemsref from "./Allproducts/Productitemsref";
import Search from "./Search";

function Products() {
  // it handle the  user search onchange value 
  const [search, setsearch] = useState("");
  const handlesearch = (e) => {
    setsearch(e.target.value);
  };
  let divstyle = {
    height: "40px",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: "10px",
  };
  let handlehide = () => {
    document.getElementById("hide").style.maxHeight = "110px";
    document.getElementById("hide").style.transition = "all 2s ease";
  };
  let handleshow = () => {
    document.getElementById("hide").style.maxHeight = "200vh";
    document.getElementById("hide").style.transition = "all 2s ease";
  };

  return (
    <>
      <div className="container-fluid mt-5 border shadow">
        <button className="btn btn-danger mx-2 px-4 mb-2" onClick={handlehide}>
          <i className="fas fa-eye-slash"></i>{" "}
        </button>
        <button className="btn btn-primary mb-2 px-4" onClick={handleshow}>
          <i className="fas fa-eye"></i>
        </button>
        <div className="row">
          <div className="col-md-2" id="hide">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Random Search  "
              aria-label="Search"
              value={search}
              //here onchange event occurs 
              onChange={handlesearch}
            />
            <div style={divstyle} className="mt-4">
              <p className="text-center pt-2">CATEGORIES</p>
            </div>
            <ul>
              <li>&#10063; Laptops[84]</li>
              <li>&#10063; Eletronics[200]</li>
              <li> &#10063; Fashion[120]</li>
              <li> &#10063; Ear-Phone[12]</li>
              <li>&#10063; bluetooth[232]</li>
              <li> &#10063; Beauty[132]</li>
              <li> &#10063; jeans[32]</li>
              <li>&#10063; jewellery[312]</li>
              <li>&#10063; TV[112]</li>
            </ul>
            <div style={divstyle}>
              <p className="text-center pt-2">CATEGORIES TYPE</p>
            </div>
            <ul>
              <li> &#10070; Boys[284]</li>
              <li> &#10070; Woman[220]</li>
              <li> &#10070; Kids[220]</li>
              <li> &#10070; Girls[320]</li>
            </ul>
            <div style={divstyle}>
              <p className="text-center pt-2">FILTER BY PRICE </p>
            </div>
            <input type="checkbox" className="mt-2" /> Rs.1000 - Rs. 2000 <br />
            <input type="checkbox" /> Rs.3000 - Rs. 2500
            <br />
            <input type="checkbox" /> Rs.8000 - Rs. 6000
            <br />
            <input type="checkbox" /> Rs.1000 - Rs. 800
            <br />
            <input type="checkbox" /> Rs.800 - Rs. 600
            <br />
            <div style={divstyle}>
              <p className="text-center pt-2">SIZE</p>
            </div>
            <button className="btn btn-secondary m-2">M</button>
            <button className="btn btn-secondary  m-2 px-3">L</button>
            <button className="btn btn-secondary m-2 px-3">X</button>
            <button className="btn btn-secondary m-2">XL</button>
            <button className="btn btn-secondary m-2 px-3">S</button>
            <button className="btn btn-secondary m-2">38</button>
            <button className="btn btn-secondary m-2">32</button>
            <button className="btn btn-secondary m-2">35</button>
          </div>
          <div className="col-md-10">
            {/* Here i use condition if input filds is empty it don't render anything if input having any value it render  <Search productlist={search} component and it having  data that send as props */}
            {search === "" ? null : <Search productlist={search} />}
            {/* here     <Productitemsref /> component render*/}
            <Productitemsref />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
