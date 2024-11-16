import React,{ useState}  from 'react'
import { Link } from "react-router-dom"
const Categoryproductsm = [
    {
      id: 1,
      name: 'Overol',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',      
    },
    {
      id: 2,
      name: 'Camisas',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Casacas',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },   
    {
      id: 4,
      name: 'Jeans',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
  ]
const Categoryproductsf = [
    {
      id: 1,
      name: 'Overol',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/GtthyHLk/intro6.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',      
    },
    {
      id: 2,
      name: 'Camisas',
      href: '#',
      price: '',
      description: '',
      imageSrc: 'https://i.postimg.cc/GtthyHLk/intro6.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    }, 
  ]


export default function Category() {

  const [value, setValue] = useState("")
  return (
    <div className="bg-white font-mono text-xl">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 id="products-heading" className="border-2 border-slate-200 font-cabecera text-2xl font-bold text-center pb-6 rounded-3xl
         text-slate-300 bg-black">
          Catalogo x Menor
        </h1>
        <div className="flex ... rounded-3xl font-cabecera">
          <div className="w-1/2 ... bg-black  rounded-3xl text-center text-slate-300  ">
            <div>Masculino</div>
            <div> 
              <input id="default-radio-1" type="radio" value="m" name="default-radio" className="w-4 h-4 text-blue-600 
              bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
              focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
              onChange={e => setValue(e.currentTarget.value)}>              
              </input>
            </div>
           
          </div>
          <div className="w-1/2 ... bg-black rounded-3xl text-center text-slate-300">
            <div>Femenino</div>
            <div> <input id="default-radio-1" type="radio" value="f" name="default-radio" className="w-4 h-4 text-blue-600 
            bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
            focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
            onChange={e => setValue(e.currentTarget.value)}>              
            </input></div>            
          </div>
        </div>

       
        { value==='m' ? (<div className="card">
              
              {/* SSection masculino */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 pt-10">
                      {Categoryproductsm.map((product) => (               
                        <Link to={"/Category/" + product.id }  key={product.id}    href={product.href} className="group hover:scale-110 hover:text-sky-500 " >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl sm:aspect-h-3 sm:aspect-w-2 border-2 border-slate-800 ">
                              <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}                        
                                  className="h-full  w-full object-cover object-center group-hover:opacity-75"
                              />
                                                      
                            </div>                     
                            {/* text-center font-bold text-lg  */ }
                            <div className="mt-4 justify-between text-base font-medium text-gray-900 ">
                            <h3 className="text-center font-bold text-lg ">{product.name}</h3>
                            <p>{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                            
                        </Link>
                      ))}                    
              </div>
              {/* SSection masculino */}
               
          </div>
          ):
         
              <div className="card">
                
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 pt-10">
                      {Categoryproductsf.map((product) => (               
                        <Link to={"/Category/" + product.id }  key={product.id}    href={product.href} className="group hover:scale-110 hover:text-sky-500 " >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl sm:aspect-h-3 sm:aspect-w-2 border-2 border-slate-800 ">
                              <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}                        
                                  className="h-full  w-full object-cover object-center group-hover:opacity-75"
                              />
                                                      
                            </div>  
                                            
                            {/* text-center font-bold text-lg  */ }
                            <div className="mt-4 justify-between text-base font-medium text-gray-900 ">
                            <h3 className="text-center font-bold text-lg ">{product.name}</h3>
                            <p>{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>                        
                        </Link>
                      ))}                    
                </div>
                
              </div>
             
          }
             
             
        
   
       


    </div>
    </div>
  )
}
