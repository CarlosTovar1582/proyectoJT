
import React ,{ useState,Suspense } from 'react'

import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'


//import reactLogo from './assets/react.svg'
//import Logo from './components/Logo'
import Header from './components/Header'
//import Header1 from './components/Header1'
import Slider from './components/Slider'
import Body from './components/Body'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Author from './components/Author'
import Category from './components/Category'
import About from './components/About'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Trazo from './components/Trazo'
import CategoryxMayor from './components/CategoryxMayor'
import CategoryxMayorDetails from './components/CategoryxMayorDetails'
import Carrito from './components/Carrito'
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import SliderBar from './components/SliderBar'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { ShoppingCartIcon } from '@heroicons/react/24/solid'
//shopping-cart


// <Carrito/> 
function App() {
  
  
 
  //const [artists, setArtists] = useState([]);

const [cart,setCart] = useState([])
const [collapsed, setCollapsed] = React.useState(false);
const [toggled, setToggled] = React.useState(false);


  return (
    <>  
    
  
      <main style={{ padding: 10 }}>
        <div>
       
          <button className="sb-button float-left lg:float-right ..." onClick={() => setToggled(!toggled)}> 
            <img src="https://i.postimg.cc/Z5LhtwGc/carrito-logo.png" className="h-10 w-10  md:h-12 md:w-12 border-2 border-slate-800 rounded-full" alt="Flowbite Logo" />           
          </button>
      
          
          <ShoppingCartProvider>   
            <BrowserRouter> 
              <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="all"  backgroundColor="#1d14d9" >
                <Carrito/>
              </Sidebar>              
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
            <FloatingWhatsApp className='' phoneNumber='51962915371' statusMessage='Linea' accountName='Confecciones Jeans Tovar' chatMessage='Bienvenido en que podemos ayudarlo' 
                avatar='https://i.postimg.cc/NjzqPpxv/LogoJT.png'/>  

          </ShoppingCartProvider>
        </div>
      </main>
  
    
  
    
   
       
    </>
  )
}

export default App

{/*   <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/Slider" element={<Slider/>}/>        
      </Routes>   
      <Body/>   */}


{/*  
    <div className='-z-index bg-slate-800 relative'>
        <Header w={1920} h={100}/>
      </div>
      <div className='-z-index bg-slate-800  bg-opacity-15 absolute left-2 top-2 text-black max-w-md mx-auto border-2 border-red-800'>
        Hola
      
      </div>
*/}

{/*   ruta original
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

*/}
