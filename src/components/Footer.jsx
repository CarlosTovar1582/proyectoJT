import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-20  '>
      <div className="grid grid-cols-4   w-full h-full   px-1 py-5 font-cabecera text-[1.1rem] 
       bg-black text-white sm:text-2xl md:text-3xl lg:text-4xl">
       
            <div className='col-span-2   font-extrabold flex justify-center '>UBICACIÒN</div>
            <div className='col-span-2  font-extrabold flex justify-center  '>E-MAIL</div>
            <div className='col-span-2   text-center  '>
            Galería el encanto (Gamarra)Tienda 213 
            </div>
            <div className='col-span-2   text-center '>Jeanstovar.pe@gmail.com</div>
            <div className='col-span-2 font-extrabold flex justify-center pt-6'>TELEFONO</div>
            <div className='col-span-2  font-extrabold flex justify-center pt-6'>REDES SOCIALES</div>
            <div className='col-span-2   text-center  pt-3'>
                +51 (962) 915 371
            </div>
            <div className='col-span-2 font-extrabold flex justify-center pt-1 '>
              <div className='pl-2'>
                  <a href="https://www.facebook.com/Jeanstovar.pe"                                   
                  >
                      <img src="https://i.postimg.cc/85tqS3kP/logos-facebook.png" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16  " alt="Flowbite Logo" />
                  </a>
                </div>
              <div className='pl-2'>
                <a href="https://www.facebook.com/Jeanstovar.pe"                                   
                >
                  <img src="https://i.postimg.cc/3RTvTSS6/skill-icons-instagram.png" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16  " alt="Flowbite Logo" />
                </a>
              </div>
                
              <div className='pl-2'>
              <a href="https://www.facebook.com/Jeanstovar.pe"                                   
                >
                <img src="https://i.postimg.cc/FsLkYXMq/ph-tiktok-logo-fill.png" className="bg-white h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 " alt="Flowbite Logo" />
              </a>
              </div>                       
            </div>
            <div className='col-span-2 text-slate-200 '> 
            <div className=" flex justify-center space-x-10">
               
            </div>
                 
          </div> 
      </div>
    </footer>
   
  )
}
