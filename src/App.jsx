import React, { useState, Suspense } from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

//import reactLogo from './assets/react.svg'
//import Logo from './components/Logo'
import Header from "./components/Header";
//import Header1 from './components/Header1'
//import Slider from "./components/Slider";
import Home from "./components/Home";
import Body from "./components/Body";
import viteLogo from "/vite.svg";
import Footer from "./components/Footer";
import Author from "./components/Author";
import Category from "./components/Category";
import About from "./components/About";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Trazo from "./components/Trazo";
import CategoryxMayor from "./components/CategoryxMayor";
import CategoryxMayorDetails from "./components/CategoryxMayorDetails";
//import CategoryxMayorDetails1 from './components/CategoryxMayorDetails1'
import Carrito from "./components/Carrito";
//import Carrito1 from './components/Carrito1'
import {
  ShoppingCartProvider,
  CartContext,
} from "./contexts/ShoppingCartContext";
import SliderBar from "./components/SliderBar";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Drawer from "react-modern-drawer";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Navigation from "./components/Navigation";
import Guia from "./components/Guia";
import Tienda from "./components/Tienda";
import TiendaDetails from "./components/TiendaDetails";
//shopping-cart

// <Carrito/>
function App() {
  //const [artists, setArtists] = useState([]);

  const [cart, setCart] = useState([]);
  //const [cart, setCart] = useContext(CartContext);
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [guia, setGuia] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <main style={{ padding: 2 }}>
        <div>
          <button
            className="sb-button float-start lg:float-right ... bg-white rounded-full  "
            style={{
              backgroundColor: "white",
              textAlign: "center",
              margin: "20px 20px 20px",
            }}
            onClick={() => setToggled(!toggled)}
          >
            <img
              src="https://i.postimg.cc/Z5LhtwGc/carrito-logo.png"
              className="h-10 w-10  md:h-12 md:w-12 border-2 border-slate-100 rounded-full  "
              alt="Flowbite Logo"
            />
          </button>

          <ShoppingCartProvider>
            <BrowserRouter>
              <Sidebar
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="all"
                backgroundColor="#e9ebf5"
                width="300px"
              >
                <Carrito />
              </Sidebar>
              <div className="md:hidden">
                <Sidebar
                  onBackdropClick={() => setGuia(false)}
                  toggled={guia}
                  breakPoint="all"
                  backgroundColor="#e9ebf5"
                  width="300px"
                >
                  <Guia />
                </Sidebar>
              </div>
              <div className="hidden md:block">
                <Sidebar
                  onBackdropClick={() => setGuia(false)}
                  toggled={guia}
                  breakPoint="all"
                  backgroundColor="#e9ebf5"
                  width="600px"
                >
                  <Guia />
                </Sidebar>
              </div>

              <Header />
              <Trazo />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Tienda" element={<Tienda />} />
                <Route path="/TiendaDetails" element={<TiendaDetails />} />
                <Route
                  path="/Tienda/:id/:sexo/:valorAbsoluto/:general"
                  element={<TiendaDetails />}
                />
                <Route path="/Category" element={<Category />} />
                <Route path="/CategoryxMayor" element={<CategoryxMayor />} />
                <Route
                  path="/CategoryxMayor/:id/:sexo/:valorAbsoluto/:general"
                  element={<CategoryxMayorDetails />}
                />
                <Route path="/About" element={<About />} />
              </Routes>
              <Footer />
              <Author />
            </BrowserRouter>
          </ShoppingCartProvider>
        </div>
      </main>
    </>
  );
}

export default App;

{
  /*   <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/Slider" element={<Slider/>}/>        
      </Routes>   
      <Body/>   
      guia de tallas :

            <button
            style={{ position: "fixed", top: "50%", right: 0 }}
            onClick={() => setGuia(!guia)}
            className="border-2 border-black rounded-full  bg-black text-white font-Chango text-[1.2rem] md:text-[1.8rem]"
          >
            G.T.
          </button>
      

 <FloatingWhatsApp
              className=""
              phoneNumber="938164916"
              statusMessage="Linea"
              accountName="Confecciones Jeans Tovar"
              chatMessage="Bienvenido en que podemos ayudarlo"
              avatar="https://i.postimg.cc/NjzqPpxv/LogoJT.png"
            />

      
      */
}

{
  /*  
    <div className='-z-index bg-slate-800 relative'>
        <Header w={1920} h={100}/>
      </div>
      <div className='-z-index bg-slate-800  bg-opacity-15 absolute left-2 top-2 text-black max-w-md mx-auto border-2 border-red-800'>
        Hola
      
      </div>
*/
}

{
  /*   ruta original
  <BrowserRouter>
      <div>      
      <HeaderCarrito
      cart={cart}
      setCart={setCart}      
      >
      </HeaderCarrito>
      </div>
      <Header/> 
      <Trazo/> 
      <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/Slider" element={<Slider/>}/>   
        <Route path="/Category" element={<Category/>}/>  
        <Route path="/CategoryxMayor" element={<CategoryxMayor/>}/>       
        <Route path="/CategoryxMayor/:id/:sexo" element={<CategoryxMayorDetails/>}/>   
        <Route path="/About" element={<About/>}/>     
      </Routes> 
      
      <Footer/> 
      <Author/>
    </BrowserRouter>   
    <FloatingWhatsApp className='' phoneNumber='938164916' statusMessage='Linea' accountName='Confecciones Jeans Tovar' chatMessage='Bienvenido en que podemos ayudarlo' 
        avatar='https://i.postimg.cc/NjzqPpxv/LogoJT.png'/>  

*/
}
