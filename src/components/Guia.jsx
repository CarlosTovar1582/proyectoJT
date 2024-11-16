import React from "react";

export default function Guia() {
  return (
    <div className="bg-white  text-black font-bold text-center font-cabecera border-2 border-white rounded-2xl text-[1.3rem]">
      <p className="font-Chewy pr-4 pl-2">Guia de Tallas</p>
      <div className="grid grid-cols-4">
        <div className="col-span-4 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/mrb3f22q/01.jpg"
            className="h-auto w-auto  border-2 border-slate-800 "
            alt="Flowbite Logo"
          />
        </div>
        <div className="col-span-4 flex items-center justify-center pt-4">
          <img
            src="https://i.postimg.cc/6q02hCCp/02.jpg"
            className="h-auto w-auto  border-2 border-slate-800 "
            alt="Flowbite Logo"
          />
        </div>
        <div className="col-span-4 flex items-center justify-center pt-4">
          <img
            src="https://i.postimg.cc/vTQDDDCF/03.jpg"
            className="h-auto w-auto  border-2 border-slate-800 "
            alt="Flowbite Logo"
          />
        </div>
        <div className="col-span-4 flex items-center justify-center pt-4">
          <img
            src="https://i.postimg.cc/9FQrhRGy/04.jpg"
            className="h-auto w-auto  border-2 border-slate-800 "
            alt="Flowbite Logo"
          />
        </div>
        <div className="col-span-4 flex items-center justify-center pt-4">
          <img
            src="https://i.postimg.cc/x1WCM6BP/05.jpg"
            className="h-auto w-auto  border-2 border-slate-800 "
            alt="Flowbite Logo"
          />
        </div>
      </div>
    </div>
  );
}
