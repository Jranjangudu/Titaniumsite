import React from "react";
import { Link } from "react-scroll";
function TopBottom() {
  let styles = {
    width: "50px",
    height: "50px",
    position: "sticky",
    top: "90vh",
    right: "0",
    bottom: "-10px",
    left: "90%",
    zIndex: 1000,
  };

  return (
    <>
      <div style={styles}>
        <Link
          to="scrolltop"
          smooth={true}
          duration={1000}
          className="btn btn-white"
          data-toggle="tooltip"
          data-placement="top"
          title="go to top"
        >
          <i className="fas fa-2x fa-angle-double-up "></i>
        </Link>
      </div>
      <Link
        to="scrollbottom"
        smooth={true}
        duration={1000}
        style={{
          position: "sticky",
          top: "80vh",
          bottom: "-10px",
          zIndex: 1000,
        }}
        data-toggle="tooltip"
        data-placement="top"
        title="go to bottom"
        className="btn btn-white ml-5"
      >
        <i className="fas fa-2x fa-angle-double-down"></i>
      </Link>
    </>
  );
}

export default TopBottom;
