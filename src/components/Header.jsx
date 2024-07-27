import React ,{ Fragment,useState,Suspense } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  HomeIcon,

  UserIcon,
  BanknotesIcon,  
  FolderIcon,
  EnvelopeIcon, 
} from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom'


const products = [
  {
    name: "Conmutadores",
    grupo:1,
    submenu: [{
                items: "Interruptor de Limite Vertical en miniatura TZ-8",
              },
              {
                items: "Interruptor de límite sellado",             
              },
              {
                items: "Interruptor de límite pequeño",
              },          
            ],
    href: '#'          
  },
  {
    name: "Variadores",
    grupo:2,
    submenu: [{
                items: "Interruptor de límite de seguridad",
              },
              {
                items: "Interruptor de límite de reinicio Manual",             
              },
              {
                items: "Interruptor de límite de puerta de seguridad",
              },
             ],
    href: '#'          
  },  
  ];

export default function Header() {
  const [open, setOpen] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
 
  function openModal(a) {
    setIsOpen(true)  
  }
  
  return (
    <header>
      <div className='grid grid-cols-4 gap-0 text-black  '>

        <div className='col-span-3 lg:col-span-2 content-center ... pl-4 md:pl-4 '>
          <img src="https://i.postimg.cc/26GMSNHL/Logo-Final-JT.png" className="" alt="Flowbite Logo" />          
        </div>
        <div className='col-span-1 lg:col-span-2 '>
          <div className='lg:grid grid-cols-8  h-full  hidden  text-[1.3rem] w-full font-cabecera   '>      
                    <div className=' text-right content-end ... pb-10  col-span-2  w-full mx-auto '>                
                      <Link to="/Slider" className="leading-6 text-black   
                      px-2 py-2  hover:text-sky-700 ...  rounded-2xl ">
                        Inicio
                      </Link> 
                    </div>
                    <div className=' text-center content-end ... pb-10  col-span-2  w-full mx-auto'>
                      <Link to="/About" className="leading-6 text-black   hover:scale-110 
                      px-2 py-2  hover:bg-gray-200 rounded-2xl hover:text-sky-700 ...">
                        Nosotros
                      </Link> 
                    </div>
                    <div className=' text-left content-end ... pb-10  col-span-2  w-full mx-auto'>
                      <Link to="/Category" className="leading-6 text-black   hover:scale-110 
                      px-2 py-2  hover:bg-gray-200 rounded-2xl hover:text-sky-700 ...">
                        Catalogo x Unidad
                      </Link>                                       
                    </div> 
                    <div className=' text-left content-end ... pb-10  col-span-2  w-full mx-auto'>
                      <Link to="/CategoryxMayor" className="leading-6 text-black   hover:scale-110 
                      px-2 py-2  hover:bg-gray-200 rounded-2xl hover:text-sky-700 ...">
                        Catalogo x Mayor
                      </Link>                                       
                    </div> 
               
                <div className='lg:hidden text-left content-end ... pb-10  col-span-6  w-full mx-auto'>Hola</div>          
          </div>
          <div className='grid grid-cols-6  h-full  lg:hidden'>                         
                <div className='lg:hidden flex items-center justify-end   content-end ... pb-6  
                col-span-6  w-full'>
                  <button
                    type="button"
                    className="-m-2.5 items-center justify-end  rounded-md p-2.5 text-gray-300"
                    onClick={() => openModal(true)}
                    >
                      <Bars3Icon className="pr-2 h-12 w-12 sm:h-20 sm:w-20 mt-4  font-bold text-black" aria-hidden="true" />
                  </button>  
                </div>          
          </div>
        </div>

      </div>
      <Transition appear show={isOpen} as={Fragment} onClose={setOpen}>
                      <Dialog as="div" className="relative z-10 border-2 border-cyan-500 lg:hidden"   onClose={closeModal}>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>
                          <div className="fixed inset-0 ">                         
                            <Dialog.Panel className=" w-full  font-title text-1xl max-w-7xl transform overflow-hiddenrounded-2xl bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-400 p-6 text-left align-middle shadow-xl transition-all">
                              <div className="grid grid-cols-4 gap-0 text-black border-2 border-black-500 rounded-2xl ">
                                <div className='col-span-3'> 
                                  <BookmarkIcon className="h-12 w-12" aria-hidden="true" />
                                </div>                         
                                <div className='flex justify-end'>
                                  <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => closeModal(false)}
                                  >                                  
                                    <XMarkIcon className="h-12 w-12" aria-hidden="true" />
                                  </button>
                                </div>
                                {/* 1 fila  */} 
                                <div className='flex justify-center items-center '> 

                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <HomeIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-start items-center font-cabecera'>                                 
                                  <Link to="/Slider" onClick={() => closeModal(false)}
                                    className="-mx-3 block rounded-lg px-1  text-[1.2rem] font-bold leading-7 text-black hover:bg-gray-800"
                                  >
                                    Home
                                  </Link>
                                </div>
                                {/* 1 fila  */}
                                {/* 2 fila  */}
                                <div className='flex justify-center items-center '> 
                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <UserIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-start items-center font-cabecera'> 
                                  <Link to="/About" onClick={() => closeModal(false)}
                                      className="-mx-3 block rounded-lg px-1  text-[1.2rem] font-bold leading-7 text-black hover:bg-gray-800"
                                  >
                                    Nosotros
                                  </Link>
                                </div> 
                                {/* 2 fila  */}
                                {/* 3 fila  */}
                                
                                {/* 3 fila  */}
                                {/* 4 fila  */}
                                <div className='flex justify-center items-center '> 
                                </div>
                                <div className='flex justify-center items-center '>                                 
                                  <FolderIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-star items-center font-cabecera  '> 
                                  <Link to="/Category" onClick={() => closeModal(false)}
                                        className="-mx-3 block rounded-lg px-1  text-[1.2rem] font-bold leading-7 text-black hover:bg-gray-800"
                                  >
                                    Catalogo x Unidad
                                  </Link>
                                </div>

                                <div className='flex justify-center items-center '> 
                                </div>
                                <div className='flex justify-center items-center pb-4'>                                 
                                <FolderIcon className="h-8 w-8 gap-16" aria-hidden="true" />
                                </div>
                                <div className='col-span-2  flex justify-start items-center font-cabecera'> 
                                  <Link to="/CategoryxMayor" onClick={() => closeModal(false)}
                                      className="-mx-3 block rounded-lg px-1 text-[1.2rem] pb-4 font-bold leading-7 text-black hover:bg-gray-800"
                                  >
                                    Catalogo x Mayor
                                  </Link>
                                </div> 
                                
                                {/* 4 fila  */}                   
                                                           
                                                   


                                                                                  
                              </div>                                      
                            </Dialog.Panel>                        
                          </div>
                      </Dialog>
      </Transition>

    </header>
  )
}
