import React,{ useState}  from 'react'
import { Link } from "react-router-dom"

  const Categoryproductsm = [
    {
      id: 1,
      name: 'Overoles Jeans',
      href: '#',
      sexo:1,
      tallas: '2,4,6,8,10,12',
      description: '',
      imageSrc: 'https://i.postimg.cc/mrZgwb7D/Overoln-1.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',      
    },

  ]
  const Categoryproductsf = [
    {
      id: 1,
      name: 'Overoles Jeans',
      href: '#',
      sexo:2,
      tallas: '2,4,6,8,10,12,14,16',
      description: '',
      imageSrc: 'https://i.postimg.cc/Fsf8qXT9/Overolm-1.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',      
    },
  ]


export default function CategoryxMayor() {
    const [value, setValue] = useState("m")
    const [cart,setCart]=useState([])
  return (
    <div className="bg-white font-mono text-xl">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 id="products-heading" className="border-2 border-slate-900 font-cabecera text-2xl sm:text-3xl font-bold text-center pb-2 rounded-3xl
         text-black ">
          Catalogo x Mayor
        </h1>
        <div className="flex ... justify-start rounded-3xl font-cabecera ">
          <div className="w-2/5 ...  rounded-3xl text-center pt-4 font-cabecera "> 
          <div className='grid grid-cols-12 '>
            <div className='col-span-4 flex items-center justify-start font-cabecera font-bold pl-1'>Niño</div>
              <div className='col-span-2  flex items-center justify-center '>  
                <input id="default-radio-1" type="radio" value="m" name="default-radio" className="w-4 h-4 text-blue-600 
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                onChange={e => setValue(e.currentTarget.value)}
                checked={value === "m"}
               
                >              
                </input> 
              </div>
            <div className='col-span-4 flex items-center justify-start font-cabecera font-bold pl-1'>Niña</div>
              <div className='col-span-2  flex items-center justify-center '>  
                <input id="default-radio-2" type="radio" value="f" name="default-radio" className="w-4 h-4 text-blue-600 
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={e => setValue(e.currentTarget.value)}
                checked={value === "f"}
                >              
                </input> 
              </div>
            <div className='col-span-1 '></div>
            <div className='col-span-1 '></div>         
          </div>       
           
          </div>
          <div className="w-3/5 ... rounded-3xl text-center  ">
            
                     
          </div>
        </div>

        { value==='m' ? (
        <div className="card">
              
              {/* SSection masculino */}
              
              <div className="pl-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 font-cabecera pt-10">
                            {Categoryproductsm.map((product) => (               
                              <Link to={"/CategoryxMayor/" + product.id + "/" + product.sexo }  key={product.id}    href={product.href} className="group hover:scale-110 hover:text-sky-500 " >
                                  <div className=" aspect-h-1  overflow-hidden  h-auto  w-auto
                                  rounded-3xl sm:aspect-h-3 sm:aspect-w-2 flex items-center justify-center  ">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}                        
                                        className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl"
                                    />    
                                                            
                                  </div>                     
                                  {/* text-center font-bold text-lg  */ }
                                  <div className="rounded-2xl font-cabecera text-black mt-4 justify-between  text-gray-900 border-2 border-black ">
                                  <p className="text-center  text-[1.2rem] sm:text-2xl ">{product.name}</p>
                                  <p className='text-center  text-[0.8rem] sm:text-2xl text-blue-700'>{product.tallas}</p>
                                  </div>
                                  <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                                  
                              </Link>
                            ))}                    
              </div>
              {/* SSection masculino */}
               
          </div>
          ):
              <div className="pl-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 font-cabecera pt-10">
              {Categoryproductsf.map((product) => (               
                <Link to={"/CategoryxMayor/" + product.id + "/" + product.sexo }  key={product.id}    href={product.href} className="group hover:scale-110 hover:text-sky-500 " >
                    <div className=" aspect-h-1  overflow-hidden 
                    rounded-3xl sm:aspect-h-3 sm:aspect-w-2 flex items-center justify-center  ">
                      <img
                          src={product.imageSrc}
                          alt={product.imageAlt}                        
                          className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl"
                      />    
                                              
                    </div>                     
                    {/* text-center font-bold text-lg  */ }
                    <div className="rounded-2xl font-cabecera text-black mt-4 justify-between  text-gray-900 border-2 border-black ">
                    <p className="text-center  text-[1.2rem] sm:text-2xl ">{product.name}</p>
                    <p className='text-center  text-[0.8rem] sm:text-2xl text-blue-700'>{product.tallas}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                    
                </Link>
              ))}                    
              </div>
             
          }




  

             
             
        
   
       


    </div>
    </div>
  )
}
