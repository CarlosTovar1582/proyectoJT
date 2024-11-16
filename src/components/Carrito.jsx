import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

import {
  Dialog,
  Popover,
  Tab,
  Transition,
  RadioGroup,
  Disclosure,
  Button,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Carrito = () => {
  const [cart, setCart] = useContext(CartContext);
  const [show, setShow] = useState(false);

  function openMensaje() {
    setShow(true);
  }
  function closeMensaje() {
    setShow(false);
  }

  function eliminarCarrito(item) {
    //console.log(item.id);
    //console.log(item.tipo);
    //const itemExists = cart.findIndex(valor => valor.id === item.id)
    //console.log(itemExists)
    //const foundId=cart.find((element)=> element.id === item.id)
    //console.log(foundId)
    //setCart([...cart ,artists])
    //console.log(item.id)
    //console.log(cart)
    //console.log(cart.map.itemIdx)
    //setCart(prevCart => prevCart.filter(cart => cart.id !== item.id))
    //cart.map((category,Idx) => (
    //category.map((item,itemIdx)=> (

    setCart(
      //cart.filter(a => a.id !== item.id)
      cart.map((category, Idx) => category.filter((a) => a.id !== item.id))
    );

    /*
     setCart([...cart ,                             
      category.filter(a =>
        a.id !==   item.id
        ) 
   
    //setCart([...cart ,artists])  
      ])
      */
  }

  //crear carrito para cada componmente ...

  /*const initialCart = () =>{
    const localStorageCart= localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []

  }*/

  //const [cart,setCart] = useState(initialCart)
  //const id= cart.id
  //const name= cart.name
  // function saveLocalStorag (){
  //localStorage.setItem('cart', JSON.stringify(cart))
  //}

  /*useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  },[])*/

  console.log(cart);
  //const sumarCarrito = cart.reduce((acc, curr) => {
  //return acc + curr;
  //}, 0);
  //setCart(prevCart => [...prevCart,cart] )

  //ProductDetailsf.categories.map((order) => (

  //))

  /*const quantity = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);*/
  let valor = 0;

  function enviarMensaje() {
    //alert("enviar");
    /*
    window.open(
      "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos: %0A" +
        productosConFormatoAmigable +
        "%0A",
      "_blank"
    )*/

    window.open(
      "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos: %0A" +
        cart.map((category, Idx) =>
          category.map(
            (item, itemIdx) =>
              `[Descripción : ${item.name} - Talla : (${item.talla}) - Paquete : (${item.cantidad}) - Sexo : ${item.sexo} - Tipo : ${item.tipo} +] %0A`
          )
        ),
      "_blank"
    );

    /*  if (cart.length <= 4) {
      //console.log("Se requiere una cantidad minima de 5 productos");
      openMensaje();
    } else {
      let sex;
      const productosConFormatoAmigable = productosParaWsp.join("\n"); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
      //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
      /*window.location.href =
        "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos%20:" +
        productosConFormatoAmigable; // Comento esta línea para no redirigir realmente en este ejemplo*/

    /*
      window.open(
        "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos%20:" +
          productosConFormatoAmigable,
        "_blank"
      );
    }*/

    //let sex;
    //const productosConFormatoAmigable = productosParaWsp.join("\n"); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
    //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
    /*window.location.href =
      "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos%20:" +
      productosConFormatoAmigable; // Comento esta línea para no redirigir realmente en este ejemplo*/

    /* console.log(productosConFormatoAmigable);

    window.open(
      "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos: %0A" +
        productosConFormatoAmigable +
        "%0A",
      "_blank"
    );*/

    /*
    Codigo Original

     if (cart.length <= 4) {
      //console.log("Se requiere una cantidad minima de 5 productos");
      openMensaje();
    } else {
      let sex;
      const productosConFormatoAmigable = productosParaWsp.join("\n"); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
      //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
      window.location.href =
        "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos%20:" +
        productosConFormatoAmigable; // Comento esta línea para no redirigir realmente en este ejemplo
    }
    
    
    */

    //`${sentence1}{Alt>}{Enter}{/Alt}${sentence2}`

    // Le añadimos un guión delante del nombre y también el monto
    // it should not
    //"Hole" + "\n" + "Línea Siguiente"
  }

  return (
    <div className="bg-white  text-black font-bold text-center font-cabecera border-2  border-white rounded-2xl text-[1.3rem]">
      <p className="font-Chewy  pb-2 text-2xl">Lista de Pedidos</p>
      {cart.map((category, Idx) => (
        <div
          key={Idx}
          className="text-[0.9rem]  font-cabecera border-2 border-black  rounded-2xl"
        >
          {category.map((item, itemIdx) => (
            <div key={itemIdx} className="grid grid-cols-12 font-cabecera  ">
              <div className="col-span-4 text-black ">{item.name}</div>
              <div className="col-span-2 text-black ">Cant:{item.cantidad}</div>
              <div className="col-span-2 text-black ">Talla:{item.talla}</div>
              <div className="col-span-2 text-blue-700 ">T:{item.tipo}</div>
              <div className="col-span-2 text-black ">
                <button
                  className=" text-white    rounded-2xl  border-2 border-slate-950 bg-black"
                  onClick={() => eliminarCarrito(item)}
                >
                  <TrashIcon className="h-5 w-5 font-bold" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={() => enviarMensaje()}
        className="flex max-w-xs flex-1 items-center justify-center rounded-md 
            border border-transparent bg-green-600  text-base font-medium text-white 
            hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
            focus:ring-offset-gray-50 w-full font-cabecera"
      >
        Whatssap
      </button>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className=" w-full flex-col items-center space-y-4 sm:items-end hidden">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-60 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-red-700"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5 ">
                    <p className="text-sm font-medium text-black">
                      Seleccionar 5 productos como minimo!
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setShow(false);
                      }}
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      {/* Global notification live region, render this permanently at the end of the document */}
    </div>
  );
};
export default Carrito;

/*
onClick={() => {
  setCart([...cart ,                             
      category.filter(a =>
        a.id !==   item.id
        ) 
   
    //setCart([...cart ,artists])  
  ])
}}>*/
