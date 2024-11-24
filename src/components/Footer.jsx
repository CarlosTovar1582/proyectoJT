import React from "react";

export default function Footer() {
  return (
    <footer className="pt-20  ">
      <div
        className="grid grid-cols-4   w-full h-full   px-1 py-5 font-cabecera text-[1.1rem] 
       bg-black text-white sm:text-2xl md:text-3xl lg:text-4xl"
      >
        <div className="col-span-2   font-extrabold flex justify-center ">
          UBICACIÒN
        </div>
        <div className="col-span-2  font-extrabold flex justify-center  ">
          E-MAIL
        </div>
        <div className="col-span-2   text-center  ">
          Galería el encanto (Gamarra)Tienda 213
        </div>
        <div className="col-span-2   text-center ">Jeanstovar.pe@gmail.com</div>
        <div className="col-span-4 font-extrabold flex justify-center pt-6">
          UBICACION
        </div>
        <div className="col-span-4 font-extrabold flex justify-center pt-6">
          <img
            alt=""
            src="https://i.postimg.cc/CLXYmrLz/mapa.png"
            className="mx-auto rounded-2xl bg-white"
          />
        </div>

        <div className="col-span-2 text-slate-200 ">
          <div className=" flex justify-center space-x-10"></div>
        </div>
      </div>
    </footer>
  );
}
