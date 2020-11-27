import React, { useState } from "react";

function ProductsRandF() {
  //here it handle the user queations 
  const [Question, setQuestion] = useState("");
  const [state, setstate] = useState([]);
// here it handle the user reply
  const [reply, setreply] = useState("");
  const [replylist, setreplylist] = useState([]);
// here the user onchange value handel 
  const handleQuestion = (e) => {
    setQuestion(e.target.value);
    e.preventDefault();
  };
  //here it set the input value in array from 
  const handleallquestion = () => {
    setstate([...state, Question]);
    setQuestion("");
  };
  //here it handle user reply input value 
  let handlereply = (e) => {
    setreply(e.target.value);
    e.preventDefault();
  };
  //it handle the send button
  let handlesend = () => {
    setreplylist([...replylist, reply]);
    setreply("");
  };

  return (
    <>
      <h5 className="mt-4">Ratings & Reviews</h5>
      <div className="row">
        <div className="card col-sm-7">
          <img
            src="https://www.androidpolice.com/wp-content/uploads/2020/05/28/Screen-Shot-2020-05-28-at-10.23.22.png"
            alt="reviews"
            width="100%"
          />
          <hr />
          <img
            src="https://www.researchgate.net/profile/Hien_Nguyen209/publication/324721096/figure/fig3/AS:738130655186947@1552995470424/An-example-of-review-valence-and-volume-showed-on-Amazoncom-where-42-stars-are-book.ppm"
            alt="reviews"
            width="100%"
          />
        </div>
        <div className="card col-sm-5">
          <div className="media">
            <img
              src="https://www.pngitem.com/pimgs/m/192-1929335_ubt-pro-express-international-courier-ratings-4-5-star.png"
              alt="rating"
              width="30%"
            />
            <div className="media-body">
              <p>Just now</p>
              <small>
                nice product iam fully satisfied with the service :)
              </small>
              <br />
              <small>
                <em>Titanium customer</em>
              </small>
              <i className="fas fa-thumbs-up ml-5"></i>10
              <i className="fas fa-thumbs-down ml-3 "></i> 2
              <i className="fas fa-ellipsis-v ml-3"></i>
            </div>
          </div>
          <div className="media mt-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXW7su1ZYnlc0gEvEZelNCZ_Q1LgbotNbtQ&usqp=CAU"
              alt="rating"
              width="30%"
            />
            <div className="media-body">
              <p>22 March</p>
              <small>value for money:)</small>
              <br />
              <small>
                <em>Titanium customer</em>
              </small>
              <i className="fas fa-thumbs-up ml-5"></i>1
              <i className="fas fa-thumbs-down ml-3 "></i> 0
              <i className="fas fa-ellipsis-v ml-3"></i>
            </div>
          </div>
          <button className="btn btn-light w-100 mt-3 mb-2">
            All 1235 reviews
          </button>
          <h6>
            <b>Questions & Answers</b>
          </h6>
          {/* Map function use here for render every element one by one */}
          {state.map((message, i) => {
            return (
              <>
                <div className="media border" key={i}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/IN-your-account._CB485928885_.png"
                    className="mr-3"
                    width="50px"
                    alt="d"
                  />
                  <div className="media-body">
                    <h6>Sonali Nayak😍 || Mr.Guddu😎</h6>
                    <small className="mt-0">
                      Q: <b>{message}</b>
                    </small>
                    <br />
                    {replylist.map((data,i) => {
                      return (
                        <div key={i}>
                          <small >A: {data}</small>
                          <br />
                        </div>
                      );
                    })}
                    <small>
                      <i className="fas fa-thumbs-up ml-2 "></i>10
                      <i className="fas fa-thumbs-down  ml-2"></i> 0
                      <i className="fas fa-ellipsis-v ml-2"></i>
                    </small>
                    <input
                      className="form-control mr-sm-2 py-4 "
                      type="search"
                      onChange={handlereply}
                      placeholder="Reply here"
                      value={reply}
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-danger"
                      disabled={!reply}
                      onClick={handlesend}
                    >
                      send
                    </button>
                  </div>
                </div>
              </>
            );
          })}

          <input
            className="form-control mt-3 mr-sm-2 py-4 "
            type="search"
            placeholder="Enter your Question"
            value={Question}
            onChange={handleQuestion}
            aria-label="Search"
          />
          <button
            onClick={handleallquestion}
            disabled={!Question}
            className="btn btn-primary"
          >
            send question
          </button>

          <button className="btn btn-light w-100 mt-3 mb-2">All 124 Q&A</button>
        </div>
      </div>
    </>
  );
}

export default ProductsRandF;
