import React from "react";
import "./App.css";
function Collections() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-sm-4 w-100% h-75% shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card collection bg-dark text-white shadow p-3 mb-5 bg-white rounded">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/20/13/36/objects-731426_960_720.jpg"
              className="card-img"
              alt="man"
            />
            <div className="card-img-overlay ">
              <h3 className="card-title text-dark">Man Collection </h3>
              <p className="card-text">
                This is a Collection of Man , most of the man bye this type of
                product .. :)
              </p>
              <p className="card-text">Last updated 2 mins ago</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 w-100% h-75% shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card collection bg-dark text-white shadow p-3 mb-5 bg-white rounded">
            <img
              src="https://cdn.pixabay.com/photo/2020/04/02/05/18/beauty-4993466_960_720.jpg"
              className="card-img"
              alt="man"
            />
            <div className="card-img-overlay">
              <h3 className="card-title text-dark">Woman Collection</h3>
              <p className="card-text">
                This is a Collection of Woman , most of the Woman bye this type
                of product .. :)
              </p>
              <p className="card-text">Last updated 4 mins ago</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 w-100% h-75% shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card  bg-dark text-white shadow p-3 mb-5 bg-white rounded ">
            <img
              src="https://cdn.pixabay.com/photo/2018/09/07/13/28/rabbit-3660673_960_720.jpg"
              className="card-img "
              alt="man"
            />
            <div className="card-img-overlay">
              <h3 className="card-title text-dark">Kids Collection</h3>
              <p className="card-text">
                This is a Collection of kids , most of the Kid bye this type of
                product .. :)
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
