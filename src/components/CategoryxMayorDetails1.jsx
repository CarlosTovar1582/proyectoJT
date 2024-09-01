import React, { useContext, Fragment, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

//import { FacebookShareButton, FacebookIcon } from "react-share";

import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
//import  DetailsProducts  from './DetailsProducts'
//import CategoryProducts from './CategoryProducts'

import App from "../App";

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
  HomeIcon,
} from "@heroicons/react/24/outline";

let nextId = 1;
//let valores ='hola como estas';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//export default function CategoryxMayorDetails({ id,name,cantidad }) {
export default function CategoryxMayorDetails({ id, name, cantidad }) {
  //boton de agregado
  //let [isOpenModal, setIsOpenModal] = useState(true)
  //boton de agregado
  //function closeModal() {
  //setIsOpen(false)
  ///}

  const [activeIndex, setActiveIndex] = useState(2);
  // "null" por defecto, para indicar que no hay elemento activo al principio

  // con este handler actualizo el indice activo cada vez que
  // presiona click sobre alguno de los elementos:
  //let tallas
  //onClickHandlerLoad

  const onClickHandler = (index) => {
    setActiveIndex(index);
  };

  function Container({ active, onClick, id }) {
    // cada container recibe una propiedad booleana "active"
    // si la propiedad es "true", se agrega la clase "active" al elemento.
    // adicionalmente se añade un listener al evento click:
    //console.log(active) //true o false
    //console.log(id) //valorseclecionado
    //active=true
    //console.log(active)
    //console.log(onClick)
    //console.log(id)

    return (
      <div
        key={id}
        className={`rounded-lg  bg-black text-white  text-center h-6 w-10  ${
          active
            ? "active"
            : "text-black bg-slate-300 text-center  h-6 w-10 container rounded-lg"
        }`}
        onClick={onClick}
      >
        {id}
      </div>
    );
  }

  const [artists, setArtists] = useState([]);

  const [radioValue, setRadioValue] = useState(0);
  const [label, setLabel] = useState(0);
  const [cart, setCart] = useContext(CartContext);
  const mensaje = "";
  const [valueSeleccion, setValueSeleccion] = useState("2");
  /*const addToCart = () => {
    setCart((artists));
    saveLocalStorag()
  };
  function saveLocalStorag (){
    localStorage.setItem('cart', JSON.stringify(cart))
  }*/
  function addToCart(artists) {
    //function addToCart(id,name,cantidad){
    //const itemExists = cart.findIndex(artists => artists.id === item.id)
    //console.log(itemExists)
    //item.quantity=1
    //setCart([...cart ,item])
    //setArtists([
    // ...artists,
    // { id: id, name: name,cantidad:cantidad }
    // ]);

    //  const mensaje=''
    if (activeIndex === null) {
      document.getElementById("idmensaje").innerText =
        "Se Requiere seleccionar una talla";
      //console.log(artists)
    } else {
      setCart([...cart, artists]);
      //console.log(cart)
      document.getElementById("idmensaje").innerText = "Se envio al carrito";
      //setIsOpen(true)
    }
    //setCart([...cart ,artists])
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

  const params = useParams();
  const [value, setValue] = useState("");

  //const [name, setName] = useState('');
  //const [artists, setArtists] = useState([]);
  {
    /* tallas */
  }
  const TallasH = [
    {
      id: 1,
      name: "Overol",
      href: "#",
      tallas: "2",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      name: "",
      href: "#",
      tallas: "4",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "",
      href: "#",
      tallas: "6",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 4,
      name: "",
      href: "#",
      tallas: "8",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 5,
      name: "",
      href: "#",
      tallas: "10",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 6,
      name: "",
      href: "#",
      tallas: "12",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 2,
      name: "",
      href: "#",
      tallas: "14",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
  ];
  const Colores = [
    {
      id: 1,
      name: "Overol",
      href: "#",
      tallas: "2",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      name: "",
      href: "#",
      tallas: "4",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "",
      href: "#",
      tallas: "6",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 4,
      name: "",
      href: "#",
      tallas: "8",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 5,
      name: "",
      href: "#",
      tallas: "10",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 6,
      name: "",
      href: "#",
      tallas: "12",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 2,
      name: "",
      href: "#",
      tallas: "14",
      description: "",
      imageSrc: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
  ];

  const ProductDetailsm = {
    categories: [
      //GRUPO(1) Casacas
      {
        id: "1",
        grupo: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casaca Drill",
        href: "#",
        imageSrc: "https://i.postimg.cc/mrZgwb7D/Overoln-1.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Overol (Cristal)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/mrZgwb7D/Overoln-1.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Overol (Moteado)",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/d0WtNz99/Overoln-2.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Overol (Celeste)",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/8zmCMFJ9/Overoln-3.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      //GRUPO(2) Bermudas
      {
        id: "2",
        grupo: 2,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Bemudas",
        href: "#",
        imageSrc: "https://i.postimg.cc/pT4hjrj8/Bermuda-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Bermuda (Cristal)",
            description: "Bemudas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/pT4hjrj8/Bermuda-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Bermuda (Moteado)",
            description: "Bemudas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/7627mSwX/Bermuda-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Bermuda (Maiz)",
            description: "Bemudas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/k4TrYRs6/Bermuda-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Bermuda (Celeste)",
            description: "Bemudas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/rm76L26M/Bermuda-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      //GRUPO(3) Short Tafeta
      {
        id: "3",
        grupo: 3,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Short Tafeta",
        href: "#",
        imageSrc: "https://i.postimg.cc/QMg8Jqzj/Tafeta-short-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Short Tafeta (Lacre)",
            description: "Short",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/QMg8Jqzj/Tafeta-short-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Short Tafeta (Acero)",
            description: "Short",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/xd9DnVsS/Tafeta-short-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Short Tafeta (Mostaza)",
            description: "Short",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/dtJxhj28/Tafeta-short-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Short Tafeta (Azul Noche)",
            description: "Short",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/6QVZ4nLv/Tafeta-short-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "5",
            name: "Short Tafeta (Negro)",
            description: "Short",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/4N5NcPrZ/Tafeta-short-05.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "6",
            name: "Short Tafeta (Beige)",
            description: "Short",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/3rZHfR9F/Tafeta-short-06.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      //GRUPO(4) Camisa Jeans
      {
        id: "4",
        grupo: 4,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Camisa Jeans",
        href: "#",
        imageSrc: "https://i.postimg.cc/fT68h4zT/Camisa-Jeans-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Camisa Jeans (Moteado)",
            description: "Camisa",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/fT68h4zT/Camisa-Jeans-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Camisa Jeans (Celeste)",
            description: "Camisa",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/Kj7tXWJ4/Camisa-Jeans-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Camisa Jeans (Maiz)",
            description: "Camisa",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/C1hgHBXt/Camisa-Jeans-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Camisa Jeans (Cristal)",
            description: "Camisa",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/tJPG93xs/Camisa-Jeans-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      //GRUPO(5) Conjuntos
      {
        id: "5",
        grupo: 5,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Camisa + Pantalon Cargo",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/Z5Fc1VwW/Conjunto-Camisa-Pantalon-Cargo-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Camisa Pantalon Cargo (Moteado)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Z5Fc1VwW/Conjunto-Camisa-Pantalon-Cargo-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Camisa Pantalon Cargo (Maiz)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Y91YWSTh/Conjunto-Camisa-Pantalon-Cargo-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Camisa Pantalon Cargo (Cristal)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/7hJvVpMG/Conjunto-Camisa-Pantalon-Cargo-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Conjunto Camisa Pantalon Cargo (Celeste)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/mkp50VVx/Conjunto-Camisa-Pantalon-Cargo-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "6",
        grupo: 5,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Camisa + Pantalon Jeans Strech",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/vZGyF8rb/ConjuntoCamisaPantalonStrech_01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Camisa + Pantalon Jeans Strech (Cristal)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/vZGyF8rb/ConjuntoCamisaPantalonStrech_01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Camisa + Pantalon Jeans Strech (Celeste)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/tRDtt2Bk/ConjuntoCamisaPantalonStrech_02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Camisa + Pantalon Jeans Strech (Maiz)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/QMLpxPM8/ConjuntoCamisaPantalonStrech_03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Conjunto Camisa + Pantalon Jeans Strech (Moteado)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/W3Tg0krx/ConjuntoCamisaPantalonStrech_04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "7",
        grupo: 5,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Jeans",
        href: "#",
        imageSrc: "https://i.postimg.cc/SszQNygR/Conjunto-Jeans-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Jeans (Negro)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/SszQNygR/Conjunto-Jeans-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Jeans (Celeste)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/sDJj2H4Y/Conjunto-Jeans-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Jeans (Cristal)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/Z57J89g0/Conjunto-Jeans-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Conjunto Jeans (Maiz)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/FKYNDr5p/Conjunto-Jeans-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "8",
        grupo: 5,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Jeans forro Beige",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/Nfv71D2C/Conjunto-Overol-Jeans-Forro-Beige-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Overol Forro Beige (Celeste)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Nfv71D2C/Conjunto-Overol-Jeans-Forro-Beige-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Overol Forro Beige (Cristal)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/D0ksPf04/Conjunto-Overol-Jeans-Forro-Beige-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Overol Forro Beige (Moteado)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/CKnzryWG/Conjunto-Overol-Jeans-Forro-Beige-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Conjunto Overol Forro Beige (Maiz)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/wTWM6Tz5/Conjunto-Overol-Jeans-Forro-Beige-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "9",
        grupo: 5,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Jeans forro Blanco",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/RFfMrKQh/Conjunto-Overol-Jeans-Forro-Blanco-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Overol Jeans forro Blanco(Cristal)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/RFfMrKQh/Conjunto-Overol-Jeans-Forro-Blanco-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Overol Jeans forro Blanco(Celeste)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/GhTxWp6N/Conjunto-Overol-Jeans-Forro-Blanco-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Overol Jeans forro Blanco(Maiz)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/NMLNCvTk/Conjunto-Overol-Jeans-Forro-Blanco-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Conjunto Overol Jeans forro Blanco(Moteado)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/gkKvhBLz/Conjunto-Overol-Jeans-Forro-Blanco-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "10",
        grupo: 5,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Drill",
        href: "#",
        imageSrc: "https://i.postimg.cc/s2DpjPTn/Conjunto-Drill-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Drill (Marron)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/s2DpjPTn/Conjunto-Drill-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Drill (Azul Noche)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/4x3dn8Th/Conjunto-Drill-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Drill (Beige)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/PrVHVTBP/Conjunto-Drill-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Conjunto Drill (Negro)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/qqCcfk14/Conjunto-Drill-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "5",
            name: "Conjunto Drill (Verde)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/BnwxvLR4/Conjunto-Drill-05.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "11",
        grupo: 5,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Jeans Clasico",
        href: "#",
        imageSrc: "https://i.postimg.cc/hPY5kjMQ/Conjunto-Jeans-Clasico-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Jeans Clasico (Cristal)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/hPY5kjMQ/Conjunto-Jeans-Clasico-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Jeans Clasico (Moteado)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/tg3vnzbF/Conjunto-Jeans-Clasico-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Jeans Clasico (Celeste)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/1tyCGNR2/Conjunto-Jeans-Clasico-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Conjunto Jeans Clasico (Maiz)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/8kKKv52X/Conjunto-Jeans-Clasico-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      //GRUPO(6) Pantalon
      {
        id: "12",
        grupo: 6,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalon Drill",
        href: "#",
        imageSrc: "https://i.postimg.cc/sDGzLtym/Pantalones-Drill-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Pantalon Drill (Marron)",
            description: "Pantalon",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/sDGzLtym/Pantalones-Drill-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Pantalon Drill (Verde)",
            description: "Pantalon",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/Y0bxfXDm/Pantalones-Drill-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Pantalon Drill (Azul Noche)",
            description: "Pantalon",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/hPZrX57k/Pantalones-Drill-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Pantalon Drill (Hueso)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/0QvdggLw/Pantalones-Drill-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "5",
            name: "Pantalon Drill (Negro)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/GpwvYw35/Pantalones-Drill-05.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "6",
            name: "Pantalon Drill (Beige)",
            description: "Conjunto",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/c19Yh84Y/Pantalones-Drill-06.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      //GRUPO(7) Casacas
      {
        id: "13",
        grupo: 7,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casacas Drill",
        href: "#",
        imageSrc: "https://i.postimg.cc/gJX97T68/Casacas-Drill-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Casacas Drill (Verde)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/gJX97T68/Casacas-Drill-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Casacas Drill (Beige)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/JzkP9CT1/Casacas-Drill-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Casacas Drill (Marron)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/yYwThr72/Casacas-Drill-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Casacas Drill (Azul Noche)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/7YT3LMS9/Casacas-Drill-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "5",
            name: "Casacas Drill (Negro)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/RC2PG0RP/Casacas-Drill-05.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "14",
        grupo: 7,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casacas Clasicas",
        href: "#",
        imageSrc: "https://i.postimg.cc/W1qq8257/Casacas-Clasicas-Jeans-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Casacas Clasicas (Celestes)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/W1qq8257/Casacas-Clasicas-Jeans-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Casacas Clasicas (Maiz)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/4dW3ZM8d/Casacas-Clasicas-Jeans-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Casacas Clasicas (Moteado)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/zfjzS6Yj/Casacas-Clasicas-Jeans-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Casacas Clasicas (Cristal)",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/RFYzgzsc/Casacas-Clasicas-Jeans-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "15",
        grupo: 7,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casacas Doble Cara (Jeans y Polar) ",
        href: "#",
        imageSrc: "https://i.postimg.cc/CKPQCs5t/Casaca-Doble-Cara-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Casacas Doble Cara Jeans y Polar (Cristal) ",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/CKPQCs5t/Casaca-Doble-Cara-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Casacas Doble Cara Jeans y Polar (Celeste) ",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/mkGN7PYJ/Casaca-Doble-Cara-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Casacas Doble Cara Jeans y Polar (Maiz) ",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/J7cj94c7/Casaca-Doble-Cara-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Casacas Doble Cara Jeans y Polar (Moteado) ",
            description: "Casacas",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/cLj3QKZh/Casaca-Doble-Cara-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "(*************)",
                  "(*********)",
                  "(*************)",
                  "(***********)",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
    ],
  };
  const ProductDetailsf = {
    categories: [
      //GRUPO(1) Overol
      {
        id: "1",
        grupo: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Pantalon Lola",
        href: "#",
        imageSrc: "https://i.postimg.cc/Fsf8qXT9/Overolm-1.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Overol Pantalon Lola(Moteado)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/2S4z8xns/Overol-Pantalon-Lola-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Overol Pantalon Lola(Cristal)",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/fbDM30KJ/Overol-Pantalon-Lola-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Overol Pantalon Lola(Celeste)",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Gt8R0PcS/Overol-Pantalon-Lola-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "2",
        grupo: 2,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casacas Jeans",
        href: "#",
        imageSrc: "https://i.postimg.cc/vmxZ96xy/Casaca-Jeans-Nina-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Casaca Jeans (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/vmxZ96xy/Casaca-Jeans-Nina-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Casaca Jeans (Moteado)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/6QrFD9DR/Casaca-Jeans-Nina-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Casaca Jeans (Celeste)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/wBQbwwmQ/Casaca-Jeans-Nina-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "3",
        grupo: 2,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casacas Drill",
        href: "#",
        imageSrc: "https://i.postimg.cc/nhGwVdh9/Casaca-Drill-Nina-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Casaca Drill (Verde)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/nhGwVdh9/Casaca-Drill-Nina-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Casaca Drill (Rojo)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/x8PbNbJ5/Casaca-Drill-Nina-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Casaca Drill (Rosa)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/rwDKMHJQ/Casaca-Drill-Nina-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "4",
            name: "Casaca Drill (Beige)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/yYdNyGws/Casaca-Drill-Nina-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "5",
            name: "Casaca Drill (Azul Noche)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/fTpMjRcf/Casaca-Drill-Nina-05.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "4",
        grupo: 3,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Lola",
        href: "#",
        imageSrc: "https://i.postimg.cc/RFfxC763/Conjunto-Overol-Nina-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Overol Lola (Cristal)",
            codigo: "Codigo",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/RFfxC763/Conjunto-Overol-Nina-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Overol Lola (Moteado)",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/DZD0HPV8/Conjunto-Overol-Nina-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Overol Lola (Celeste)",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/52MpYD7N/Conjunto-Overol-Nina-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "5",
        grupo: 3,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Lady",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/kGz1p4vx/Conjunto-Overol-Nina-Lady-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Overol Lady (Moteado)",
            codigo: "Codigo",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/kGz1p4vx/Conjunto-Overol-Nina-Lady-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Overol Lady (Celeste)",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/52cK5X0J/Conjunto-Overol-Nina-Lady-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Overol Lady (Cristal)",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/zf7d1pkD/Conjunto-Overol-Nina-Lady-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "6",
        grupo: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Pantalon Lady",
        href: "#",
        imageSrc: "https://i.postimg.cc/rmFq8nXf/Overol-Pantalon-Lady-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Overol Pantalon Lady(Celeste)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/rmFq8nXf/Overol-Pantalon-Lady-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Overol Pantalon Lady(Cristal)",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/t700VDwQ/Overol-Pantalon-Lady-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Overol Pantalon Lady(Moteado)",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/vBcHrqqc/Overol-Pantalon-Lady-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "7",
        grupo: 2,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casacas Jeans Forro Lila",
        href: "#",
        imageSrc: "https://i.postimg.cc/ZnbHsNNB/Casaca-Jeans-Forrolila-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Casacas Jeans Forro Lila (Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/sxHYnNyq/Casaca-Jeans-Forrolila-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Casacas Jeans Forro Lila (Cristal)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/m2q3CJmF/Casaca-Jeans-Forrolila-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Casacas Jeans Forro Lila (Moteado)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/657nWzB6/Casaca-Jeans-Forrolila-04.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "8",
        grupo: 4,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Vestidos",
        href: "#",
        imageSrc: "https://i.postimg.cc/zD4SR4tH/Vestidos-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Vestido (Moteado)",
            codigo: "Codigo",
            description: `Vestido`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/zD4SR4tH/Vestidos-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Vestido (Cristal)",
            description: `Vestido`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/pVKyq7VF/Vestidos-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Vestido (Celeste)",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/zfLGW2P3/Vestidos-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
      {
        id: "9",
        grupo: 3,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Princesa",
        href: "#",
        imageSrc: "https://i.postimg.cc/tCCyWmsy/Conjunto-Princesa-01.jpg",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            name: "Conjunto Princesa (Moteado)",
            codigo: "Codigo",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/tCCyWmsy/Conjunto-Princesa-01.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "2",
            name: "Conjunto Princesa (Celeste)",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/8z7SnJd0/Conjunto-Princesa-02.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
          {
            id: "3",
            name: "Conjunto Princesa (Cristal)",
            description: `Conjunto`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/0NmqPTBG/Conjunto-Princesa-03.jpg",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
            anidado: [
              {
                id: "1",
                name: "Caracteristicas",
                items: [
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                  "- Caracteristicas 1",
                ],
              },
              // More sections...
            ],
          },
        ],
      },
    ],
  };

  const product = {
    name: "Conmutador Salzer",
    id: 1,
    grupo: 1,
    price: "",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://i.postimg.cc/GmY9FS66/Conmutador1.png",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 3,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 4,
        name: "Angled view",
        src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
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
        name: "Codigo",
        items: [
          "(1)  S16-61026",
          "(2)  S16-61027",
          "(3)  S16-61028",
          "(4)  S16-61361",
          "(5)  S16-61363",
          "(6)  S16-61039",
        ],
      },
      {
        name: "Nombre",
        items: [
          "(1)  Conmutador de Linea 1-0-2 ,2 polos 16 amp",
          "(2)  Conmutador de Linea 1-0-2 ,3 polos 16 amp",
          "(3)  Conmutador de Linea 1-0-2 ,4 polos 16 amp",
          "(4)  Conmutador de Linea 1-0-2 ,1 polos 16 amp con Retorno al centro",
          "(5)  Conmutador de Linea 1-0-2 ,3 polos 16 amp con Retorno al centro",
          "(6)  Conmutador de Linea 1-2 , 3 polos 16 amp , sin cero",
        ],
      },
      {
        name: "Caracteristicas",
        items: [
          "(1)  [CSA/UL 240/1HP]",
          "(2)  [CSA/UL 240/3HP - AC3 415V 5.5KW]",
          "(3)  [CSA/UL 240/3HP - AC3 415V 5.5KW]",
          "(4)  [CSA/UL 240/1HP]",
          "(5)  [CSA/UL 240/3HP - AC3 415V 5.5KW]",
          "(6)  [CSA/UL 240/3HP - AC3 415V 5.5KW]",
        ],
      },
      // More sections...
    ],
  };

  const [open, setOpen] = useState(false);
  const [parametro, setParametro] = useState(false);
  const [parametroDetalle, setParametroDetalle] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [contador, setContador] = useState(false);
  const [show, setShow] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(a) {
    setIsOpen(true);
    setParametro(a);
  }
  function openMensaje() {
    setShow(true);
  }
  function closeMensaje() {
    setShow(false);
  }
  //const [selectedColor, setSelectedColor] = useState(item.id[0])
  function valorSeleccionado(item) {
    setParametroDetalle(true);
    setParametroDetalle(item);
  }
  let calculo = 1;
  function restarNumero() {
    if (calculo > -(-1)) {
      calculo -= 1;
      document.getElementById("monto").innerText = calculo;
      //document.getElementById("cantidadTotal").innerText=calculo
    }
  }
  function sumarNumero() {
    if (calculo < 10) {
      calculo += 1;
      document.getElementById("monto").innerText = calculo;
      //document.getElementById("cantidadTotal").innerText=calculo
    }
  }
  const Carrito = [
    {
      Nombre: "producto 1",
      Monto: 100.0,
    },
    {
      Nombre: "producto 2",
      Monto: 150.0,
    },
    {
      Nombre: "producto 3",
      Monto: 200.0,
    },
  ];

  function finalizarCompra() {
    let productosParaWsp = Carrito.map(
      (producto) => `- ${producto.Nombre}, $${producto.Monto}`
    ); // Le añadimos un guión delante del nombre y también el monto
    const productosConFormatoAmigable = productosParaWsp.join("\n"); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
    //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
    window.location.href =
      "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos" +
      " " +
      productosConFormatoAmigable; // Comento esta línea para no redirigir realmente en este ejemplo
  }

  function enviarMensaje() {
    let productosParaWsp = artists.map(
      (artist) =>
        //`${sentence1}{Alt>}{Enter}{/Alt}${sentence2}`
        ` [  ${artist.name} - (${artist.cantidad}) Paquetes ]`
    ); // Le añadimos un guión delante del nombre y también el monto
    // it should not
    //"Hole" + "\n" + "Línea Siguiente"
    let sex;
    const productosConFormatoAmigable = productosParaWsp.join("\n"); // Unimos todos los elementos del array en una cadena usando como separador el salto de línea
    //console.log(productosConFormatoAmigable); // Como la variable ya es una cadena, no necesitamos usar JSON.strignify()
    {
      params.sexo === "1" ? (sex = "Niño") : (sex = "Niña");
    }
    window.location.href =
      "https://api.whatsapp.com/send?phone=51997373676&text=Me%20interesan%20los%20siguientes%20productos%20para" +
      "  " +
      sex +
      " : " +
      productosConFormatoAmigable; // Comento esta línea para no redirigir realmente en este ejemplo
  }

  return (
    <div className="bg-white  font-mono text-xl ">
      <div>
        <nav aria-label="Breadcrumb" className="flex">
          <ol
            role="list"
            className="flex space-x-4 rounded-md bg-white px-6 shadow"
          >
            <li className="flex">
              <div className="flex items-center">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0"
                  />
                  <span className="sr-only font-lilita-One">Home</span>
                </a>
              </div>
            </li>
            <li className="flex">
              <div className="flex items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <Link
                  to="/CategoryxMayor"
                  className="ml-4 text-[1.0rem]  text-gray-500 hover:text-gray-700 font-Rum-Raisin "
                >
                  Catalogo x Mayor / Lista x Producto
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <main
        className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-2 border-slate-800 rounded-3xl"
        aria-labelledby="order-history-heading  "
      >
        {" "}
        {/* Menu Principal */}
        <div className="max-w-xl">
          <h1
            id="order-history-heading"
            className="  tracking-tight text-gray-900 font-lilita-One text-4xl"
          >
            {/* Lista de {params.id}  {params.name} && '1' == params.sexo   */}
            {"1" == params.id && "1" == params.sexo
              ? "Lista de Casacas para Niños"
              : null}
            {"2" == params.id && "1" == params.sexo
              ? "Lista de Bermudas para Niños"
              : null}
            {"3" == params.id && "1" == params.sexo
              ? "Lista de Short para Niños"
              : null}
            {"4" == params.id && "1" == params.sexo
              ? "Lista de Camisas para Niños"
              : null}
            {"5" == params.id && "1" == params.sexo
              ? "Lista de Conjuntos para Niños"
              : null}
            {"6" == params.id && "1" == params.sexo
              ? "Lista de Pantalones para Niños"
              : null}
            {"7" == params.id && "1" == params.sexo
              ? "Lista de Casacas para Niños"
              : null}

            {"1" == params.id && "2" == params.sexo
              ? "Lista de Overoles Para Niñas"
              : null}
            {"2" == params.id && "2" == params.sexo
              ? "Lista de Casacas para Niñas"
              : null}
            {"3" == params.id && "2" == params.sexo
              ? "Lista de Conjuntos para Niñas"
              : null}
            {"4" == params.id && "2" == params.sexo
              ? "Lista de Vestidos para Niñas"
              : null}
          </h1>
          <p className="mt-2 text-sm text-gray-500"></p>
        </div>
        <div
          className=" mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 
        lg:gap-x-8 xl:grid-cols-4 "
        >
          {params.sexo === "1"
            ? ProductDetailsm.categories.map((order) =>
                order.grupo == params.id ? (
                  <div key={order.id} className="group relative object-center">
                    <div className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                      <button
                        type="button"
                        onClick={() => openModal(order.id)}
                        className=""
                      >
                        <img
                          src={order.imageSrc}
                          alt={order.imageAlt}
                          className="w-auto h-auto object-cover object-center rounded-3xl  "
                        />
                      </button>
                    </div>

                    {order.grupo == params.id ? (
                      <h3 className="mt-4 text-1xl text-gray-500 text-left font-Rum-Raisin ...">
                        <a href={order.href}>
                          <span className="absolute justify-center " />
                          {order.productName}
                        </a>
                      </h3>
                    ) : null}
                  </div>
                ) : null
              )
            : ProductDetailsf.categories.map((order) =>
                order.grupo == params.id ? (
                  <div key={order.id} className="group relative object-center">
                    <div className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                      <button
                        type="button"
                        onClick={() => openModal(order.id)}
                        className=""
                      >
                        <img
                          src={order.imageSrc}
                          alt={order.imageAlt}
                          className="w-auto h-auto object-cover object-center rounded-3xl  "
                        />
                      </button>
                    </div>

                    {order.grupo == params.id ? (
                      <h3 className="mt-4 text-sm text-gray-500 text-center ...">
                        <a href={order.href}>
                          <span className="absolute justify-center" />
                          {order.productName}
                        </a>
                      </h3>
                    ) : null}
                  </div>
                ) : null
              )}
        </div>
        {/* AbrirPopalModel */}
        <Transition appear show={isOpen} as={Fragment} onClose={setOpen}>
          <Dialog
            as="div"
            className="relative z-10 border-2 border-cyan-500"
            onClose={closeModal}
          >
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
                      <div className="mx-auto max-w-6xl   sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 border-2  rounded-3xl ">
                        <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-2  ">
                          <button
                            type="button"
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                            onClick={() => closeModal(false)}
                          >
                            <span className="sr-only">Close</span>
                            <XMarkIcon
                              className="h-10 w-10 font-bold bg-slate-950 text-white rounded-full"
                              aria-hidden="true"
                            />
                          </button>
                          {/* Image gallery */}
                          <Tab.Group as="div" className="col-span-2 ">
                            <div className="flex flex-row ">
                              <div className="pl-1 pt-2">
                                <Tab.List className="flex flex-col borde-2 border-blue-600 h-64 sm:h-96">
                                  {params.sexo === "1"
                                    ? ProductDetailsm.categories.map((image) =>
                                        image.grupo == params.id &&
                                        image.id == parametro
                                          ? image.details.map(
                                              (item, itemIdx, { selected }) => (
                                                <Tab
                                                  className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                                bg-white text-sm font-medium uppercase text-gray-900 
                                                hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                  key={item.id}
                                                  onLoad={
                                                    item.id == "1"
                                                      ? () =>
                                                          valorSeleccionado(
                                                            item
                                                          )
                                                      : null
                                                  }
                                                >
                                                  <div key={item.id}>
                                                    <span className="sr-only">
                                                      {item.subGrupo}
                                                    </span>
                                                    <span className="sr-only">
                                                      {item.name}
                                                    </span>

                                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                                      <img
                                                        onClick={() =>
                                                          valorSeleccionado(
                                                            item
                                                          )
                                                        }
                                                        src={item.imageSrc}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center px-1 rounded-2xl"
                                                      />
                                                    </span>
                                                    <span
                                                      className={classNames(
                                                        selected
                                                          ? "ring-indigo-500"
                                                          : "ring-transparent",
                                                        "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                                      )}
                                                      aria-hidden="true"
                                                    />
                                                  </div>
                                                </Tab>
                                              )
                                            )
                                          : null
                                      )
                                    : null}
                                  {params.sexo === "2"
                                    ? ProductDetailsf.categories.map((image) =>
                                        image.grupo == params.id &&
                                        image.id == parametro
                                          ? image.details.map(
                                              (item, itemIdx, { selected }) => (
                                                <Tab
                                                  className="relative  h-32 w-16 sm:h-56 sm:w-36  rounded-md  
                                                bg-white text-sm font-medium uppercase text-gray-900 
                                                hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                  key={item.id}
                                                  onLoad={
                                                    item.id == "1"
                                                      ? () =>
                                                          valorSeleccionado(
                                                            item
                                                          )
                                                      : null
                                                  }
                                                >
                                                  <div key={item.id}>
                                                    <span className="sr-only">
                                                      {item.subGrupo}
                                                    </span>
                                                    <span className="sr-only">
                                                      {item.name}
                                                    </span>

                                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                                      <img
                                                        onClick={() =>
                                                          valorSeleccionado(
                                                            item
                                                          )
                                                        }
                                                        src={item.imageSrc}
                                                        alt=""
                                                        className="h-full w-full object-cover object-center px-1 rounded-2xl"
                                                      />
                                                    </span>
                                                    <span
                                                      className={classNames(
                                                        selected
                                                          ? "ring-indigo-500"
                                                          : "ring-transparent",
                                                        "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                                      )}
                                                      aria-hidden="true"
                                                    />
                                                  </div>
                                                </Tab>
                                              )
                                            )
                                          : null
                                      )
                                    : null}
                                </Tab.List>
                              </div>
                              <div className="pt-2">
                                <Tab.Panels className="aspect-h-1 aspect-w-1 w-full ">
                                  {params.sexo === "1"
                                    ? ProductDetailsm.categories.map((image) =>
                                        image.grupo == params.id &&
                                        image.id == parametro
                                          ? image.details.map(
                                              (item, itemIdx) => (
                                                <Tab.Panel key={item.id}>
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="h-full w-full object-cover object-center rounded-3xl"
                                                  />
                                                </Tab.Panel>
                                              )
                                            )
                                          : null
                                      )
                                    : null}
                                  {params.sexo === "2"
                                    ? ProductDetailsf.categories.map((image) =>
                                        image.grupo == params.id &&
                                        image.id == parametro
                                          ? image.details.map(
                                              (item, itemIdx) => (
                                                <Tab.Panel key={item.id}>
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="h-full w-full object-cover object-center rounded-3xl"
                                                  />
                                                </Tab.Panel>
                                              )
                                            )
                                          : null
                                      )
                                    : null}
                                </Tab.Panels>
                              </div>
                            </div>
                            {/* Image selector */}
                          </Tab.Group>
                          <div className="col-span-1 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
                              {parametroDetalle.name}
                            </h1>
                            <div className="mt-3">
                              <h3 className="sr-only">Reviews</h3>
                              <div className="flex items-center">
                                <p className="sr-only">
                                  {product.rating} out of 5 stars
                                </p>
                              </div>
                            </div>
                            <h1 className="font-bold pb-1  ">Categoria</h1>
                            <div
                              className="space-y-6 font-cabecera"
                              dangerouslySetInnerHTML={{
                                __html: parametroDetalle.description,
                              }}
                            />
                            <h2 className="pb-2 font-bold">Tallas</h2>
                            <div className="flex ">
                              <Container
                                active={activeIndex === 2}
                                onClick={() => onClickHandler(2)}
                                id="2"
                              ></Container>
                              <Container
                                active={activeIndex === 4}
                                onClick={() => onClickHandler(4)}
                                id="4"
                              ></Container>
                              <Container
                                active={activeIndex === 6}
                                onClick={() => onClickHandler(6)}
                                id="6"
                              ></Container>
                              <Container
                                active={activeIndex === 8}
                                onClick={() => onClickHandler(8)}
                                id="8"
                              ></Container>
                              <Container
                                active={activeIndex === 10}
                                onClick={() => onClickHandler(10)}
                                id="10"
                              ></Container>
                              <Container
                                active={activeIndex === 12}
                                onClick={() => onClickHandler(12)}
                                id="12"
                              ></Container>
                              <Container
                                active={activeIndex === 14}
                                onClick={() => onClickHandler(14)}
                                id="14"
                              ></Container>
                              <Container
                                active={activeIndex === 16}
                                onClick={() => onClickHandler(16)}
                                id="16"
                              ></Container>
                            </div>
                            {/* Contador */}
                            <div className="flex items-start justify-start text-2xl font-mono text-base pt-2 ">
                              <h1 className="content-center pt-2 pr-4 font-bold">
                                Cantidad
                              </h1>
                              <div className="grid grid-cols-3  text-1xl ">
                                <div className="col-span-1 border-2 border-slate-200 rounded">
                                  <Button
                                    className="rounded  py-2 px-4 text-sm text-black data-[hover]:bg-slate-950 hover:text-white
                                                        data-[active]:bg-sky-700 h-10 w-10"
                                    onClick={restarNumero}
                                  >
                                    -
                                  </Button>
                                </div>
                                <div className="col-span-1">
                                  <h1
                                    id="monto"
                                    className="text-2xl pt-2 text-center text-slate-700"
                                  >
                                    {calculo}
                                  </h1>
                                </div>
                                <div className="col-span-1 border-2 border-slate-200 rounded">
                                  <Button
                                    className="rounded  py-2 px-4 text-sm text-black data-[hover]:bg-slate-950 hover:text-white
                                                        data-[active]:bg-sky-700 h-10 w-10"
                                    onClick={sumarNumero}
                                  >
                                    +
                                  </Button>
                                </div>
                              </div>
                            </div>
                            {/* Contador */}
                            {/* Añadir y Limpiar */}

                            {/* Añadir y Limpiar */}
                            {/* Mostrar Datos */}
                            <ul className="">
                              {artists.map((artist) => (
                                <li key={artist.id}>
                                  <div className="flex max-w-xs items-center justify-star text-[0.9rem] sm:text-[1.1rem] font-mono  ">
                                    <div className="grid grid-cols-8 font-cabecera  ">
                                      <div className="col-span-1 font-bold text-black ">
                                        Color:
                                      </div>
                                      <div className="col-span-3 text-center ">
                                        {artist.name}{" "}
                                      </div>
                                      <div className="col-span-1 font-bold text-black ">
                                        Cant.:
                                      </div>
                                      <div className="col-span-1 pl-4 ">
                                        {artist.cantidad}{" "}
                                      </div>
                                      <div className="col-span-1 font-bold text-black ">
                                        <button
                                          className=" text-red-700    rounded-2xl pl-2 pr-2"
                                          onClick={() => {
                                            setArtists(
                                              artists.filter(
                                                (a) => a.id !== artist.id
                                              )
                                            );
                                          }}
                                        >
                                          <TrashIcon
                                            className="h-5 w-5 font-bold"
                                            aria-hidden="true"
                                          />
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

                                <RadioGroup
                                  value={selectedColor}
                                  onChange={setSelectedColor}
                                  className="mt-2"
                                >
                                  <RadioGroup.Label className="sr-only">
                                    Choose a color
                                  </RadioGroup.Label>
                                  <span className="flex items-center space-x-3"></span>
                                </RadioGroup>
                              </div>
                              <div className="flex">
                                <button
                                  type="button"
                                  //onClick={() => addToCart(artists)}
                                  onClick={() => {
                                    addToCart([
                                      ...artists,
                                      {
                                        id: nextId++,
                                        name: parametroDetalle.name,
                                        cantidad: calculo,
                                        talla: activeIndex,
                                        sexo: parametroDetalle.sexo,
                                      },
                                    ]);
                                    document.getElementById(
                                      "monto"
                                    ).innerText = 1;
                                    openMensaje();
                                  }}
                                  //onClick={()=> openModal(order.id)}
                                  //onClick={() => {
                                  //</div>setArtists([
                                  //  ...artists,
                                  //</form> { id: nextId++, name: parametroDetalle.name,cantidad:calculo }
                                  //]);
                                  //document.getElementById("monto").innerText=1
                                  // }
                                  // }
                                  className="flex max-w-xs flex-1 items-center justify-center rounded-md 
                                              border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                >
                                  Añadir Carrito
                                </button>

                                <a
                                  href="http://www.facebook.com/sharer.php?u=https://www.facebook.com/Jeanstovar.pe&t=pagina de desarrollo web"
                                  target="_blank"
                                  className="facebook"
                                >
                                  Facebook
                                </a>
                                <ul className="hidden">
                                  {artists.map((artist) => (
                                    <li key={artist.id}>
                                      <div className="flex max-w-xs items-center justify-star text-[0.9rem] sm:text-[1.1rem] font-mono  ">
                                        <div className="grid grid-cols-8 font-cabecera  ">
                                          <div className="col-span-1 font-bold text-black ">
                                            Color:
                                          </div>
                                          <div className="col-span-3 text-center ">
                                            {artist.name}{" "}
                                          </div>
                                          <div className="col-span-1 font-bold text-black ">
                                            Cant.:
                                          </div>
                                          <div className="col-span-1 pl-4 ">
                                            {artist.cantidad}{" "}
                                          </div>
                                          <div className="col-span-1 font-bold text-black ">
                                            <button
                                              className=" text-red-700    rounded-2xl pl-2 pr-2"
                                              onClick={() => {
                                                setArtists(
                                                  artists.filter(
                                                    (a) => a.id !== artist.id
                                                  )
                                                );
                                              }}
                                            >
                                              <TrashIcon
                                                className="h-5 w-5 font-bold"
                                                aria-hidden="true"
                                              />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {/* Global notification live region, render this permanently at the end of the document */}
                              <div
                                aria-live="assertive"
                                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
                              >
                                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                                  {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                                  <Transition show={show}>
                                    <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                                      <div className="p-4">
                                        <div className="flex items-start">
                                          <div className="flex-shrink-0">
                                            <CheckCircleIcon
                                              aria-hidden="true"
                                              className="h-6 w-6 text-green-400"
                                            />
                                          </div>
                                          <div className="ml-3 w-0 flex-1 pt-0.5">
                                            <p className="text-sm font-medium text-gray-900">
                                              Se envio de forma Correcta!
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
                                              <span className="sr-only">
                                                Close
                                              </span>
                                              <XMarkIcon
                                                aria-hidden="true"
                                                className="h-5 w-5"
                                              />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Transition>
                                </div>
                              </div>
                              {/* Global notification live region, render this permanently at the end of the document */}
                              <h2
                                id="idmensaje"
                                className="hidden text-1xl font-cabecera font bold pt-2 text-center text-red-700"
                              >
                                {mensaje}
                              </h2>
                            </form>
                            <section
                              aria-labelledby="details-heading"
                              className="mt-12"
                            >
                              <h2 id="details-heading" className="sr-only">
                                Additional details
                              </h2>

                              <div className="divide-y divide-gray-200 border-t ">
                                {params.sexo === "1"
                                  ? ProductDetailsm.categories.map((image) =>
                                      image.grupo == params.id &&
                                      image.id == parametro
                                        ? image.details.map((item, itemIdx) =>
                                            parametroDetalle.id == item.id
                                              ? item.anidado.map(
                                                  (valor, itemIdx) => (
                                                    //valor.id =='1' ? (
                                                    <Disclosure
                                                      as="div"
                                                      key={itemIdx}
                                                    >
                                                      {({ open }) => (
                                                        <>
                                                          <h3>
                                                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                              <span
                                                                className={classNames(
                                                                  open
                                                                    ? "text-indigo-600"
                                                                    : "text-gray-900",
                                                                  "text-sm font-medium"
                                                                )}
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
                                                          {/*condition ? <Component /> : null. */}
                                                          <Disclosure.Panel
                                                            as="div"
                                                            className="prose prose-sm pb-6"
                                                          >
                                                            {valor.items.map(
                                                              (am, itemIdx) => (
                                                                <ul
                                                                  role="list"
                                                                  key={itemIdx}
                                                                >
                                                                  <li
                                                                    className="font-mono text-sm"
                                                                    key={am}
                                                                  >
                                                                    {am}
                                                                  </li>
                                                                </ul>
                                                              )
                                                            )}
                                                          </Disclosure.Panel>

                                                          {/*  Acoordion    */}
                                                        </>
                                                      )}
                                                    </Disclosure>
                                                    //):null
                                                  )
                                                )
                                              : null
                                          )
                                        : null
                                    )
                                  : null}
                                {params.sexo === "2"
                                  ? ProductDetailsf.categories.map((image) =>
                                      image.grupo == params.id &&
                                      image.id == parametro
                                        ? image.details.map((item, itemIdx) =>
                                            parametroDetalle.id == item.id
                                              ? item.anidado.map(
                                                  (valor, itemIdx) => (
                                                    //valor.id =='1' ? (
                                                    <Disclosure
                                                      as="div"
                                                      key={itemIdx}
                                                    >
                                                      {({ open }) => (
                                                        <>
                                                          <h3>
                                                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                              <span
                                                                className={classNames(
                                                                  open
                                                                    ? "text-indigo-600"
                                                                    : "text-gray-900",
                                                                  "text-sm font-medium"
                                                                )}
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
                                                          {/*condition ? <Component /> : null. */}
                                                          <Disclosure.Panel
                                                            as="div"
                                                            className="prose prose-sm pb-6"
                                                          >
                                                            {valor.items.map(
                                                              (am, itemIdx) => (
                                                                <ul
                                                                  role="list"
                                                                  key={itemIdx}
                                                                >
                                                                  <li
                                                                    className="font-mono text-sm"
                                                                    key={am}
                                                                  >
                                                                    {am}
                                                                  </li>
                                                                </ul>
                                                              )
                                                            )}
                                                          </Disclosure.Panel>

                                                          {/*  Acoordion    */}
                                                        </>
                                                      )}
                                                    </Disclosure>
                                                    //):null
                                                  )
                                                )
                                              : null
                                          )
                                        : null
                                    )
                                  : null}
                              </div>
                            </section>
                          </div>
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
      </main>
    </div>
  );
}
