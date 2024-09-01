import React from 'react'
import PropTypes from "prop-types";

const Section2 = ({ className = "" }) => {
    return (
      <div>
        <img
          className=" relative rounded-xl object-cover "
          alt=""
          src="../../public/section1.png"
        />
      </div>
    );
  };
  
  Section2.propTypes = {
    className: PropTypes.string,
  };
  
  export default Section2;