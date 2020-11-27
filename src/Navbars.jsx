import React, { useState } from "react";
import "./Navbarscss.css";
import { NavLink } from "react-router-dom";
function Navbars() {
    //here i set time options ;
  let times = new Date().toLocaleTimeString();
  const [Times, setTime] = useState(times);
  const Updatetime = () => {
    let times = new Date().toLocaleTimeString();
    setTime(times);
  };
   //time interval for running time continuously ,it call Updatetime function every 1sec
  setInterval(Updatetime, 1000);
  let style;
  let handlenav = () => {
    document.getElementById("navbar").style.display = "inline-block";
    document.getElementById("navbar").style.maxWidth = "280px";
    document.getElementById("navbar").style.transition = "all 2s ease";

    style = {
      position: "absolute",
      top: "20px",
      right: "0px",
      zIndex: "10",
    };
  };
  let handletimes = () => {
    document.getElementById("navbar").style.maxWidth = "0px";
    document.getElementById("navbar").style.transition = "all 1.4s ease";
  };

  return (
    <>
      <div
        className="text-white"
        id="scrolltop"
        style={{
          backgroundColor: "#131921",
          display: "flex",
          zIndex: 800,
          justifyContent: "space-between",
        }}
      >
        <h2 className="ml-3 pt-2 conpanyname">
          <strong style={{ color: "#2371B9", zIndex: 400 }}>
            Titanium<span style={{ fontSize: "15px", color: "#fff" }}>.in</span>
          </strong>
        </h2>
        <p className="mt-3 updatetime">{Times}</p>
        <nav className="nav" id="navbar" style={style}>
          <NavLink
            exact
            activeClassName="active_class"
            to="/"
            className="nav-link ml-auto text-white  mt-3  px-4"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            to="/Product"
            className="nav-link text-white mt-3 px-4"
          >
            <span>Product</span>
          </NavLink>

          <NavLink
            exact
            activeClassName="active_class"
            to="/Services"
            className="nav-link text-white mt-3 px-4"
          >
            <span>Customer Service</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="active_class"
            to="/Contact"
            className="nav-link text-white   mt-3 px-4"
          >
            <span>Contact</span>
          </NavLink>
          <i
            className="fas fa-2x fa-times"
            id="times"
            onClick={handletimes}
          ></i>
          <a className="nav-link cartplus text-white  p-3" href="#home">
            <i
              className="fas fa-cart-plus"
              style={{ fontSize: "20px", color: "#36edf7" }}
            ></i>
          </a>

          <a className="nav-link  text-white mr-3 p-3 cartheart " href="#home">
            <i
              className="fas fa-heart"
              id="heart"
              style={{ fontSize: "22px", color: "red" }}
            ></i>
          </a>
          <form className="form-inline my-2 my-lg-0  mr-5">
            <input
              className="form-control bg-dark text-white mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
              data-toggle="tooltip"
              data-placement="bottom"
              title="product search"
            >
              Search
            </button>
          </form>
        </nav>
        <div className="usershow">
          <div style={{ display: "flex" }}>
            <a className="nav-link  text-white  p-3" href="#home">
              <i
                className="fas fa-cart-plus "
                style={{ fontSize: "18px", color: "#36edf7" }}
              ></i>
            </a>

            <a className="nav-link  text-white mr-3 p-3" href="#home">
              <i
                className="fas fa-heart "
                id="heartuser"
                style={{ fontSize: "18px", color: "red" }}
              ></i>
            </a>
          </div>
        </div>
        <i className="fas fa-2x fa-bars menu-logo" onClick={handlenav}></i>
      </div>
    </>
  );
}
export default Navbars;
