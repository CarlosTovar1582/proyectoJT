import React from 'react'
import PropTypes from "prop-types";
const Header = ({ className = "" }) => {
  return (
    <header
    className={`w-full  bg-gray flex  md:h-40   text-white  ${className}`}
    >
        <div className="grid grid-cols-4  w-full  ">
            {/*  LOgo   */}
            <div className='col-span-3 pl-6  text-white font-extrabold text-center  text-[70px] md:text-[100px] '>
                <h1 className="font-lacquer relative text-inherit font-normal font-inherit text-left  ">
                    Jeans Tovar
                </h1>
            </div> 
            {/*  LOgo   */} 
            {/*  Link para   navegar   */}                
            <div className='visible col-span-1 lg:invisible flex flex-col items-end justify-center text-white font-extrabold '>               
                <img
                className="w-[70px] h-[70px] relative overflow-hidden"
                loading="lazy"
                alt=""
                src="../../public/heroiconsoutlineviewlist.svg"
                />            
            <div className="invisible lg:visible font-lacquer  mt-[-33.5px]  w-[220px]  [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-start py-2.5 px-0 box-border relative text-16xl">
                <div className=" 
                [text-decoration:none]   w-[140.7px]   h-[35.3px] inline-block !m-[0] bottom-[-2.94px]  left-[-0.6px] text-[inherit] 
                [transform:_rotate(-40deg)] [transform-origin:0_0]   absolute top-[10.79px] ">
                  Inicio
                </div>
                <div className=" absolute [text-decoration:none] h-[35.5px] w-[140.7px]  !m-[0] top-[10.79px] right-[-0.6px] text-[inherit] 
                inline-block [transform:_rotate(-40deg)] [transform-origin:0_0] text-16xl">
                  Categorias
                </div>          
              </div>
            </div>  
            {/*  Link para   navegar   */}
        </div>
  </header>
 
  )
}

Header.propTypes = {
  className: PropTypes.string,
};
export default Header;



/*     screens: {
      mq1200: {
        raw: "screen and (max-width: 1200px)",
      },   
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },  
      mq561: {
        raw: "screen and (max-width: 561px)",
      }, 
      mq450: {
        raw: "screen and (max-width: 450px)",
      },     
    }, 
    
    */