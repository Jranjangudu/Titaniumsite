import React from "react";
const Search = (props) => {
    //unsplash image url here the data comes as a props and set here dynamically
  let img = `https://source.unsplash.com/500x400/?${props.productlist}`;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src={img} alt="product" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
