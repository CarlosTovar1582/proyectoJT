import React from 'react'
import PromotionLayout from "../components/PromotionLayout";

const Section1 = () => {
    return (
      <div className="w-full relative rounded-xl overflow-hidden flex flex-col items-center justify-center pt-[2.056rem] 
      px-[0.7rem] pb-[1.375rem] box-border gap-[1.381rem] bg-[url('../../public/madera.svg')]
       bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] text-left   font-lakki-reddy">
        <img
          className="w-[22.5rem] h-[102.25rem] relative rounded-xl object-cover hidden max-w-full"
          alt=""
          src="../../public/madera.svg"
        />
        <div className=" py-[0rem]  ">
          <div className=" relative text-[2.5rem]  text-center  text-black">
            Promociones
          </div>
        </div>
        <main className="text-white self-stretch h-auto rounded-xl px-[0.7rem  bg-gray flex flex-col items-start justify-start pt-[1.625rem] px-[1.562rem] pb-[1.812rem] box-border gap-[2.312rem] z-[1]">
          
            <div className=' lg:grid grid-cols-3 text-center '>
              <div className="w-[20rem] h-[92.438rem] relative rounded-xl bg-gray hidden " />
                <div className="pt-8 px-[0.4rem] colspan-1 text-center  self-stretch flex-1 relative rounded-xl bg-gainsboro z-[2]" >
                    <div className=''>
                      <img
                        className="rounded-3xl"                        
                        src="../../public/Intro/intro2.jpg"
                      />
                    </div>
                    <div className='pt-2 text-[0.9rem]'>Lleve sus pantalos jeans para niños.en la descripcion podems asignarlos al area respectiva</div>
                </div>
                <div className="pt-8 px-2 colspan-1 text-center  self-stretch flex-1 relative rounded-xl bg-gainsboro z-[2]" >
                    <div className=''>
                      <img
                        className="rounded-3xl"                        
                        src="../../public/Intro/intro2.jpg"
                      />
                    </div>
                    <div className='pt-2 text-[0.9rem]'>Lleve sus pantalos jeans para niños.en la descripcion podems asignarlos al area respectiva</div>
                </div>
                <div className="pt-8 px-2 colspan-1 text-center  self-stretch flex-1 relative rounded-xl bg-gainsboro z-[2]" >
                    <div className=''>
                      <img
                        className="rounded-3xl"                        
                        src="../../public/Intro/intro2.jpg"
                      />
                    </div>
                    <div className='pt-2 text-[0.9rem]'>Lleve sus pantalos jeans para niños.en la descripcion podems asignarlos al area respectiva</div>
                </div>
                
            </div>
        </main>    
      </div>
    );
  };
  
  export default Section1;