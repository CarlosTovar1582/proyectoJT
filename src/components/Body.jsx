
import Section1 from './Section1'
import Section2 from './Section2'

import React from 'react'
import PropTypes from "prop-types";
const Body = ({ className = "" }) => {
  return (   
    <div className='pt-10 pl-10 pr-10'> 
      <div><Section1/></div>  
      {/*  <div className='pt-6 pb-6'><Section2/></div> */}                
    </div>    
    
  )
}

Body.propTypes = {
  className: PropTypes.string,
};
export default Body;


