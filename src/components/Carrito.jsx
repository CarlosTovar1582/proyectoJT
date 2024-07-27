import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Carrito = () => {
  const [cart, setCart] = useContext(CartContext);

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
 

  console.log(cart)
  //const sumarCarrito = cart.reduce((acc, curr) => {
    //return acc + curr;
  //}, 0);
  //setCart(prevCart => [...prevCart,cart] ) 

  //ProductDetailsf.categories.map((order) => (

  //))  


  /*const quantity = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);*/

  function enviarMensaje(){
    let productosParaWsp = 
    cart.map((category,Idx) => (  
      category.map((item,itemIdx)=> (
        ` [  ${item.name} - (${item.cantidad}) Paquetes ]`
      ))
    ))

    console.log('productosParaWsp')

    if(cart.length == 0 ) {
      console.log('No hay datos a enviar')
    }else{
      let sex
      const productosConFormatoAmigable = productosParaWsp.join('\n') ; // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
      //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify() 
      window.location.href ='https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos%20:' + productosConFormatoAmigable // Comento esta línea para no redirigir realmente en este ejemplo
    }
      //`${sentence1}{Alt>}{Enter}{/Alt}${sentence2}`      

    // Le añadimos un guión delante del nombre y también el monto
     // it should not
    //"Hole" + "\n" + "Línea Siguiente"
    

    
  }

  return (

    <div className="bg-white  text-black font-bold text-center font-cabecera border-2 border-white rounded-2xl text-[1.3rem]">Lista de Pedidos x Mayor
      {cart.map((category,Idx) => (                
                <div key ={Idx} className='text-[0.9rem] sm:text-[1.1rem] font-cabecera  '>
                  {category.map((item,itemIdx)=> (
                    <div key={itemIdx}  className='grid grid-cols-8 font-cabecera  '>                     
                    <div className='col-span-6 text-black '>
                        {item.name}
                    </div>   
                    <div className='col-span-2 text-black '>
                        {item.cantidad}
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
    </div>
  );
};
export default Carrito
