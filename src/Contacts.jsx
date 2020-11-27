import React from "react";
import "./App.css";
function Contacts() {
  return (
    <div className="container">
      <h3 className="ml-5 text-dark my-4">Contact </h3> <hr />
      <h4 className="text-center my-3">Our Social sites</h4>
      <div className="text-center mt-3">
        <button className="twitter mt-2">
          <i className="fab  fa-twitter px-2"></i>{" "}
          <a href="https://www.twitter.com/MrGudu5/" className="text-white">
            Twitter
          </a>
        </button>
        <button className="facebook  mt-2">
          <i className="fab  fa-facebook px-2"></i>Facebook
        </button>
        <button className="instagram  mt-2">
          <i className="fab  fa-instagram px-2"></i>
          <a
            href="https://www.instagram.com/its_me_gudu_/"
            className="text-white"
          >
            Instagram
          </a>
        </button>
        <p className="mt-1"> &#9993; Email: 9114338163gudu@gmail.com</p>
        <p>
          <i className="fab  fa-whatsapp px-2"></i>WhatsApp on : &#9990; +91
          8114994487
        </p>
      </div>
      <div className="form-group">
        <label>Send your messages !</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="write your messages"
        />
        <button className="btn btn-danger px-5 mt-2">send</button>
      </div>
    </div>
  );
}

export default Contacts;
