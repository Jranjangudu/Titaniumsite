import React from "react";
import appstore from "./asserts/banners/app-store.png";
import playstore from "./asserts/banners/menu.png";
import Developer from "./asserts/banners/Mr.Developer.jpg";
import { Link } from "react-scroll";
function Footers() {
  return (
    <>
      <Link
        to="scrolltop"
        smooth={true}
        duration={1000}
        className="btn btn-dark container-fluid"
        style={{ backgroundColor: "black" }}
        data-toggle="tooltip"
        data-placement="top"
        title="go to top"
      >
        GO TO TOP <i className="far fa-arrow-alt-circle-up"></i>
      </Link>
      <div className="container-fluid bg-dark ">
        <div className="row">
          <div className="col-sm-3 ">
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title text-info">
                  &#10028; Download our App
                </h4>
                <p className="card-text text-secondary">
                  &#8627; Download App for Windows Mac and Android ! :)
                </p>
                <img src={appstore} alt="company logo" width="90px" />
                <img src={playstore} alt="company logo" width="90px" />

                <div className="mt-5">
                  <small className="card-text text-white ">
                    <em>
                      &#10070; Copyright &copy;2021 || Desigining by Mr.gudu{" "}
                    </em>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title text-danger "> &#9885; About US</h4>
                <p className="card-text mt-3">
                  <a href="#">
                    <i className="fab fa-2x fa-linkedin  px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-github px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-twitter px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-instagram px-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-2x fa-facebook px-2"></i>
                  </a>
                </p>
                <h5 className="card-text text-info">
                  Location <i className="fas fa-map-marker-alt"></i>
                </h5>
                <small>
                  <a className="text-secondary nav-item">
                    <i className="fas fa-globe"></i> &#8627; India Odisha
                    jagatsinghpur !
                  </a>
                </small>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title text-info">
                  &#9819; About Developer :)
                </h4>
                <em className="text-white"> &#8627; Created by Mr.gudu !</em>
                <div className="text-center mt-2">
                  <img
                    className="rounded-circle border border-danger mr-5"
                    src={Developer}
                    alt="developer logo"
                    width="80px"
                    height="80px"
                  />
                </div>
                <div className="text-center">
                  <strong className="text-primary">
                    &#9763; Mr.gudu (Web Developer)
                  </strong>
                </div>
                <p className="text-white">
                  &#9990; Contact &#58; <a href="#">+91 8114994487</a>
                </p>
                <p className="text-white">
                  &#9993; Email id &#58;{" "}
                  <a href="#"> 9114338163gudu@gmail.com </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3" id="scrollbottom">
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title text-success">&#10148; Feedback !</h4>
                <small className="card-text text-secondary">
                  &#8627; If any Issue Occure during using this site then
                  contact here ! 👇
                </small>
                <label className="text-white">
                  Mobile:{" "}
                  <input
                    className="form-control mr-sm-2"
                    type="num"
                    placeholder="Number"
                    aria-label="Search"
                  />
                </label>
                <label className="text-white">
                  Email:
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Email id"
                    aria-label="Search"
                  />
                </label>
                <br />
                <button
                  className="btn btn-outline-info my-2 my-sm-0"
                  type="submit"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="send mail"
                >
                  &#10148;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footers;
