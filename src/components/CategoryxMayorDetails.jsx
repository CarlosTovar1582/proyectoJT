
import React, { useContext,Fragment, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";



import { clsx } from 'clsx'
import { Link } from 'react-router-dom'
import { useLocation,useParams } from 'react-router-dom'
//import  DetailsProducts  from './DetailsProducts'
//import CategoryProducts from './CategoryProducts'

import App from '../App'

import { Dialog, Popover, Tab, Transition, RadioGroup,Disclosure,Button } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon,
  PlusIcon,MinusIcon,TrashIcon } from '@heroicons/react/24/outline'

let nextId = 1;
//let valores ='hola como estas';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
//export default function CategoryxMayorDetails({ id,name,cantidad }) {
export default function CategoryxMayorDetails({ id,name,cantidad }) {

  //boton de agregado
  //let [isOpenModal, setIsOpenModal] = useState(true)
  //boton de agregado
  //function closeModal() {
    //setIsOpen(false)
  ///}




  const [artists, setArtists] = useState([]);

  const [radioValue, setRadioValue] = useState(0);
  const [label, setLabel] = useState(0);
  const [cart, setCart] = useContext(CartContext);
  const mensaje=''
  /*const addToCart = () => {
    setCart((artists));
    saveLocalStorag()
  };
  function saveLocalStorag (){
    localStorage.setItem('cart', JSON.stringify(cart))
  }*/
    function addToCart(item){
      //const itemExists = cart.findIndex(artists => artists.id === item.id)
      //console.log(itemExists)   
        //item.quantity=1
        //setCart([...cart ,item])    
         const mensaje=''
        if(item.length === 0 ) {
        
          document.getElementById("idmensaje").innerText='No se registro Producto alguno'
       
        }else{
          setCart([...cart ,item])  
       
          document.getElementById("idmensaje").innerText='Se envio al carrito los productos añadidos'
          //setIsOpen(true) 
        }
        
      
    }

   
    const onChange = (ev) => {
      //save your value here with state variable
      console.log(ev.target.value);
      setRadioValue(ev.target.value);
    };

    const onChangeNumero = (ev) => {
      //save your value here with state variable
      console.log(ev.target.value);
      setLabel(ev.target.value);
    };

    const onClick = (ev) => {
      //TO-DO SEND/click value
      console.log("radio value ", radioValue);
    };


    const params =useParams()
    const [value, setValue] = useState("")

 
    //const [name, setName] = useState('');
    //const [artists, setArtists] = useState([]);
    {/* tallas */}
    const TallasH = [
      {
        id: 1,
        name: 'Overol',
        href: '#',
        tallas: '2',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',      
      },
      {
        id: 2,
        name: '',
        href: '#',
        tallas: '4',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },  
      {
        id: 3,
        name: '',
        href: '#',
        tallas: '6',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 4,
        name: '',
        href: '#',
        tallas: '8',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 5,
        name: '',
        href: '#',
        tallas: '10',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 6,
        name: '',
        href: '#',
        tallas: '12',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 2,
        name: '',
        href: '#',
        tallas: '14',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      }, 
    ]
    const Colores = [
      {
        id: 1,
        name: 'Overol',
        href: '#',
        tallas: '2',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',      
      },
      {
        id: 2,
        name: '',
        href: '#',
        tallas: '4',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },  
      {
        id: 3,
        name: '',
        href: '#',
        tallas: '6',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 4,
        name: '',
        href: '#',
        tallas: '8',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 5,
        name: '',
        href: '#',
        tallas: '10',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 6,
        name: '',
        href: '#',
        tallas: '12',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      },
      {
        id: 2,
        name: '',
        href: '#',
        tallas: '14',
        description: '',
        imageSrc: 'https://i.postimg.cc/D0QPLB9r/intro5.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      }, 
    ]


    const ProductDetailsm =
    {
      categories: [
        //GRUPO1(1,2,3) Overol
        {
          id:'1',
          grupo:1,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Overol Perrito',
          href: '#',
          imageSrc: 'https://i.postimg.cc/mrZgwb7D/Overoln-1.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Overol Cristal',
              codigo:'Codigo',
              description: `
                          <p>   
                            <br>   
                            Precio S/ 232.00 x Paquete<br>                      
                          </p>
                           `, 
              formato1: 'Tallas (2,4,6,8) Precio x Mayor S/.38', 
              formato2: 'Tallas (10,12) Precio x Mayor S/.40',         
              href: '#',
              imageSrc: 'https://i.postimg.cc/mrZgwb7D/Overoln-1.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                
                  {
                    id:'1',
                    name: 'Caracteristicas',
                    items: [
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',         
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'Overol Moteado',
              description: `
                          <p>   
                            <br>   
                            Precio S/ 232.00 x Paquete<br>                         
                          </p>
                           `,   
              formato1: 'Tallas (2,4,6,8) Precio x Mayor S/.38', 
              formato2: 'Tallas (10,12) Precio x Mayor S/.40',      
              href: '#',
              imageSrc: 'https://i.postimg.cc/d0WtNz99/Overoln-2.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Caracteristicas',
                  items: [
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',         
                  ], 
              
                
                },    
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'Overol Celeste',
              description: `
                          <p>   
                            <br>   
                            Precio S/ 232.00 x Paquete<br>                     
                          </p>
                           `,  
              formato1: 'Tallas (2,4,6,8) Precio x Mayor S/.38', 
              formato2: 'Tallas (10,12) Precio x Mayor S/.40',                    
              href: '#',
              imageSrc: 'https://i.postimg.cc/8zmCMFJ9/Overoln-3.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Caracteristicas',
                  items: [
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',         
                  ], 
              
                
                },
                // More sections...
              ],
            },          
          ],      
        },     
        //GRUPO1(1)-Overol
        //GRUPO2(4)-Camisas
        {
          id:'4',
          grupo:2,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Camisa diseño 1',
          href: '#',
          imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
      
            {            
              id:'1',
              name: 'diseño',
              description: `
                          <p>   
                            <br>                 
                            diseñor
                          </p>
                           `,        
              href: '#',
              imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                
                  {
                    id:'1',
                    name: 'Caracteristicas',
                    items: [
                      '(*************)',
                      '(*********)',
                      '(*************)', 
                      '(***********)', 
                          
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },            
          ],      
        },
        //GRUPO2-Camisas
        //GRUPO3(5,6,7,8,9,10,11,12,13,14,15,16,17,21)-Casacas
        {
            id:'5',
            grupo:3,               
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            status: 'delivery',
            productName: 'Camisa diseño 2',
            href: '#',
            imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
            imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
            details: [
              {            
                id:'1',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  
                    {
                      id:'1',
                      name: 'Caracteristicas',
                      items: [
                        '(1)  [************]',
                        '(2)  [*********]',                                 
              
                      ], 
                  
                    
                    },     
                  // More sections...
                ],
              },
              
            ],      
        },
        {
            id:'6',
            grupo:3,               
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            status: 'delivery',
            productName: 'Camisa diseño 3',
            href: '#',
            imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
            imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
            details: [
              {            
                id:'1',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño             
                  <br>
                  
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  {
                    id:'1',
                    name: 'caracteristicas',
                    items: [
                      '*********',
                      '**********',
                                                 
                    ], 
                
                  
                  },
                 
                  // More sections...
                ],
              },
              {            
                id:'2',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño>                 
                  <br>
                  
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  {
                    id:'1',
                    name: 'caracteristicas',
                    items: [
                      '************',
                      '**********',
                      '**********',
                                  
                    ],
                  
                  },
                     
                  // More sections...
                ],
              },
              
            ],      
        },
        {
            id:'7',
            grupo:3,               
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            status: 'delivery',
            productName: 'Casacas diseño 3',
            href: '#',
            imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
            imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
            details: [
              {            
                id:'1',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño <br>                 
                  <br>
                  
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  {
                    id:'1',
                    name: 'caractersiticas',
                    items: [
                      '***********',
                      '*********',
                      '************',
                      '**********', 
                      '**********',                                                 
                    ], 
                
                  
                  },                    
                  // More sections...
                ],
              },
              
            ],      
        },
        //GRUPO3-Casacas
        //GRUPO4(18,19,23)-Jeans
        {
          id:'18',
          grupo:4,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Jeans diseño 1',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristicas',
                  items: [
                    '*******',                
                                                              
                  ], 
              
                
                },               
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño              
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracterstica',
                  items: [
                    '**************',                
                                                              
                  ], 
              
                
                },
              
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño               
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                                {
                    id:'1',
                    name: 'Caracteristicas',
                    items: [
                      '***********',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'4',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño                
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristicas',
                  items: [
                    '*****************',                
                                                              
                  ], 
              
                
                },                    
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'19',
          grupo:4,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Jeans diseño 2',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño               
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caractersiticas',
                  items: [
                    '************',                
                                                              
                  ], 
              
                
                },               
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño       
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caractersiticas',
                  items: [
                    '*************',                
                                                              
                  ], 
              
                
                },                
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'disewño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño             
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristicas',
                  items: [
                    '******************',                
                                                              
                  ], 
              
                
                },               
                // More sections...
              ],
            },
        
  
            
          ],      
        },
        {
          id:'23',
          grupo:4,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Jeans diseño 3 ',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño              
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caractersiticas',
                  items: [
                    '*********',
                    '*********',
                    '********',                
                                                              
                  ],               
                
                },
                   
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño             
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristica',
                  items: [
                    '*******',                
                                                              
                  ], 
              
                
                },
                
                // More sections...
              ],
            },
         
        
  
            
          ],      
        },
        //GRUPO4-Jeans  
      ],
    }
    const ProductDetailsf =
    {
      categories: [
        //GRUPO1(1,2,3) Overol
        {
          id:'1',
          grupo:1,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Overol con Polito',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Fsf8qXT9/Overolm-1.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'Overol Moteado',
              codigo:'Codigo',
              description: `
                          <p>   
                            <br>   
                            Precio S/ 313.00 x Paquete<br>                      
                          </p>
                           `, 
              formato1: 'Tallas (2,4,6,8) Precio x Mayor S/.38', 
              formato2: 'Tallas (10,12,14) Precio x Mayor S/.40', 
              formato3: 'Tallas (16) Precio x Mayor S/.41',       
              href: '#',
              imageSrc: 'https://i.postimg.cc/Fsf8qXT9/Overolm-1.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                
                  {
                    id:'1',
                    name: 'Caracteristicas',
                    items: [
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',
                      '- Caracteristicas 1',         
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'Overol Cristal',
              description: `
                          <p>   
                            <br>   
                            Precio S/ 313.00 x Paquete<br>                         
                          </p>
                           `,   
              formato1: 'Tallas (2,4,6,8) Precio x Mayor S/.38', 
              formato2: 'Tallas (10,12,14) Precio x Mayor S/.40', 
              formato3: 'Tallas (16) Precio x Mayor S/.41',        
              href: '#',
              imageSrc: 'https://i.postimg.cc/CL1QRggk/Overolm-2.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Caracteristicas',
                  items: [
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',         
                  ], 
              
                
                },    
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'Overol Celeste',
              description: `
                          <p>   
                            <br>   
                            Precio S/ 313.00 x Paquete<br>                     
                          </p>
                           `,  
              formato1: 'Tallas (2,4,6,8) Precio x Mayor S/.38', 
              formato2: 'Tallas (10,12,14) Precio x Mayor S/.40', 
              formato3: 'Tallas (16) Precio x Mayor S/.41',                   
              href: '#',
              imageSrc: 'https://i.postimg.cc/Qxyn5y8P/Overolm-3.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'Caracteristicas',
                  items: [
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',
                    '- Caracteristicas 1',         
                  ], 
              
                
                },
                // More sections...
              ],
            },          
          ],      
        },     
        //GRUPO1(1)-Overol
        //GRUPO2(4)-Camisas
        {
          id:'4',
          grupo:2,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Camisa diseño 1',
          href: '#',
          imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
      
            {            
              id:'1',
              name: 'diseño',
              description: `
                          <p>   
                            <br>                 
                            diseñor
                          </p>
                           `,        
              href: '#',
              imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                
                  {
                    id:'1',
                    name: 'Caracteristicas',
                    items: [
                      '(*************)',
                      '(*********)',
                      '(*************)', 
                      '(***********)', 
                          
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },            
          ],      
        },
        //GRUPO2-Camisas
        //GRUPO3(5,6,7,8,9,10,11,12,13,14,15,16,17,21)-Casacas
        {
            id:'5',
            grupo:3,               
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            status: 'delivery',
            productName: 'Camisa diseño 2',
            href: '#',
            imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
            imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
            details: [
              {            
                id:'1',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  
                    {
                      id:'1',
                      name: 'Caracteristicas',
                      items: [
                        '(1)  [************]',
                        '(2)  [*********]',                                 
              
                      ], 
                  
                    
                    },     
                  // More sections...
                ],
              },
              
            ],      
        },
        {
            id:'6',
            grupo:3,               
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            status: 'delivery',
            productName: 'Camisa diseño 3',
            href: '#',
            imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
            imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
            details: [
              {            
                id:'1',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño             
                  <br>
                  
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  {
                    id:'1',
                    name: 'caracteristicas',
                    items: [
                      '*********',
                      '**********',
                                                 
                    ], 
                
                  
                  },
                 
                  // More sections...
                ],
              },
              {            
                id:'2',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño>                 
                  <br>
                  
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  {
                    id:'1',
                    name: 'caracteristicas',
                    items: [
                      '************',
                      '**********',
                      '**********',
                                  
                    ],
                  
                  },
                     
                  // More sections...
                ],
              },
              
            ],      
        },
        {
            id:'7',
            grupo:3,               
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            status: 'delivery',
            productName: 'Casacas diseño 3',
            href: '#',
            imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
            imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
            details: [
              {            
                id:'1',
                name: 'diseño',
                codigo:'Codigo',
                description: ` 
                <p>   
                  diseño <br>                 
                  <br>
                  
                </p>
              `,           
                href: '#',
                imageSrc: 'https://i.postimg.cc/VLSksrHw/intro9.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                anidado: [
                  {
                    id:'1',
                    name: 'caractersiticas',
                    items: [
                      '***********',
                      '*********',
                      '************',
                      '**********', 
                      '**********',                                                 
                    ], 
                
                  
                  },                    
                  // More sections...
                ],
              },
              
            ],      
        },
        //GRUPO3-Casacas
        //GRUPO4(18,19,23)-Jeans
        {
          id:'18',
          grupo:4,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Jeans diseño 1',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño                 
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristicas',
                  items: [
                    '*******',                
                                                              
                  ], 
              
                
                },               
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño              
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracterstica',
                  items: [
                    '**************',                
                                                              
                  ], 
              
                
                },
              
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño               
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                                {
                    id:'1',
                    name: 'Caracteristicas',
                    items: [
                      '***********',                                               
            
                    ], 
                
                  
                  },     
                // More sections...
              ],
            },
            {            
              id:'4',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño                
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristicas',
                  items: [
                    '*****************',                
                                                              
                  ], 
              
                
                },                    
                // More sections...
              ],
            },
            
          ],      
        },
        {
          id:'19',
          grupo:4,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Jeans diseño 2',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño               
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caractersiticas',
                  items: [
                    '************',                
                                                              
                  ], 
              
                
                },               
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño       
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caractersiticas',
                  items: [
                    '*************',                
                                                              
                  ], 
              
                
                },                
                // More sections...
              ],
            },
            {            
              id:'3',
              name: 'disewño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño             
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristicas',
                  items: [
                    '******************',                
                                                              
                  ], 
              
                
                },               
                // More sections...
              ],
            },
        
  
            
          ],      
        },
        {
          id:'23',
          grupo:4,               
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          status: 'delivery',
          productName: 'Jeans diseño 3 ',
          href: '#',
          imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
          imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
          details: [
            {            
              id:'1',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño              
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caractersiticas',
                  items: [
                    '*********',
                    '*********',
                    '********',                
                                                              
                  ],               
                
                },
                   
                // More sections...
              ],
            },
            {            
              id:'2',
              name: 'diseño',
              codigo:'Codigo',
              description: ` 
              <p>   
              diseño             
                <br>
                
              </p>
            `,           
              href: '#',
              imageSrc: 'https://i.postimg.cc/Jn4RfGB9/intro14.jpg',
              imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              anidado: [
                {
                  id:'1',
                  name: 'caracteristica',
                  items: [
                    '*******',                
                                                              
                  ], 
              
                
                },
                
                // More sections...
              ],
            },
         
        
  
            
          ],      
        },
        //GRUPO4-Jeans  
      ],
    }





    const product = 
  {
    name: 'Conmutador Salzer',
    id:1,
    grupo:1,
    price: '',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://i.postimg.cc/GmY9FS66/Conmutador1.png',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
          id: 2,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
          id: 3,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
          id: 4,
          name: 'Angled view',
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
          alt: 'Angled front view with bag zipped and handles upright.',
      },
      // More images...
    ],
    colors: [
      { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
      <p>      
        Polos -2,3 y 4<br>
        Intensidad Nominal -16A -400A<br>
        Tension Maxima - 600V AC
      </p>
                `,
    details: [
      {
        name: 'Codigo',
        items: [
          '(1)  S16-61026',
          '(2)  S16-61027',
          '(3)  S16-61028',
          '(4)  S16-61361',
          '(5)  S16-61363',
          '(6)  S16-61039',        
        ], 
    
      
      },
      {
          name: 'Nombre',
          items: [
            '(1)  Conmutador de Linea 1-0-2 ,2 polos 16 amp',
            '(2)  Conmutador de Linea 1-0-2 ,3 polos 16 amp',
            '(3)  Conmutador de Linea 1-0-2 ,4 polos 16 amp',
            '(4)  Conmutador de Linea 1-0-2 ,1 polos 16 amp con Retorno al centro',
            '(5)  Conmutador de Linea 1-0-2 ,3 polos 16 amp con Retorno al centro',
            '(6)  Conmutador de Linea 1-2 , 3 polos 16 amp , sin cero',          
          ], 
      
        
        },
        {
          name: 'Caracteristicas',
          items: [
            '(1)  [CSA/UL 240/1HP]',
            '(2)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
            '(3)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
            '(4)  [CSA/UL 240/1HP]',
            '(5)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',
            '(6)  [CSA/UL 240/3HP - AC3 415V 5.5KW]',         
          ], 
      
        
        },     
      // More sections...
    ],
    }

    const [open, setOpen] = useState(false)
    const [parametro, setParametro] = useState(false)
    const [parametroDetalle, setParametroDetalle] = useState(false)
    let [isOpen, setIsOpen] = useState(false) 
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [contador, setContador] = useState(false) 

    function closeModal() {
      setIsOpen(false)
    }
   
    function openModal(a) {
      setIsOpen(true)  
      setParametro(a) 
    }
    //const [selectedColor, setSelectedColor] = useState(item.id[0])
    function valorSeleccionado(item) 
    {
      setParametroDetalle(true) 
      setParametroDetalle(item)    
    }
    let calculo=1
    function restarNumero(){
      if(calculo >- -1){
        calculo -=1
        document.getElementById("monto").innerText=calculo
        //document.getElementById("cantidadTotal").innerText=calculo
      }

    } 
    function sumarNumero(){
      if(calculo<10){
        calculo +=1
        document.getElementById("monto").innerText=calculo
        //document.getElementById("cantidadTotal").innerText=calculo
      }
      
    }
    const Carrito = [
      {
        Nombre: 'producto 1',
        Monto: 100.0
      },
      {
        Nombre: 'producto 2',
        Monto: 150.0
      },
      {
        Nombre: 'producto 3',
        Monto: 200.0
      }
    ];

    function finalizarCompra(){
      let productosParaWsp = Carrito.map(producto => `- ${producto.Nombre}, $${producto.Monto}`); // Le añadimos un guión delante del nombre y también el monto
      const productosConFormatoAmigable = productosParaWsp.join('\n'); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
      //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
       window.location.href = 'https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + productosConFormatoAmigable // Comento esta línea para no redirigir realmente en este ejemplo
    }

    
    function enviarMensaje(){
      let productosParaWsp = 
      artists.map(artist => 
        //`${sentence1}{Alt>}{Enter}{/Alt}${sentence2}`
        ` [  ${artist.name} - (${artist.cantidad}) Paquetes ]`

      ); // Le añadimos un guión delante del nombre y también el monto
       // it should not
      //"Hole" + "\n" + "Línea Siguiente"
      let sex
      const productosConFormatoAmigable = productosParaWsp.join('\n') ; // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
      //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
      { params.sexo === '1' ? (
        sex="Niño"
        ):  
        sex="Niña"
        }
       window.location.href ='https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos%20para'+ '  ' + sex + ' : ' + productosConFormatoAmigable // Comento esta línea para no redirigir realmente en este ejemplo
    }


  return (
    <div className="bg-white py-8 font-mono text-xl">  
    <main
      className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-2 border-slate-800 rounded-3xl"
      aria-labelledby="order-history-heading  " 
    >  {/* Menu Principal */}      
        <div className="max-w-xl">
      
          <h1 id="order-history-heading" className="text-3xl font-bold tracking-tight text-gray-900 font-cabecera">
            { /* Lista de {params.id}  {params.name} && '1' == params.sexo   */}
            {'1' == params.id   ? ( 
                  "Lista de Overoles" 
              ) : null }
            {'2' == params.id  ? (      
                    "Lista de Camisas "
              ) : null}
            {'3' == params.id   ? (      
                    "Lista de Casacas"
              ) : null}
            {'4' == params.id   ? (      
                    "Lista de Jeans"
              ) : null}         
            
                
          </h1>
          <p className="mt-2 text-sm text-gray-500">               
          </p>         
        </div>
        <div className=" mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 
        lg:gap-x-8 xl:grid-cols-4 ">
      
          { params.sexo === '1' ? (
              ProductDetailsm.categories.map((order) => (
                order.grupo == params.id ? (
              <div key={order.id}  className="group relative object-center">              
                        <div  className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                            <button
                                    
                                    type="button"
                                    onClick={()=> openModal(order.id)} 
                                    className=''                       
                                  >
                              <img src={order.imageSrc} alt={order.imageAlt} className="w-auto h-auto object-cover object-center rounded-3xl  " /> 
                            </button>              
                      </div>
                    
                {order.grupo == params.id ? (
                  <h3  className="mt-4 text-sm text-gray-500 text-center ...">
                    <a href={order.href}>
                      <span className="absolute justify-center" />
                        {order.productName}
                      </a> 
                  </h3>
                ) : null}            
              </div>
              ):null 
            )) 
          ): 
              ProductDetailsf.categories.map((order) => (
                order.grupo == params.id ? (
              <div key={order.id}  className="group relative object-center">              
                        <div  className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                            <button
                                    
                                    type="button"
                                    onClick={()=> openModal(order.id)} 
                                    className=''                       
                                  >
                              <img src={order.imageSrc} alt={order.imageAlt} className="w-auto h-auto object-cover object-center rounded-3xl  " /> 
                            </button>              
                      </div>
                    
                {order.grupo == params.id ? (
                  <h3  className="mt-4 text-sm text-gray-500 text-center ...">
                    <a href={order.href}>
                      <span className="absolute justify-center" />
                        {order.productName}
                      </a> 
                  </h3>
                ) : null}            
              </div>
              ):null 
            ))  
              
          }
           
      
        </div>

        {/* AbrirPopalModel */}           
         <Transition appear show={isOpen} as={Fragment} onClose={setOpen}>
                      <Dialog as="div" className="relative z-10 border-2 border-cyan-500" onClose={closeModal}>
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

                        <div className="fixed inset-0 overflow-y-auto">
                          <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                            >
                              <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden border-slate-900 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <div className="bg-white">
                                <div className="mx-auto max-w-6xl   sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-2  rounded-3xl ">
                                  <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                                    <button
                                      type="button"
                                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                      onClick={() => closeModal(false)}
                                    >
                                      <span className="sr-only">Close</span>
                                      <XMarkIcon className="h-10 w-10 font-bold bg-slate-950 text-white rounded-full" aria-hidden="true" />
                                    </button>
                                    {/* Image gallery */}
                                        <Tab.Group as="div" className="flex flex-col-reverse">
                                          {/* Image selector */}
                                          <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none pl-4">
                                            {/* Aqui se las imagenes chicas */}
                                            <Tab.List className="grid grid-cols-4 gap-6">
                                            { params.sexo === '1' ? (
                                             
                                              ProductDetailsm.categories.map((image)=> (
                                                image.grupo == params.id && image.id==parametro ? ( 
                                                      image.details.map((item, itemIdx,{selected}) => ( 
                                                        
                                                        
                                                        <Tab
                                                          key={item.id}
                                                          className="relative flex h-24 cursor-pointer items-center justify-center rounded-md 
                                                          bg-white text-sm font-medium uppercase text-gray-900 
                                                          hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                          onLoad={
                                                            item.id=='1' ? (
                                                            ()=> valorSeleccionado(item)
                                                            ):null                                                          
                                                          }
                                                        >                                                      
                                                          <div key={item.id}   >
                                                            <span  className="sr-only">{item.subGrupo}</span>
                                                            <span  className="sr-only">{item.name}</span>
                                                            
                                                            <span className="absolute inset-0 overflow-hidden rounded-md"  >
                                                                
                                                                <img onClick={()=> valorSeleccionado(item) }  src={item.imageSrc} alt="" 
                                                                className="h-full w-full object-cover object-center" />
                                                                                                                 
                                                            </span>
                                                            <span
                                                              className={classNames(
                                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                                              )}
                                                              aria-hidden="true"
                                                            />
                                                          </div>
                                                      
                                                              
                                                        </Tab>    
                                                                                                      
                                                      ))
                                                  ):null            
                                              ))
                                              ):  
                                              ProductDetailsf.categories.map((image)=> (
                                                image.grupo == params.id && image.id==parametro ? ( 
                                                      image.details.map((item, itemIdx,{selected}) => ( 
                                                        
                                                        
                                                        <Tab
                                                          key={item.id}
                                                          className="relative flex h-24 cursor-pointer items-center justify-center rounded-md 
                                                          bg-white text-sm font-medium uppercase text-gray-900 
                                                          hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                          onLoad={
                                                            item.id=='1' ? (
                                                            ()=> valorSeleccionado(item)
                                                            ):null                                                          
                                                          }
                                                        >                                                      
                                                          <div key={item.id}   >
                                                            <span  className="sr-only">{item.subGrupo}</span>
                                                            <span  className="sr-only">{item.name}</span>
                                                            
                                                            <span className="absolute inset-0 overflow-hidden rounded-md"  >
                                                                
                                                                <img onClick={()=> valorSeleccionado(item) }  src={item.imageSrc} alt="" 
                                                                className="h-full w-full object-cover object-center" />
                                                                                                                 
                                                            </span>
                                                            <span
                                                              className={classNames(
                                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                                              )}
                                                              aria-hidden="true"
                                                            />
                                                          </div>
                                                      
                                                              
                                                        </Tab>    
                                                                                                      
                                                      ))
                                                  ):null            
                                              ))
             
                                            }

                                            </Tab.List>
                                            {/* Aqui se las imagenes chicas */}
                                          </div>
                                          {/* Aqui se almacena la imagen grande */}
                                          <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">  

                                          { params.sexo === '1' ? (
                                            ProductDetailsm.categories.map((image)=> (
                                              image.grupo == params.id && image.id==parametro ? (  
                                                image.details.map((item, itemIdx) => (
                                                <Tab.Panel key={item.id}>  
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="h-full w-full object-cover object-center rounded-3xl"
                                                  />                                                   
                                                </Tab.Panel>
                                                ))
                                              ):null 
                                            ))
                                            ):
                                            ProductDetailsf.categories.map((image)=> (
                                              image.grupo == params.id && image.id==parametro ? (  
                                                image.details.map((item, itemIdx) => (
                                                <Tab.Panel key={item.id}>  
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="h-full w-full object-cover object-center rounded-3xl"
                                                  />                                                   
                                                </Tab.Panel>
                                                ))
                                              ):null 
                                            ))  
                                          }                     

                                          </Tab.Panels>                                      
                                        </Tab.Group>
                                        {/* Product info  Levantamietno PopalModal*/}
                                        { //ProductDetails.categories.map((image)=> (
                                          //image.grupo == params.id && image.id==parametro ? ( 
                                            //image.details.map((item, itemIdx) => (
                                              
                                              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 ">
                                                  {
                                                    parametroDetalle.name
                                                  }
                                                  {/*parametroDetalle.name=='' ? ('mel'):
                                                    ProductDetails.categories.map((image)=> (
                                                      image.grupo == params.id && image.id==parametro ? ( 
                                                          image.details.map((item, itemIdx) => ( 
                                                            item.id=='1' ? (item.name):null
                                                            
                                                          ))
                                                      ):null            
                                                    ))                                                  
                                                          */}   
                                                </h1>                                               
                                                <div className="mt-3">
                                                  <h3 className="sr-only">Reviews</h3>
                                                  <div className="flex items-center"> 
                                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                                  </div>
                                                </div>
                                                <div
                                                  className="space-y-6 text-base text-gray-700 font-cabecera text-red-500"
                                                  dangerouslySetInnerHTML={{ __html: parametroDetalle.description }}
                                                /> 
                                                <div
                                                  className="space-y-6 text-base text-gray-700 font-cabecera text-black"
                                                  dangerouslySetInnerHTML={{ __html: parametroDetalle.formato1 }}
                                                /> 
                                                <div
                                                  className="space-y-6 text-base text-gray-700 font-cabecera text-black"
                                                  dangerouslySetInnerHTML={{ __html: parametroDetalle.formato2 }}
                                                />
                                                <div
                                                  className="space-y-6 text-base text-gray-700 font-cabecera text-black"
                                                  dangerouslySetInnerHTML={{ __html: parametroDetalle.formato3 }}
                                                />                                  
                                                {/* Contador */}                                              
                                                <div className='flex items-start justify-start text-2xl font-mono text-base pt-2 '>
                                                  <h1 className='content-center pt-2 pr-4'>Paquetes</h1>
                                                  <div className='grid grid-cols-3  text-1xl '>
                                                      <div className='col-span-1 border-2 border-slate-200 rounded'>                                                      
                                                        <Button className="rounded  py-2 px-4 text-sm text-black data-[hover]:bg-slate-950 hover:text-white
                                                        data-[active]:bg-sky-700 h-10 w-10"
                                                        onClick={restarNumero}>
                                                          -
                                                        </Button>                                                     
                                                      </div>
                                                      <div className='col-span-1' >  
                                                      {/*text-2xl pt-2 text-center text-black
                                                      
                                                      className={clsx(
                                                          'text-2xl pt-2 text-center text-black',
                                                          calculo ,
                                                        )}
                                                      */ }
                                                        <h1  id='monto'  className='text-2xl pt-2 text-center text-slate-700' >{calculo}</h1>                                              
                                                      </div>
                                                      <div className='col-span-1 border-2 border-slate-200 rounded'>                                                      
                                                        <Button className="rounded  py-2 px-4 text-sm text-black data-[hover]:bg-slate-950 hover:text-white
                                                        data-[active]:bg-sky-700 h-10 w-10"
                                                        onClick={sumarNumero}>
                                                          +
                                                        </Button>                                                     
                                                      </div>                                                      
                                                      
                                                  </div>
                                                </div>                                                  
                                                {/* Contador */} 
                                                {/* Añadir y Limpiar */}   
                                                <div className='flex max-w-xs items-start justify-start text-2xl font-mono text-base pt-2 pb-6 '>
                                                  <div className='grid grid-cols-2 '>
                                                    <div className='col-span-1 flex items-center'>
                                                      <button
                                                        type="button"
                                                        className="flex flex-1 items-center justify-center  
                                                        rounded-md border  border-black bg-white px-8  
                                                        text-base font-medium text-black hover:bg-slate-900  hover:text-white
                                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                                        focus:ring-offset-2 focus:ring-offset-gray-50 w-24"
                                                        onClick={() => {
                                                          setArtists([
                                                            ...artists,
                                                            { id: nextId++, name: parametroDetalle.name,cantidad:calculo }
                                                          ]);
                                                          document.getElementById("monto").innerText=1                                                                                                  
                                                        }}
                                                        
                                                        >                                                
                                                              Añadir                                                
                                                      </button>    
                                                    </div>
                                                    
                                                    <div className='col-span-1 flex items-center pl-4'>
                                                   
                                                    </div>                                                
                                                  </div>   
                                                </div>
                                                {/* Añadir y Limpiar */}
                                                {/* Mostrar Datos */}   
                                          
                                                <ul className=' '>
                                                {artists.map(artist => (
                                                  <li key={artist.id}>
                                                    <div className='flex max-w-xs items-center justify-star text-[0.9rem] sm:text-[1.1rem] font-mono  '>
                                                      <div className='grid grid-cols-8 font-cabecera  '>
                                                        <div className='col-span-1 font-bold text-black '>Color:</div>
                                                        <div className='col-span-3 text-center '>
                                                          {artist.name}{' '}
                                                        </div>
                                                        <div className='col-span-1 font-bold text-black '>Cant.:</div>
                                                        <div className='col-span-1 pl-4 '>
                                                          {artist.cantidad}{' '}
                                                        </div>                                                   
                                                        <div className='col-span-1 font-bold text-black '> 
                                                            <button className=' text-red-700    rounded-2xl pl-2 pr-2'  onClick={() => {
                                                              setArtists(
                                                                artists.filter(a =>
                                                                  a.id !== artist.id
                                                                )
                                                              );
                                                            }}>
                                                              <TrashIcon className="h-5 w-5 font-bold" aria-hidden="true" />
                                                            </button>
                                                        </div> 
                                                      </div>
                                                    </div>
                                                   
                                                   
                                                  </li>
                                                ))}
                                                </ul>
                                               
                                                {/* Mostrar Datos */}                                       
                                       
                                       
                                       
                                                  
                                                {/*  <p  id='cantidadTotal'>{calculo}</p>  <p>{radioValue}</p>  */}
                                                 
                                                                               
                                                
                                                  {/*  
                                                  <button onClick={() => {
                                                      artists.push({
                                                        id: nextId++,
                                                        name: name,
                                                      });
                                                    }}>Añadir</button>
                                                    <ul>
                                                      {artists.map(artist => (
                                                        <li key={artist.id}>{artist.name}</li>
                                                      ))}
                                                    </ul>
                                                  
                                                  */}  
                                        <form className="mt-6">
                                          {/* Colors */}
                                          <div>
                                            <h3 className="text-sm text-gray-600"></h3>

                                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                              <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                              <span className="flex items-center space-x-3">
                                              
                                                              
                                              </span>
                                            </RadioGroup>
                                          </div>
                                          <div className="flex">                                
                                          {/*
                                            <button 
                                              as={Link} to="/SectionsContact"                                            
                                              type="button"
                                              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                            >
                                             
                                                Cotizar
                                            https://api.whatsapp.com/send?phone=986701992
                                                        </button> 
                                                        {`diets/${item.id}`}
                                                        href="https://api.whatsapp.com/send?phone=51997373676&text="'{valores}' 
                                                        
                                                                 <a
                                                      href={`https://api.whatsapp.com/send?phone=51997373676&text=${
                                                        <ul className='border-2 border-slate-900 rounded-2xl pl-4'>
                                                        {artists.map(artist => (
                                                          <li key={artist.id}>                                                       
                                                                  {artist.name}{' '}                                                    
                                                          
                                                          </li>
                                                        ))}
                                                        </ul>
                                                      }`}                                             
                                                    >
                                                        
                                                        */ }
                                             
                                              <button
                                              type="button"
                                              //onClick={enviarMensaje}
                                              /*       artists.map(artist => (
                                                  //`${sentence1}{Alt>}{Enter}{/Alt}${sentence2}`
                                                  //const {id,color,cantidad}=carrito
                                                   artist.id,
                                                   artist.name,
                                                   artist.cantidad
                                          
                                                ))           */
                                              //onClick={() => setCart(prevCart => [...prevCart,artists])}
                                              //onClick={() => setCart(prevCart =>[prevCart ,artists])}
                                              //onClick={() => setCart(artists)}
                                              onClick={() => addToCart(artists)}
                                              className="flex max-w-xs flex-1 items-center justify-center rounded-md 
                                              border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                              >  
                                                                                        
                                                    Carrito
                                                
                                              </button>
                                          </div>
                                          <h2  id='idmensaje'  className='text-1xl font-cabecera font bold pt-2 text-center text-red-700' >{mensaje}</h2>

                                        </form>
                                        <section aria-labelledby="details-heading" className="mt-12">
                                          <h2 id="details-heading" className="sr-only">
                                            Additional details
                                          </h2>

                                          <div className="divide-y divide-gray-200 border-t ">
                                            
                                          {params.sexo === '1' ? (
                                              ProductDetailsm.categories.map((image)=> (                                               
                                           
                                                image.grupo == params.id && image.id==parametro ? ( 
                                                  image.details.map((item, itemIdx) => (
                                                    parametroDetalle.id==item.id ? ( 
                                                      item.anidado.map((valor, itemIdx) => (
                                                        //valor.id =='1' ? ( 
                                                          <Disclosure as="div" key={itemIdx}>
                                                           {({ open }) => (
                                                              <>
                                                                <h3>
                                                                  <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                                    <span 
                                                                      className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                                                    >                                                                     
                                                                        {valor.name}
                                                                    </span>
                                                                    <span className="ml-6 flex items-center">
                                                                      {open ? (
                                                                        <MinusIcon
                                                                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                                          aria-hidden="true"
                                                                        />
                                                                      ) : (
                                                                        <PlusIcon
                                                                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                          aria-hidden="true"
                                                                        />
                                                                      )}
                                                                    </span> 


                                                                  </Disclosure.Button>
                                                                </h3>
                                                                {/*  Acoordion    */}
                                                                { /*condition ? <Component /> : null. */ }  
                                                                    <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                                                                      {valor.items.map((am, itemIdx) => (  
                                                                        <ul role="list" key={itemIdx}>
                                                                                           <li className='font-mono text-sm' key={am}>{am}</li>
                                                                                         
                                                                        </ul>
                                                                      ))}
                                                                     
                                                                    </Disclosure.Panel>
                                                      
                                                                {/*  Acoordion    */}
                                                              
                                                              </>
                                                                
                                                            )}
                                                          </Disclosure>   
                                                        //):null
                                                      ))
                                                    ):null    
                                                  ))
                                                ):null 
                                            ))
                                            ):  
                                            ProductDetailsf.categories.map((image)=> (                                               
                                           
                                              image.grupo == params.id && image.id==parametro ? ( 
                                                image.details.map((item, itemIdx) => (
                                                  parametroDetalle.id==item.id ? ( 
                                                    item.anidado.map((valor, itemIdx) => (
                                                      //valor.id =='1' ? ( 
                                                        <Disclosure as="div" key={itemIdx}>
                                                         {({ open }) => (
                                                            <>
                                                              <h3>
                                                                <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                                  <span 
                                                                    className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                                                  >                                                                     
                                                                      {valor.name}
                                                                  </span>
                                                                  <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                      <MinusIcon
                                                                        className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                                        aria-hidden="true"
                                                                      />
                                                                    ) : (
                                                                      <PlusIcon
                                                                        className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                        aria-hidden="true"
                                                                      />
                                                                    )}
                                                                  </span> 


                                                                </Disclosure.Button>
                                                              </h3>
                                                              {/*  Acoordion    */}
                                                              { /*condition ? <Component /> : null. */ }  
                                                                  <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                                                                    {valor.items.map((am, itemIdx) => (  
                                                                      <ul role="list" key={itemIdx}>
                                                                                         <li className='font-mono text-sm' key={am}>{am}</li>
                                                                                       
                                                                      </ul>
                                                                    ))}
                                                                   
                                                                  </Disclosure.Panel>
                                                    
                                                              {/*  Acoordion    */}
                                                            
                                                            </>
                                                              
                                                          )}
                                                        </Disclosure>   
                                                      //):null
                                                    ))
                                                  ):null    
                                                ))
                                              ):null 
                                          ))
                                          }

                                          </div>
                                        </section>                      
                                           
                                                 
                                                  
                                              </div>
                                            //))
                                           //):null
                                        //))
                                      }
                                  </div>
                                </div>
                              </div>                    
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
        </Transition>
        {/* AbrirPopalModel */}

        {/* Levantar Modal de aceptado  
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Se agrego de forma correcta
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition>
        
        */}
        
        {/* Levantar Modal de aceptado  */}
      
    </main>
  

    </div>
  )
}
