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

export default function TiendaDetails({ id, name, cantidad }) {
  const [radio, setRadio] = useState("1");
  const [activeIndex, setActiveIndex] = useState(false);
  const [colores, setColores] = useState();

  const [precioUnico, setPrecioUnico] = useState();

  const [grupo, setGrupo] = useState();
  const [subgrupo, setSubGrupo] = useState();
  const [artists, setArtists] = useState([]);

  const [radioValue, setRadioValue] = useState(0);
  const [label, setLabel] = useState(0);
  const [cart, setCart] = useContext(CartContext);
  const mensaje = "";
  const [valueSeleccion, setValueSeleccion] = useState("2");

  //const notificationMethods1 = [{ id: "0", title: "Default", value: "0" }];
  const notificationMethods0 = [{ id: "0", title: "Default", value: "0" }];
  const notificationMethods1 = [
    { id: "1", title: "Beige", value: "1" },
    { id: "2", title: "Blanco", value: "2" },
    { id: "3", title: "Teddy", value: "3" },
  ];

  //RADIO
  const notificationMethods0fem = [{ id: "0", title: "Default", value: "0" }];
  const notificationMethods1fem = [
    { id: "1", title: "Rosado", value: "1" },
    { id: "2", title: "Blanco", value: "2" },
    { id: "3", title: "Lila", value: "3" },
  ];

  let costo;
  let subgrupoSeteado;

  const TallasSeleccionm = {
    seleccion: [
      //GRUPO(1) Casacas subgrupos(1,2,4,5) =1
      //CASACAS//-----------------------------
      {
        id: "1",
        grupo: "1",
        subgrupo: "1",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.68",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.70",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.70",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.75",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.75",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.75",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.80",
          },
        ],
      },
      {
        id: "2",
        grupo: "1",
        subgrupo: "2",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.68",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.70",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.70",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.75",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.75",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.75",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.80",
          },
        ],
      },

      {
        id: "3",
        grupo: "1",
        subgrupo: "3",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.60",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.65",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.65",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.65",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.70",
          },
        ],
      },

      {
        id: "4",
        grupo: "1",
        subgrupo: "4",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.68",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.70",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.70",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.75",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.75",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.75",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.80",
          },
        ],
      },
      {
        id: "5",
        grupo: "1",
        subgrupo: "5",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.68",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.70",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.70",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.75",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.75",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.75",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.80",
          },
        ],
      },
      //CASACAS//-----------------------------
      //OVEROL//-----------------------------
      {
        id: "6",
        grupo: "2",
        subgrupo: "6",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.65",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.65",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.65",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.0",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.0",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
      {
        id: "7",
        grupo: "2",
        subgrupo: "7",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.65",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.65",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.65",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
      //OVEROL//-----------------------------
      //PANTALON//-----------------------------
      {
        id: "8",
        grupo: "3",
        subgrupo: "8",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      {
        id: "9",
        grupo: "3",
        subgrupo: "9",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      {
        id: "10",
        grupo: "3",
        subgrupo: "10",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.63",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.63",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.63",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.68",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.68",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.68",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.70",
          },
        ],
      },
      {
        id: "11",
        grupo: "3",
        subgrupo: "11",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      //CAMISAS//-----------------------------
      {
        id: "12",
        grupo: "4",
        subgrupo: "12",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.53",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.53",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.53",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.53",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.54",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.54",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.54",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.55",
          },
        ],
      },
      //OVEROL SHORT//-----------------------------
      {
        id: "13",
        grupo: "5",
        subgrupo: "13",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.65",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.65",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.65",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
      // SHORT//-----------------------------
      {
        id: "14",
        grupo: "6",
        subgrupo: "14",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.55",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.55",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.55",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.55",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.60",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.60",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.60",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.65",
          },
        ],
      },
      {
        id: "15",
        grupo: "6",
        subgrupo: "15",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.55",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.55",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.55",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.55",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.60",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.60",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.60",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.65",
          },
        ],
      },
      {
        id: "16",
        grupo: "6",
        subgrupo: "16",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.60",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.65",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.65",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.65",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.68",
          },
        ],
      },
    ],
  };
  const TallasSeleccionf = {
    seleccion: [
      //GRUPO(1) Casacas subgrupos(1,2,4,5) =1
      //CASACAS//-----------------------------
      {
        id: "1",
        grupo: "1",
        subgrupo: "1",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.68",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.70",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.70",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.75",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.75",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.75",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.80",
          },
        ],
      },
      {
        id: "2",
        grupo: "1",
        subgrupo: "2",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.68",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.70",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.70",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.75",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.75",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.75",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.80",
          },
        ],
      },
      {
        id: "3",
        grupo: "1",
        subgrupo: "3",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.68",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.70",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.70",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.70",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.75",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.75",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.75",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.80",
          },
        ],
      },

      //CASACAS//-----------------------------
      //OVEROL//-----------------------------
      {
        id: "4",
        grupo: "2",
        subgrupo: "4",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.65",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.65",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.65",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      {
        id: "5",
        grupo: "2",
        subgrupo: "5",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.65",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.65",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.65",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      //OVEROL//-----------------------------
      //PANTALON//-----------------------------
      {
        id: "6",
        grupo: "3",
        subgrupo: "6",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      {
        id: "8",
        grupo: "3",
        subgrupo: "8",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      {
        id: "9",
        grupo: "4",
        subgrupo: "9",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.50",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.50",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.50",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.50",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.53",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.53",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.53",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.55",
          },
        ],
      },
      {
        id: "10",
        grupo: "3",
        subgrupo: "10",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.63",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.63",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.63",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.68",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.68",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.68",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.70",
          },
        ],
      },
      {
        id: "11",
        grupo: "3",
        subgrupo: "11",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.60",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.60",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.60",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },

      //OVEROL SHORT//-----------------------------
      {
        id: "13",
        grupo: "4",
        subgrupo: "13",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.65",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.65",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.65",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      {
        id: "7",
        grupo: "4",
        subgrupo: "7",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.65",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.65",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.65",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.65",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.70",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.70",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.70",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.75",
          },
        ],
      },
      // SHORT//-----------------------------
      {
        id: "14",
        grupo: "6",
        subgrupo: "14",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.33",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.33",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.33",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.33",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.34",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.34",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
    ],
  };

  const TallasSeleccionmc = {
    seleccion: [
      //GRUPO(1) Casacas subgrupos(1,2,4,5) =1
      //CASACAS//-----------------------------
      {
        id: "1",
        grupo: "1",
        subgrupo: "1",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.115",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.115",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.120",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.120",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
      {
        id: "2",
        grupo: "1",
        subgrupo: "2",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.115",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.115",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.120",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.120",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
      {
        id: "3",
        grupo: "1",
        subgrupo: "3",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.115",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.115",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.120",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.120",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
      {
        id: "4",
        grupo: "1",
        subgrupo: "4",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.115",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.115",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.120",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.120",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.0",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.0",
          },
        ],
      },
      //
      {
        id: "5",
        grupo: "2",
        subgrupo: "5",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      {
        id: "6",
        grupo: "2",
        subgrupo: "6",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      {
        id: "7",
        grupo: "2",
        subgrupo: "7",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      {
        id: "8",
        grupo: "2",
        subgrupo: "8",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      {
        id: "9",
        grupo: "2",
        subgrupo: "9",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      {
        id: "10",
        grupo: "2",
        subgrupo: "10",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.113",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.113",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.118",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.118",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.123",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.123",
          },
        ],
      },
      {
        id: "11",
        grupo: "2",
        subgrupo: "11",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.113",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.113",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.118",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.118",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.123",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.123",
          },
        ],
      },
      {
        id: "12",
        grupo: "2",
        subgrupo: "12",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      {
        id: "13",
        grupo: "2",
        subgrupo: "13",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      //conjunto
      {
        id: "14",
        grupo: "3",
        subgrupo: "14",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.89",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.89",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.90",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.90",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.93",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.93",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.93",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.95",
          },
        ],
      },
      {
        id: "15",
        grupo: "3",
        subgrupo: "15",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.95",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.95",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.95",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.95",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.98",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.98",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.98",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.101",
          },
        ],
      },
      {
        id: "16",
        grupo: "3",
        subgrupo: "16",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.90",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.90",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.93",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.93",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.95",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.95",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.95",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.100",
          },
        ],
      },
      //grupo 4

      {
        id: "17",
        grupo: "4",
        subgrupo: "17",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.136",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.136",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.136",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.140",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.145",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.145",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.145",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.150",
          },
        ],
      },
      {
        id: "18",
        grupo: "4",
        subgrupo: "18",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.136",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.136",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.136",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.140",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.145",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.145",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.145",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.150",
          },
        ],
      },
      {
        id: "19",
        grupo: "4",
        subgrupo: "19",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.140",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.140",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.140",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.145",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.149",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.149",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.149",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.155",
          },
        ],
      },
      {
        id: "20",
        grupo: "3",
        subgrupo: "20",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.92",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.92",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.93",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.93",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.95",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.95",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.95",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.97",
          },
        ],
      },
      {
        id: "21",
        grupo: "2",
        subgrupo: "21",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.102",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.102",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.105",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.105",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.110",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.110",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.110",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.115",
          },
        ],
      },

      {
        id: "22",
        grupo: "2",
        subgrupo: "22",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.100",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.100",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.100",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.100",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.105",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.105",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.110",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.115",
          },
        ],
      },
    ],
  };
  const TallasSeleccionfc = {
    seleccion: [
      //GRUPO(1) Casacas subgrupos(1,2,4,5) =1
      //CASACAS//-----------------------------
      {
        id: "1",
        grupo: "1",
        subgrupo: "1",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.115",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.115",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.120",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.120",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.125",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.125",
          },
        ],
      },
      {
        id: "2",
        grupo: "1",
        subgrupo: "2",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.115",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.115",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.120",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.120",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.125",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.125",
          },
        ],
      },
      {
        id: "5",
        grupo: "1",
        subgrupo: "5",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.115",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.115",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.120",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.120",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.125",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.125",
          },
        ],
      },
      //
      {
        id: "3",
        grupo: "2",
        subgrupo: "3",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },
      {
        id: "4",
        grupo: "2",
        subgrupo: "4",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.105",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.105",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.110",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.110",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.115",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.115",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.120",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.120",
          },
        ],
      },

      {
        id: "6",
        grupo: "2",
        subgrupo: "6",
        details: [
          {
            id: "1",
            talla: "2",
            precio: "S/.110",
          },
          {
            id: "2",
            talla: "4",
            precio: "S/.110",
          },
          {
            id: "3",
            talla: "6",
            precio: "S/.113",
          },
          {
            id: "4",
            talla: "8",
            precio: "S/.113",
          },
          {
            id: "5",
            talla: "10",
            precio: "S/.118",
          },
          {
            id: "6",
            talla: "12",
            precio: "S/.118",
          },
          {
            id: "7",
            talla: "14",
            precio: "S/.123",
          },
          {
            id: "8",
            talla: "16",
            precio: "S/.123",
          },
        ],
      },
    ],
  };

  function mostrarTituloRadio(valor) {
    //console.log("Hola");
    setRadio(valor);
    setTallita(false);

    //console.log(params.general);
    //console.log(precioUnico);
    //console.log(grupo);
    //console.log(subgrupo);
    //console.log(valor);
    //console.log(params.sexo);
    //console.log(params.valorAbsoluto);

    setTitulo("");
    //console.log(costo);
    //setPrecioUnico("");
    if (grupo == 1 && params.sexo == 1 && params.general === "s") {
      //document.getElementById("idcosto").innerText = "No Disponible";
      //document.getElementById("idCarrito").style.visibility = "hidden";
      //document.getElementById("idtallas").style.visibility = "hidden";
      //document.getElementById("idcosto").innerText = "";
      if (subgrupo != 5) {
        if (valor == 3) {
          document.getElementById("idtallas").style.visibility = "hidden";

          document.getElementById("idpos").innerText = "No Disponible";
          document.getElementById("idcosto").innerText = "";
          document.getElementById("idCarrito").style.visibility = "hidden";
          document.getElementById("idmensaje").innerText = "";
        } else {
          //document.getElementById("idcosto").innerText = "";

          //document.getElementById("idcosto").style.visibility = "visible";
          document.getElementById("idcosto").innerText = "";
          document.getElementById("idpos").innerText = "";
          document.getElementById("idtallas").style.visibility = "visible";
          document.getElementById("idCarrito").style.visibility = "visible";
          document.getElementById("idmensaje").innerText = "";

          //document.getElementById("idCarrito").style.visibility = "visible";
        }
      } else {
        document.getElementById("idmensaje").innerText = "";
        document.getElementById("idcosto").innerText = "";
      }
    } else {
      if (params.sexo == 1) {
        //console.log("entro aki");
        if (valor == 3) {
          document.getElementById("idpos").innerText = "No Disponible";
          document.getElementById("idtallas").style.visibility = "hidden";
          document.getElementById("idcosto").innerText = "";
          document.getElementById("idCarrito").style.visibility = "hidden";
          document.getElementById("idmensaje").innerText = "";
        } else {
          document.getElementById("idcosto").innerText = "";
          document.getElementById("idpos").innerText = "";
          document.getElementById("idtallas").style.visibility = "visible";
          document.getElementById("idCarrito").style.visibility = "visible";
          document.getElementById("idmensaje").innerText = "";

          //document.getElementById("idCarrito").style.visibility = "visible";
        }
      } else {
        if (grupo == 2) {
          if (valor == 3) {
            document.getElementById("idpos").innerText = "No Disponible";
            document.getElementById("idtallas").style.visibility = "hidden";
            document.getElementById("idcosto").innerText = "";
            document.getElementById("idCarrito").style.visibility = "hidden";
            document.getElementById("idmensaje").innerText = "";
          } else {
            document.getElementById("idcosto").innerText = "";
            document.getElementById("idpos").innerText = "";
            document.getElementById("idtallas").style.visibility = "visible";
            document.getElementById("idCarrito").style.visibility = "visible";
            document.getElementById("idmensaje").innerText = "";
          }
        } else {
          document.getElementById("idcosto").innerText = "";
          document.getElementById("idpos").innerText = "";
          document.getElementById("idtallas").style.visibility = "visible";
          document.getElementById("idCarrito").style.visibility = "visible";
          document.getElementById("idmensaje").innerText = "";
        }
      }
    }
    //document.getElementById("idcosto").innerText = "No Disponible";
    //document.getElementById("idCarrito").style.visibility = "hidden";
    //document.getElementById("idcosto").innerText = "";
    //costo = "";
    /*console.log(radio);
    if (radio === "1") {
      document.getElementById("idcosto").style.visibility = "hidden";
    }
    if (radio === "2") {
      document.getElementById("idtitulo").style.visibility = "hidden";
    }*/
  }
  function ocultarTitulo() {
    setTitulo("");
  }

  function mostrarDatos(valor) {
    /*var myCoolDiv = document.getElementById("div");
    //document.getElementById("playerContainer").removeChild(myCoolDiv);
    document.getElementById("idCarrito").removeChild(myCoolDiv);
    document.getElementById("idMensajenulo").removeChild(myCoolDiv);
    document.getElementById("idtotal").removeChild(myCoolDiv);
    document.getElementById("idcolores").removeChild(myCoolDiv);
    document.getElementById("idcosto").removeChild(myCoolDiv);*/
    //document.getElementById("nodisponible").style.visibility = "hidden";
    document.getElementById("idpanel").style.visibility = "visible";

    document.getElementById("idtitulo").style.visibility = "visible";
    //document.getElementById("disponibilidad").style.visibility = "hidden";

    document.getElementById("idcategoria").style.visibility = "visible";
    document.getElementById("idcategoriadescripcion").style.visibility =
      "visible";

    document.getElementById("idCarrito").style.visibility = "visible";
    document.getElementById("idMensajenulo").style.visibility = "hidden";

    document.getElementById("idtotal").style.visibility = "visible";

    document.getElementById("idcolores").style.visibility = "visible";

    setPrecioUnico(valor);
    document.getElementById("idcosto").innerText = valor;
    document.getElementById("idMensajenulo").innerText = "";
    document.getElementById("disponibilidad").innerText = "";
  }
  //OCULTAR
  function ocultarDatos(valor) {
    /* var myCoolDiv = document.getElementById("div");

    document.getElementById("idCarrito").removeChild(myCoolDiv);
    document.getElementById("idMensajenulo").removeChild(myCoolDiv);
    document.getElementById("idtotal").removeChild(myCoolDiv);
    document.getElementById("idcolores").removeChild(myCoolDiv);
    document.getElementById("idcosto").removeChild(myCoolDiv);*/
    //document.getElementById("nodisponible").style.visibility = "visible";

    document.getElementById("idpanel").style.visibility = "hidden";
    //document.getElementById("idtallas").style.visibility = "hidden";
    document.getElementById("idtitulo").style.visibility = "hidden";

    //document.getElementById("disponibilidad").innerText = "No Disponible";
    document.getElementById("disponibilidad").innerText = "No Disponible";
    document.getElementById("idcategoria").style.visibility = "hidden";
    document.getElementById("idcategoriadescripcion").style.visibility =
      "hidden";

    document.getElementById("idCarrito").style.visibility = "hidden";
    document.getElementById("idMensajenulo").style.visibility = "visible";

    document.getElementById("idtotal").style.visibility = "hidden";
    document.getElementById("idcolores").style.visibility = "hidden";
    document.getElementById("idcosto").innerText = valor;
    document.getElementById("idMensajenulo").innerText =
      "No hay Producto para esta talla.";
  }
  function onclickLoad(valortalla) {
    document.getElementById("idtallas").style.visibility = "hidden";
  }
  //SELECCION
  function onClickHandler(index, grupo, subgrupo, valor, sexo) {
    //console.log(grupo);
    //console.log(subgrupo);
    //console.log(index);
    //console.log(grupo);
    //console.log(subgrupo);
    //alert("Hola");
    //console.log(titulo);
    //setActiveIndex(index);
    //setGrupo(grupo);
    //setSubGrupo(subgrupo);
    //console.log(valor);
    //document.getElementById("idmensaje").innerText = "";
    //console.log(index);
    //console.log(grupo);
    //console.log(subgrupo);
    //setActiveIndex(index);
    setGrupo(grupo);
    setSubGrupo(subgrupo);
    costo = "";
    //console.log(grupo);
    //console.log(subgrupo);
    //console.log(index);

    //---------------------------------
    if (valor === "1") {
      if (sexo === "1") {
        //document.getElementById("idcosto").innerText = "";
        TallasSeleccionm.seleccion.map((image) =>
          image.grupo == grupo && image.subgrupo == subgrupo
            ? image.details.map(
                (item, itemIdx) =>
                  item.talla == index
                    ? //document.getElementById("idcosto").innerText =
                      //item.precio
                      item.precio === "S/.0"
                      ? ocultarDatos("0")
                      : mostrarDatos(item.precio)
                    : null
                //(costo = 20)
              )
            : null
        );
      } else {
        document.getElementById("idcosto").innerText = "";
        TallasSeleccionf.seleccion.map((image) =>
          image.grupo == grupo && image.subgrupo == subgrupo
            ? image.details.map(
                (item, itemIdx) =>
                  item.talla == index
                    ? //document.getElementById("idcosto").innerText =
                      //item.precio
                      item.precio === "S/.0"
                      ? ocultarDatos("0")
                      : mostrarDatos(item.precio)
                    : null
                //(costo = 20)
              )
            : null
        );
      }
    } else {
      if (sexo === "1") {
        document.getElementById("idcosto").innerText = "";
        TallasSeleccionmc.seleccion.map((image) =>
          image.grupo == grupo && image.subgrupo == subgrupo
            ? image.details.map(
                (item, itemIdx) =>
                  item.talla == index
                    ? //document.getElementById("idcosto").innerText =
                      //item.precio
                      item.precio === "S/.0"
                      ? ocultarDatos("0")
                      : mostrarDatos(item.precio)
                    : null
                //(costo = 20)
              )
            : null
        );
      } else {
        document.getElementById("idcosto").innerText = "";
        TallasSeleccionfc.seleccion.map((image) =>
          image.grupo == grupo && image.subgrupo == subgrupo
            ? image.details.map(
                (item, itemIdx) =>
                  item.talla == index
                    ? //document.getElementById("idcosto").innerText =
                      //item.precio
                      item.precio === "S/.0"
                      ? ocultarDatos("0")
                      : mostrarDatos(item.precio)
                    : null
                //(costo = 20)
              )
            : null
        );
      }
    }

    //---------------------------------
  }
  function onLoadHandler() {
    //document.getElementById("idtallas").style.visibility = "hidden";
    //console.log(params.id);
    //console.log(parametro);
    //console.log(activeIndex);
    //aqui setea el valor selected de las talklas
    /*
    2,
    parametroDetalle.grupo,
    parametroDetalle.subgrupo,
    params.valorAbsoluto,
    params.sexo
*/
    /* console.log(parametroDetalle.grupo);
    console.log(parametroDetalle.subgrupo);
    console.log(parametroDetalle.valorAbsoluto);
    console.log(parametroDetalle.sexo);*/
    setPrecioUnico(0);
    //alert(precioUnico);
    setActiveIndex(0);
    costo = "";

    //ocultarDatos("0")

    //document.getElementById("idpanel").style.visibility = "hidden";
  }

  function addToCart(artists) {
    //console.log(cart);
    //function addToCart(id,name,cantidad){
    //const itemExists = cart.findIndex(artists => artists.id === item.id)
    //console.log(itemExists)
    //item.quantity=1
    //setCart([...cart ,item])
    //setArtists([
    // ...artists,
    // { id: id, name: name,cantidad:cantidad }
    // ]);
    //activeIndex === null
    //  const mensaje=''
    //console.log(artists.talla);
    //console.log(artists.monto);
    //alert(precioUnico);
    // artists.map((number) => (costo = number.monto));
    // console.log(costo);
    //console.log(costo);
    /*  if(costo=== undefined){

        (console.log("Se Requiere selecionar una talla"))
      }else{

        (console.log("Talla correcta"))
      }*/
    /* if (artists.talla == undefined) {
      document.getElementById("idmensaje").innerText =
        "Se Requiere seleccionar una talla";
      //console.log(artists)
    }
   */

    //console.log(titulo);
    //console.log(precioUnico);
    //console.log(costo);
    if (titulo === "") {
      document.getElementById("idmensaje").innerText =
        "* Se Requiere Seleccionar un Producto ";
    } else {
      if (precioUnico != 0) {
        console.log("Se registro correctamente");

        setCart([...cart, artists]);

        setTitulo("");
        document.getElementById("idcosto").innerText = "";
        setActiveIndex(0);
        setPrecioUnico("");

        costo = "";
        document.getElementById("idmensaje").innerText = "";

        openMensaje();
        setTallita(0);

        //setIsOpen(true)
      } else {
        document.getElementById("idmensaje").innerText =
          "* Se Requiere Seleccionar una Talla ";
      }
    }

    //setCart([...cart ,artists])
  }

  const onChange = (ev) => {
    //save your value here with state variable
    //console.log(ev.target.value);
    setRadioValue(ev.target.value);
  };

  const onChangeNumero = (ev) => {
    //save your value here with state variable
    //console.log(ev.target.value);
    setLabel(ev.target.value);
  };

  const onClick = (ev) => {
    //TO-DO SEND/click value
    //console.log("radio value ", radioValue);
  };

  const params = useParams();
  const [value, setValue] = useState("");
  const [tallita, setTallita] = useState("2");

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
  //PRODUCTOS
  const ProductDetailsm = {
    categories: [
      //Casacas
      {
        id: "1",
        grupo: 1,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casaca Drill",
        href: "#",
        imageSrc: "https://i.postimg.cc/1zwqXczb/casaca-drill-05.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Casaca Drill Forro Blanco(Beige)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/1zwqXczb/casaca-drill-05.png",
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
            op: 0,
            name: "Casaca Drill Forro Blanco(Verde)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/1tSNqnnX/casaca-drill-01.png",
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
            op: 0,
            name: "Casaca Drill Forro Blanco(Azul Noche)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/zBkHSzKj/casaca-drill-03.png",
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
            op: 0,
            name: "Casaca Drill Forro Blanco(Marron)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/1zh8knKB/casaca-drill-04.png",
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
            op: 0,
            name: "Casaca Drill Forro Blanco(Negro)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/vmr4bYqs/casaca-drill-06.png",
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
            id: "6",
            op: 0,
            name: "Casaca Drill Forro Blanco(Plomo)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/qqRqs8kJ/casaca-drill-02.png",
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
        grupo: 1,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casaca Jeans sin Capucha ",
        href: "#",
        imageSrc: "https://i.postimg.cc/FKY0YV3Z/casaca-subcategoria-03.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Casaca Clasica Forro Beige(Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/xjxxNXV6/casaca-subcategoria-01.png",
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
            op: "1",
            name: "Casaca Clasica Forro Beige(Maiz)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Hk26wzJ1/casaca-subcategoria-02.png",
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
            op: "1",
            name: "Casaca Clasica Forro Beige(Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/FKY0YV3Z/casaca-subcategoria-03.png",
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
            op: "1",
            name: "Casaca Clasica Forro Beige(Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/sDBz0BYL/casaca-subcategoria-04.png",
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
          //COLORESS
          {
            id: "5",
            op: "2",
            name: "Casaca Clasica Forro Blanco(Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
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
            id: "6",
            op: "2",
            name: "Casaca Clasica Forro Blanco(Maiz)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
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
            id: "7",
            op: "2",
            name: "Casaca Clasica Forro Blanco(Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
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
            id: "8",
            op: "2",
            name: "Casaca Clasica Forro Blanco(Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
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
        grupo: 1,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casaca sin Forro ",
        href: "#",
        imageSrc: "https://i.postimg.cc/QdJxgn9K/casaca-sinforro-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Casaca sin Forro (Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/QdJxgn9K/casaca-sinforro-01.png",
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
            op: 0,
            name: "Casaca sin Forro (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/RZs2zc2b/casaca-sinforro-02.png",
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
            op: 0,
            name: "Casaca sin Forro (Madera)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/fbvtLRjF/casaca-sinforro-03.png",
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
            op: 0,
            name: "Casaca sin Forro (Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/N0bFtPQv/casaca-sinforro-04.png",
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
            op: 0,
            name: "Casaca sin Forro (Maiz)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/mZPYd7Sg/casaca-sinforro-06.png",
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
        grupo: 1,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casaca Jeans con Capucha",
        href: "#",
        imageSrc: "https://i.postimg.cc/bvWTLQwX/casaca-jeans-capucha-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          //color beige casaca con capucha
          {
            id: "1",
            op: "1",
            name: "Casaca Jeans clasica con Capucha Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/bvWTLQwX/casaca-jeans-capucha-02.png",
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
            op: "1",
            name: "Casaca Jeans clasica con Capucha Forro Beige (Maiz)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/D0Kc3nGB/casaca-jeans-capucha-01.png",
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
            op: "1",
            name: "Casaca Jeans clasica con Capucha Forro Beige(Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/PrTM6fTq/casaca-jeans-capucha-04.png",
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
            op: "1",
            name: "Casaca Jeans clasica con Capucha Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/T3PJ6kyM/casaca-jeans-capucha-03.png",
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
          ////////////

          //color blanco casaca con capucha

          {
            id: "6",
            op: "2",
            name: "Casaca Jeans clasica con Capucha Forro Blanco(Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/4xFbNztK/casaca-jeans-capucha-06.png",
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
            id: "7",
            op: "2",
            name: "Casaca Jeans clasica con Capucha Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/MGC71q9q/casaca-jeans-capucha-07.png",
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
            id: "8",
            op: "2",
            name: "Casaca Jeans clasica con Capucha Forro Blanco(Maiz)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/gJ3vDQ7R/casaca-jeans-capucha-05.png",
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
            id: "9",
            op: "2",
            name: "Casaca Jeans clasica con Capucha Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/1XHDx6s3/casaca-jeans-capucha-08.png",
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
          /////////////////
          {
            id: "10",
            op: "3",
            name: "Casaca Jeans con Capucha Forro Teddy (Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/6p06d0z3/casaca-jeans-capucha-12.png",
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
            id: "11",
            op: "3",
            name: "Casaca Jeans con Capucha Forro Teddy (Maiz)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Fz5QtdG8/casaca-jeans-capucha-09.png",
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
            id: "12",
            op: "3",
            name: "Casaca Jeans con Capucha Forro Teddy (Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/jjDVLQFB/casaca-jeans-capucha-10.png",
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
            id: "13",
            op: "3",
            name: "Casaca Jeans con Capucha Forro Teddy (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/fLd6vWZK/casaca-jeans-capucha-11.png",
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
      //Overoles
      {
        id: "6",
        grupo: 2,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Pantalon Perrito",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/Qd4t5MYT/Overol-Pantalon-Perrito-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Overol Perrito (Celeste)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Qd4t5MYT/Overol-Pantalon-Perrito-01.png",
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
            op: 0,
            name: "Overol Perrito (Cristal)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/5NrTCdqt/Overol-Pantalon-Perrito-02.png",
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
            op: 0,
            name: "Overol Perrito (Moteado)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/ydnr6w8s/Overol-Pantalon-Perrito-03.png",
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
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Jeans Tela Strech",
        href: "#",
        imageSrc: "https://i.postimg.cc/GpmX7Xjf/Overol-Jeans-Sttrech-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Overol Jeans Tela Strech (Cristal)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/GpmX7Xjf/Overol-Jeans-Sttrech-01.png",
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
            op: 0,
            name: "Overol Jeans Tela Strech (Celeste)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/15gPTKvf/Overol-Jeans-Sttrech-02.png",
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
            op: 0,
            name: "Overol Jeans Tela Strech (Maiz)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/wx1j8Hvq/Overol-Jeans-Sttrech-03.png",
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
            op: 0,
            name: "Overol Jeans Tela Strech (Moteado)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/qRS0MhRk/Overol-Jeans-Sttrech-04.png",
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
      //PANTALON
      {
        id: "8",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalón Baggy ",
        href: "#",
        imageSrc: "https://i.postimg.cc/G2ZdC2KZ/pantalon-baggy-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Pantalón Baggy  (Maiz)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/G2ZdC2KZ/pantalon-baggy-01.png",
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
            op: 0,
            name: "Pantalón Baggy  (Cristal)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/GmqRpzzP/pantalon-baggy-02.png",
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
            op: 0,
            name: "Pantalón Baggy (Moteado)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/KjPSh5RM/pantalon-baggy-04.png",
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
            op: 0,
            name: "Pantalón Baggy (Celeste)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/zvSMcXcw/pantalon-baggy-03.png",
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
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalon Jogger Strech  ",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/jqB09K6Q/Dise-o-sin-t-tulo-7-removebg-preview.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Pantalon Jogger Strech  (Cristal)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/50sd5dfB/pantalon-jogeer-04.png",
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
            op: 0,
            name: "Pantalon Jogger Strech  (Celeste)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/nr9RX6rc/pantalon-jogeer-02.png",
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
            op: 0,
            name: "Pantalon Jogger Strech  (Maiz)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/Nf4J57fX/pantalon-jogeer-03.png",
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
            op: 0,
            name: "Pantalon Jogger Strech  (Moteado)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/jjGvGMvp/pantalon-jogeer-01.png",
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
        id: "10",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalon Cargo  ",
        href: "#",
        imageSrc: "https://i.postimg.cc/k4Q7smmW/pantalon-cargo-nino-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Pantalon Cargo (Moteado)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/k4Q7smmW/pantalon-cargo-nino-01.png",
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
            op: 0,
            name: "Pantalon Cargo   (Cristal)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/x8jVPNgS/pantalon-cargo-nino-02.png",
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
            op: 0,
            name: "Pantalon Cargo   (Madera)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/c4HNgYrR/pantalon-cargo-nino-03.png",
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
            op: 0,
            name: "Pantalon Cargo   (Celeste)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/W4RRHHS8/pantalon-cargo-nino-04.png",
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
            op: 0,
            name: "Pantalon Cargo   (Maiz)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/DwGf0sMC/pantalon-cargo-nino-05.png",
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
        id: "11",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalon Drill  ",
        href: "#",
        imageSrc: "https://i.postimg.cc/W4sL4pLr/pantalon-drill-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Pantalon Drill (Marron)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/W4sL4pLr/pantalon-drill-02.png",
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
            op: 0,
            name: "Pantalon Drill   (Verde)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/DzGgRLYP/pantalon-drill-01.png",
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
            op: 0,
            name: "Pantalon Drill (Azul Noche)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/vHpxkkRC/pantalon-drill-05.png",
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
            op: 0,
            name: "Pantalon Drill   (Beige)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/yNrDhbTf/pantalon-drill-04.png",
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
            op: 0,
            name: "Pantalon Drill   (Plomo)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/cLvygkr1/pantalon-drill-03.png",
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
        id: "12",
        grupo: 4,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Camisa Jean",
        href: "#",
        imageSrc: "https://i.postimg.cc/ZqBSRG78/Camisa-Jeans-Strech-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Camisa Jeans Strech (Celeste)",
            codigo: "Codigo",
            description: `Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/ZqBSRG78/Camisa-Jeans-Strech-01.png",
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
            op: 0,
            name: "Camisa Jeans Strech  (Cristal)",
            codigo: "Codigo",
            description: `Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/HsY15cvs/Camisa-Jeans-Strech-02.png",
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
            op: 0,
            name: "Camisa Jeans Strech  (Maiz)",
            codigo: "Codigo",
            description: `Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/wBsCHhMF/Camisa-Jeans-Strech-03.png",
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
            op: 0,
            name: "Camisa Jeans Strech   (Moteado)",
            codigo: "Codigo",
            description: `Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/W3YgnJ6L/Camisa-Jeans-Strech-04.png",
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
      //overol Short
      {
        id: "13",
        grupo: 5,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Short Jeans ",
        href: "#",
        imageSrc: "https://i.postimg.cc/2SdZqjQJ/Overol-Short-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Overol Short Jeans  (Celeste)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "5",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/2SdZqjQJ/Overol-Short-01.png",
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
            op: 0,
            name: "Overol Short Jeans  (Maiz)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "5",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/nMbXzNCp/Overol-Short-02.png",
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
            op: 0,
            name: "Overol Short Jeans  (Moteado)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "5",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/HsX22g00/Overol-Short-03.png",
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
            op: 0,
            name: "Overol Short Jeans  (Cristal)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "5",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/Jz8QY2Kf/Overol-Short-04.png",
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
      //SHORT
      {
        id: "14",
        grupo: 6,
        color: 0,
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
            op: 0,
            name: "Short Tafeta  (Lacre)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "1",
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
            op: 0,
            name: "Short Tafeta (Acero)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "1",
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
            op: 0,
            name: "Short Tafeta (Mostaza)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "1",
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
            op: 0,
            name: "Short Tafeta (Azul Noche)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "1",
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
            op: 0,
            name: "Short Tafeta (Negro)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "1",
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
            id: "6",
            op: 0,
            name: "Short Tafeta (Beige)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "1",
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
        id: "15",
        grupo: 6,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Bermuda Jeans",
        href: "#",
        imageSrc: "https://i.postimg.cc/fW0F61jy/Bermuda-Jeans-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Bermuda Jeans  (Moteado)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/fW0F61jy/Bermuda-Jeans-01.png",
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
            op: 0,
            name: "Bermuda Jeans  (Cristal)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/dV09KyP6/Bermuda-Jeans-02.png",
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
            op: 0,
            name: "Bermuda Jeans (Celeste)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/C1bG4Ckh/Bermuda-Jeans-03.png",
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
            op: 0,
            name: "Bermuda Jeans (Maiz)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/cL6fzGw5/Bermuda-Jeans-04.png",
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
        id: "16",
        grupo: 6,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Bermuda Jeans Cargo",
        href: "#",
        imageSrc: "https://i.postimg.cc/HnhL19Rr/bermuda-jeans-Cargo-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Bermuda Jeans Cargo (Celeste)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            //https://i.postimg.cc/rmT0fg2c/bermuda-jeans-Cargo-01.png
            imageSrc:
              "https://i.postimg.cc/HnhL19Rr/bermuda-jeans-Cargo-02.png",
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
            op: 0,
            name: "Bermuda Jeans Cargo  (Maiz)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/k5mgC41v/bermuda-jeans-Cargo-03.png",
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
            op: 0,
            name: "Bermuda Jeans Cargo (Cristal)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/rmT0fg2c/bermuda-jeans-Cargo-01.png",
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
            op: 0,
            name: "Bermuda Jeans Cargo (Moteado)",
            codigo: "Codigo",
            description: `Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "6",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/KjwmHv3L/bermuda-jeans-Cargo-04.png",
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
  const ProductDetailsf = {
    categories: [
      //GRUPO(1) Casacas
      {
        id: "1",
        grupo: 1,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casaca Jeans con Capucha",
        href: "#",
        imageSrc: "https://i.postimg.cc/KzGvzXG8/casacanina-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          //color 1
          {
            id: "1",
            op: "1",
            name: "Casaca Jeans Forro Rosado (Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/KzGvzXG8/casacanina-01.png",
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
            op: "1",
            name: "Casaca Jeans Forro Rosado  (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/66HSgkFf/casacanina-02.png",
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
            op: "1",
            name: "Casaca Jeans Forro Rosado (Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/j2zhxJZf/casacanina-03.png",
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
          //color 2
          {
            id: "4",
            op: "2",
            name: "Casaca Jeans Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/LXKz53hs/casacanina-Blanco-01.png",
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
            op: "2",
            name: "Casaca Jeans Forro Blanco  (Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/BbZPPY3J/casacanina-Blanco-02.png",
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
            id: "6",
            op: "2",
            name: "Casaca Jeans Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/jd5JsFvX/casacanina-Blanco-03.png",
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
          //color 3
          {
            id: "7",
            op: "3",
            name: "Casaca Jeans Forro Lila (Moteado)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/d3Xryb9G/casacanina-Lila-01.png",
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
            id: "8",
            op: "3",
            name: "Casaca Jeans Forro Lila  (Cristal)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/d3DSvK1C/casacanina-Lila-02.png",
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
            id: "9",
            op: "3",
            name: "Casaca Jeans Forro Lila (Celeste)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/DyTBBsQs/casacanina-Lila-03.png",
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
      //Casaca Drill nina
      {
        id: "2",
        grupo: 1,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Casaca Drill",
        href: "#",
        imageSrc: "https://i.postimg.cc/4NSVc4SN/Casaca-drill-nina-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          //color 1
          {
            id: "1",
            op: 0,
            name: "Casaca Drill (Rojo)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/dQR5GC2Q/Casaca-drill-nina-01.png",
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
            op: 0,
            name: "Casaca Drill (Lola)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/4NSVc4SN/Casaca-drill-nina-02.png",
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
            op: 0,
            name: "Casaca Drill (Verde)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/pdxThgRL/Casaca-drill-nina-03.png",
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
            op: 0,
            name: "Casaca Drill (Rosa)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/TP7pztv2/Casaca-drill-nina-04.png",
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
            op: 0,
            name: "Casaca Drill (Beige)",
            codigo: "Codigo",
            description: `Casaca`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/FKRKV0dM/Casaca-drill-nina-05.png",
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
        grupo: 2,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Pantalon Lady",
        href: "#",
        imageSrc: "https://i.postimg.cc/j2gGbz7d/Overolnina-Lady-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Overol Pantalon Lady (Moteado)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/j2gGbz7d/Overolnina-Lady-01.png",
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
            op: 0,
            name: "Overol Pantalon Lady (Celeste)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/D06byzvz/Overolnina-Lady-02.png",
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
            op: 0,
            name: "Overol Pantalon Lady (Cristal)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/0QP9c0vz/Overolnina-Lady-03.png",
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
        grupo: 2,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Pantalon Lola",
        href: "#",
        imageSrc: "https://i.postimg.cc/HsND1KvX/Overol-Pantalon-Lola-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Overol Pantalon Lola (Cristal)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/HsND1KvX/Overol-Pantalon-Lola-01.png",
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
            op: 0,
            name: "Overol Pantalon Lola (Celeste)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/3xG65wvQ/Overol-Pantalon-Lola-02.png",
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
            op: 0,
            name: "Overol Pantalon Lola (Moteado)",
            codigo: "Codigo",
            description: `Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/tRf2qjyq/Overol-Pantalon-Lola-03.png",
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
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalon Ancho Jeans",
        href: "#",
        imageSrc: "https://i.postimg.cc/GpngBgQB/pantalon-ancho-nina-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: " Pantalon Jeans (Cristal)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/GpngBgQB/pantalon-ancho-nina-01.png",
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
            op: 0,
            name: "Pantalon Jeans(Celeste)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/ydYP9MSN/pantalon-ancho-nina-02.png",
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
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalon Jeans Jogger",
        href: "#",
        imageSrc: "https://i.postimg.cc/59s5tHCg/pantalon-jogger-nina-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: " Pantalon Jeans Jogger (Cristal)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/59s5tHCg/pantalon-jogger-nina-01.png",
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
            op: 0,
            name: "Pantalon Jeans Jogger(Moteado)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/sXwW18vx/pantalon-jogger-nina-02.png",
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
            op: 0,
            name: " Pantalon Jeans Jogger (Celeste)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/2ytB7Zdf/pantalon-jogger-nina-03.png",
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
        id: "10",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Pantalon Cargo",
        href: "#",
        imageSrc: "https://i.postimg.cc/7PVbggXb/pantalon-cargo-nina-04.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: " Pantalon Cargo (Celeste)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/tRhW8ZkH/pantalon-cargo-nina-02.png",
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
            op: 0,
            name: "Pantalon Cargo (Moteado)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/3w4D1dNV/pantalon-cargo-nina-01.png",
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
            op: 0,
            name: " Pantalon Cargo (Celeste)",
            codigo: "Codigo",
            description: `Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/j5YChcGn/pantalon-cargo-nina-03.png",
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
        grupo: 4,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Overol Short",
        href: "#",
        imageSrc: "https://i.postimg.cc/W3wS3KL0/Overol-Short-nina-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: " Overol Short Jeans (Cristal)",
            codigo: "Codigo",
            description: `Overol Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/W3wS3KL0/Overol-Short-nina-01.png",
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
            op: 0,
            name: "Overol Short Jeans(Celeste)",
            codigo: "Codigo",
            description: `Overol Short`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/CxCRWVjC/Overol-Short-nina-02.png",
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
        grupo: 4,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "JUMPPER",
        href: "#",
        imageSrc: "https://i.postimg.cc/D0Nvq0fR/overol-falda-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "JUMPPER (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/D0Nvq0fR/overol-falda-01.png",
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
            op: 0,
            name: "JUMPPER (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/zBX86KV9/overol-falda-02.png",
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
            op: 0,
            name: "JUMPPER (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/NMJBcFXL/overol-falda-03.png",
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

  const ProductDetailsmc = {
    categories: [
      //GRUPO(1) Casacas
      {
        id: "1",
        grupo: 1,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Clasico sin Capucha",
        href: "#",
        imageSrc: "https://i.postimg.cc/7htwQWKN/Conjunto-Overol-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Overol Clasico Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/mkQSt8SR/Conjunto-Overol-Beige-01.png",
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
            op: "1",
            name: "Conjunto Overol Clasico Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Bb8dk9sp/Conjunto-Overol-Beige-02.png",
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
            op: "1",
            name: "Conjunto Overol Clasico Forro Beige (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/RCHmgKFB/Conjunto-Overol-Beige-03.png",
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
            op: "1",
            name: "Conjunto Overol Clasico Forro Beige (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/9QzJBtmP/Conjunto-Overol-Beige-04.png",
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
          //////
          {
            id: "5",
            op: "2",
            name: "Conjunto Overol Clasico Forro Blanco (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/7htwQWKN/Conjunto-Overol-01.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Overol Clasico Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/qRZR6q2w/Conjunto-Overol-02.png",
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
            id: "7",
            op: "2",
            name: "Conjunto Overol Clasico Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/SRF63mKy/Conjunto-Overol-03.png",
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
            id: "8",
            op: "2",
            name: "Conjunto Overol Clasico Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/fTmpgbBr/Conjunto-Overol-04.png",
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
        grupo: 1,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Jeans Strech  con Capucha",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/G3xryYmh/Conjunto-Overol-Jeans-Strech-Beige-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Overol Jeans Strech Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/G3xryYmh/Conjunto-Overol-Jeans-Strech-Beige-01.png",
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
            op: "1",
            name: "Conjunto Overol Jeans Strech Forro Beige (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/mr3TR6hR/Conjunto-Overol-Jeans-Strech-Beige-02.png",
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
            op: "1",
            name: "Conjunto Overol Jeans Strech Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/gk0yZCPS/Conjunto-Overol-Jeans-Strech-Beige-03.png",
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
            op: "1",
            name: "Conjunto Overol Jeans Strech Forro Beige (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/MK4sK6jb/Conjunto-Overol-Jeans-Strech-Beige-04.png",
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
            op: "2",
            name: "Conjunto Overol Jeans Strech Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/wB8vcmnf/Conjunto-Overol-Jeans-Strech-Blanco-01.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Overol Jeans Strech Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Gm5cqsVw/Conjunto-Overol-Jeans-Strech-Blanco-02.png",
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
            id: "7",
            op: "2",
            name: "Conjunto Overol Jeans Strech Forro Blanco (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/TwXv4jcS/Conjunto-Overol-Jeans-Strech-Blanco-03.png",
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
            id: "8",
            op: "2",
            name: "Conjunto Overol Jeans Strech Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/3RhzB88Q/Conjunto-Overol-Jeans-Strech-Blanco-04.png",
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

      ////////////////

      {
        id: "5",
        grupo: 2,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Clasico",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/8Pm63bg6/Conjunto-Clasico-Pantalon-Blanco-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Clasico con Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/qvRgLTpx/conjunto-clasic-sin-cap-01.png",
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
            op: "1",
            name: "Conjunto Clasico con Forro Beige (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/jqcskFgg/conjunto-clasic-sin-cap-02.png",
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
            op: "1",
            name: "Conjunto Clasico con Forro Beige (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/P5ghwsJx/conjunto-clasic-sin-cap-03.png",
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
            op: "1",
            name: "Conjunto Clasico con Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/3xvQ7S1H/conjunto-clasic-sin-cap-04.png",
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
            op: "2",
            name: "Conjunto Clasico con Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/8Pm63bg6/Conjunto-Clasico-Pantalon-Blanco-01.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Clasico con Forro Blanco (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/QtPy2Ww2/Conjunto-Clasico-Pantalon-Blanco-02.png",
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
            id: "7",
            op: "2",
            name: "Conjunto Clasico con Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/qRXGL60c/Conjunto-Clasico-Pantalon-Blanco-03.png",
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
            id: "8",
            op: "2",
            name: "Conjunto Clasico con Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/FHzNX0BR/Conjunto-Clasico-Pantalon-Blanco-04.png",
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
        grupo: 2,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Drill",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/PrtpbTMf/conjunto-pantalon-drill-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Conjunto Pantalon Drill (Marron)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/PrtpbTMf/conjunto-pantalon-drill-02.png",
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
            op: 0,
            name: "Conjunto Pantalon Drill (Negro)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/RVymSTqr/conjunto-pantalon-drill-06.png",
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
            op: 0,
            name: "Conjunto Pantalon Drill (Azul Noche)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/qRscRQp1/conjunto-pantalon-drill-05.png",
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
            op: 0,
            name: "Conjunto Pantalon Drill(Beige)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Dzdm4Nb4/conjunto-pantalon-drill-04.png",
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
            op: 0,
            name: "Conjunto Pantalon Drill(Verde)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/g0YmQ2nr/conjunto-pantalon-drill-01.png",
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
            id: "6",
            op: 0,
            name: "Conjunto Pantalon Drill(Plomo)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/MpgrfP8w/conjunto-pantalon-drill-03.png",
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
        id: "10",
        grupo: 2,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Clasico Pantalon Cargo",
        href: "#",
        imageSrc: "https://i.postimg.cc/Sssr9J91/Conjunto-Clasico-Beige-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Clasico  Forro Beige (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Sssr9J91/Conjunto-Clasico-Beige-01.png",
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
            op: "1",
            name: "Conjunto Clasico con Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/fW7cbc1W/Conjunto-Clasico-Beige-02.png",
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

          ///
          {
            id: "4",
            op: "2",
            name: "Conjunto Clasico Cargo con Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Y9SDMXqP/Conjunto-Clasico-Cargo-Blanco-01.png",
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
            op: "2",
            name: "Conjunto Clasico Cargo con Forro Blanco (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/W1Gsk46v/Conjunto-Clasico-Cargo-Blanco-02.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Clasico Cargo con Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/7YMxC6Ny/Conjunto-Clasico-Cargo-Blanco-03.png",
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
            id: "7",
            op: "2",
            name: "Conjunto Clasico Cargo con Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "4",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/sXF89PVH/Conjunto-Clasico-Cargo-Blanco-04.png",
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
        id: "11",
        grupo: 2,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Cargo",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/Vkvz6YKt/conjunto-pantalon-cargo-03.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Cargo con Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Vkvz6YKt/conjunto-pantalon-cargo-03.png",
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
            op: "1",
            name: "Conjunto Cargo con Forro Beige (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/D05KvDs5/conjunto-pantalon-cargo-05.png",
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
            op: "1",
            name: "Conjunto Cargo con Forro Beige (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/8PPSKpQY/conjunto-pantalon-cargo-08.png",
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
            op: "1",
            name: "Conjunto Cargo con Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/8PKVx2Tz/conjunto-pantalon-cargo-02.png",
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

          //////
          {
            id: "5",
            op: "2",
            name: "Conjunto Cargo  Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/j5bVzK4Z/conjunto-pantalon-cargo-04.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Cargo  Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/W3nygZ31/conjunto-pantalon-cargo-07.png",
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
            id: "7",
            op: "2",
            name: "Conjunto Cargo  Forro Blanco (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/dt7Wtp81/conjunto-pantalon-cargo-01.png",
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
            id: "8",
            op: "2",
            name: "Conjunto Cargo  Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "5",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/tTS59NJW/conjunto-pantalon-cargo-06.png",
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
        id: "12",
        grupo: 2,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Jogger",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/gJmGDYkg/conjunto-pantalon-jogger-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Jogger Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "6",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/3RWfc6Dn/Conjunto-Jogger-02.png",
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
            op: "1",
            name: "Conjunto Jogger  Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "6",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/wjHfp3mt/Conjunto-Jogger-03.png",
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
          //////////////////
          {
            id: "3",
            op: "2",
            name: "Conjunto Jogger  Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "6",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/gJmGDYkg/conjunto-pantalon-jogger-02.png",
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
            op: "2",
            name: "Conjunto Jogger Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "6",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/nLCnSdvD/conjunto-pantalon-jogger-04.png",
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
            op: "2",
            name: "Conjunto Jogger Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "6",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/9FyMhNw5/conjunto-pantalon-jogger-03.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Jogger Forro Blanco (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "6",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/hGVh0DTY/conjunto-pantalon-jogger-01.png",
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
        id: "13",
        grupo: 2,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/bNyTg508/conjunto-pantalon-clasico-08.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Pantalon Clasico Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/bNyTg508/conjunto-pantalon-clasico-08.png",
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
            op: "1",
            name: "Conjunto Pantalon Clasico Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/yNccshhv/conjunto-pantalon-clasico-07.png",
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
            op: "1",
            name: "Conjunto Pantalon Clasico Forro Beige (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/3JqvGfnt/conjunto-pantalon-clasico-04.png",
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
            op: "1",
            name: "Conjunto Pantalon Clasico Forro Beige (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/d1n7V5hm/conjunto-pantalon-clasico-01.png",
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

          //////////////////
          {
            id: "5",
            op: "2",
            name: "Conjunto Pantalon Clasico Forro Blanco (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/gk1xjX25/conjunto-pantalon-clasico-06.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Pantalon Clasico Forro Blanco(Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/YSz0ddzK/conjunto-pantalon-clasico-05.png",
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
            id: "7",
            op: "2",
            name: "Conjunto Pantalon Clasico Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/hjCjBhY2/conjunto-pantalon-clasico-03.png",
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
            id: "8",
            op: "2",
            name: "Conjunto Pantalon Clasico Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "7",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/qvf70PmH/conjunto-pantalon-clasico-02.png",
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
        id: "21",
        grupo: 2,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Cargo (Sin Forro)",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/MKW0Z4BP/conjunto-pantalon-cargo-sinforro-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Conjunto Pantalon Cargo sin Forro (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "8",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/MKW0Z4BP/conjunto-pantalon-cargo-sinforro-01.png",
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
            op: 0,
            name: "Conjunto Pantalon Cargo sin Forro (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "8",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/4Nq32HX6/conjunto-pantalon-cargo-sinforro-02.png",
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
            op: 0,
            name: "Conjunto Pantalon Cargo sin Forro (Madera)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "8",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Zn0TV4gs/conjunto-pantalon-cargo-sinforro-03.png",
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
            op: 0,
            name: "Conjunto Pantalon Cargo sin Forro (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "8",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/DzgnhS3Y/conjunto-pantalon-cargo-sinforro-04.png",
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
            op: 0,
            name: "Conjunto Pantalon Cargo sin Forro (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "8",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/d13PKnBL/conjunto-pantalon-cargo-sinforro-05.png",
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

          //////////////////
        ],
      },
      {
        id: "22",
        grupo: 2,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon  (Sin Forro)",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/DwQfnY7y/conjunto-pantalon-sinforro-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Conjunto Pantalon  sin Forro (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "9",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/DwQfnY7y/conjunto-pantalon-sinforro-01.png",
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
            op: 0,
            name: "Conjunto Pantalon  sin Forro (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "9",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/gj6d5gMp/conjunto-pantalon-sinforro-02.png",
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
            op: 0,
            name: "Conjunto Pantalon  sin Forro (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "9",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/mgVD76Jp/conjunto-pantalon-sinforro-03.png",
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
            op: 0,
            name: "Conjunto Pantalon  sin Forro (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "9",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Z5Dmbk1m/conjunto-pantalon-sinforro-04.png",
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

          //////////////////
        ],
      },

      ///////////////////////////////////////

      {
        id: "14",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Camisa + Bermuda ",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/SRMTjg7q/Conjunto-Camisa-Bermuda-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Conjunto Camisa + Bermuda (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/SRMTjg7q/Conjunto-Camisa-Bermuda-01.png",
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
            op: 0,
            name: "Conjunto Camisa + Bermuda (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/FHWBWkKM/Conjunto-Camisa-Bermuda-02.png",
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
            op: 0,
            name: "Conjunto Camisa + Bermuda (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Y26ycs9f/Conjunto-Camisa-Bermuda-03.png",
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
            op: 0,
            name: "Conjunto Camisa + Bermuda(Maiz)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/zB1S0qnm/Conjunto-Camisa-Bermuda-04.png",
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
        id: "15",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Camisa + Pantalon Cargo ",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/KvLTp68x/Conjunto-Camisa-Pantalon-Cargo-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Conjunto Camisa + Pantalon Cargo (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/KvLTp68x/Conjunto-Camisa-Pantalon-Cargo-01.png",
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
            op: 0,
            name: "Conjunto Camisa + Pantalon Cargo (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/MTvM74Lk/Conjunto-Camisa-Pantalon-Cargo-02.png",
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
            op: 0,
            name: "Conjunto Camisa + Pantalon Cargo (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/T3fK7hsJ/Conjunto-Camisa-Pantalon-Cargo-03.png",
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
            op: 0,
            name: "Conjunto Camisa + Pantalon Cargo (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/N005tSBy/Conjunto-Camisa-Pantalon-Cargo-04.png",
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
        id: "16",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Camisa + Pantalon Baggy ",
        href: "#",
        imageSrc: "https://i.postimg.cc/brmrTfk6/camisa-pantalon-baggy-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Conjunto Camisa + Pantalon Baggy  (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/brmrTfk6/camisa-pantalon-baggy-01.png",
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
            op: 0,
            name: "Conjunto Camisa + Pantalon Baggy (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/rmFL90jk/camisa-pantalon-baggy-02.png",
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
            op: 0,
            name: "Conjunto Camisa + Pantalon Baggy (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/CMRKyXCV/camisa-pantalon-baggy-03.png",
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
            op: 0,
            name: "Conjunto Camisa + Pantalon Baggy (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/jdNd2fkg/camisa-pantalon-baggy-04.png",
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
        id: "20",
        grupo: 3,
        color: 0,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Camisa + Short Cargo ",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/3NgtPtdB/Conjunto-camisa-bermudacargo-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: 0,
            name: "Conjunto Camisa + Short Cargo (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/3NgtPtdB/Conjunto-camisa-bermudacargo-01.png",
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
            op: 0,
            name: "Conjunto Camisa + Short Cargo (Maiz)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/59vKY2nC/Conjunto-camisa-bermudacargo-02.png",
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
            op: 0,
            name: "Conjunto Camisa + Short Cargo (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/BQ0YxfVw/Conjunto-camisa-bermudacargo-03.png",
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
            op: 0,
            name: "Conjunto Camisa + Short Cargo (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Camisa`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "3",
            subgrupo: "3",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/dVW5Pktz/Conjunto-camisa-bermudacargo-04.png",
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
      ////////////////
      {
        id: "17",
        grupo: 4,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Clasico con Capucha (3 Piezas) ",
        href: "#",
        imageSrc: "https://i.postimg.cc/wBqgQhs6/3piezas-forro-blanco-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto 3 Piezas Jeans Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/HsLTd49r/Conjunto3-Piezas-Forro-Beige-01.png",
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
            op: "1",
            name: "Conjunto 3 Piezas Jeans Forro Beige (Moteado)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/fyJqgLYR/Conjunto3-Piezas-Forro-Beige-02.png",
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
            op: "1",
            name: "Conjunto 3 Piezas Jeans Forro Beige  (Maiz)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/cHrwY8QT/Conjunto3-Piezas-Forro-Beige-03.png",
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
            op: "1",
            name: "Conjunto 3 Piezas Jeans Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Y087HjPK/Conjunto3-Piezas-Forro-Beige-04.png",
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
          //////////////
          {
            id: "5",
            op: "2",
            name: "Conjunto 3 Piezas Jeans Strech Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/wBqgQhs6/3piezas-forro-blanco-02.png",
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
            id: "6",
            op: "2",
            name: "Conjunto 3 Piezas Jeans Strech Forro Blanco(Celeste)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/L51p8DGV/3piezas-forro-blanco-03.png",
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
            id: "7",
            op: "2",
            name: "Conjunto 3 Piezas Jeans Strech Forro Blanco(Maiz)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/XX60GFb6/3piezas-forro-blanco-01.png",
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
            id: "8",
            op: "2",
            name: "Conjunto 3 Piezas Jeans Strech Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "1",
            sexo: "nino",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/4NpY8Qnt/3piezas-forro-blanco-04.png",
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
        id: "19",
        grupo: 4,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Cargo con Capucha (3 Piezas) ",
        href: "#",
        imageSrc: "https://i.postimg.cc/9fC9L7cc/Conjunto-3p-cargo-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto 3 Piezas Pantalon Cargo Forro Beige (Cristal)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/9fC9L7cc/Conjunto-3p-cargo-01.png",
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
            op: "1",
            name: "Conjunto 3 Piezas Pantalon Cargo Forro Beige(Maiz)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/nVjkWgyr/Conjunto-3p-cargo-02.png",
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
            op: "1",
            name: "Conjunto 3 Piezas Pantalon Cargo Forro Beige(Moteado)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/t45tPjxS/Conjunto-3p-cargo-03.png",
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
            op: "1",
            name: "Conjunto 3 Piezas Pantalon Cargo Forro Beige (Celeste)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/xd1G34G0/Conjunto-3p-cargo-04.png",
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

          /////////
          {
            id: "5",
            op: "2",
            name: "Conjunto 3 Piezas Pantalon Cargo Forro Blanco(Celeste)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/zXnbpQ0P/3piezas-03.png",
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
            id: "6",
            op: "2",
            name: "Conjunto 3 Piezas Pantalon Cargo Forro Blanco(Cristal)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/CxrF4HTQ/3piezas-01.png",
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
            id: "7",
            op: "2",
            name: "Conjunto 3 Piezas Pantalon Cargo Forro Blanco(Maiz)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/Dztn9vzQ/3piezas-02.png",
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
            id: "8",
            op: "2",
            name: "Conjunto 3 Piezas Pantalon Cargo  Forro Blanco(Moteado)",
            codigo: "Codigo",
            description: `Conjunto 3 Piezas`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "4",
            subgrupo: "2",
            sexo: "nino",
            href: "#",
            imageSrc: "https://i.postimg.cc/W3gTjBDB/3piezas-04.png",
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
  //ROSADO,BLANCO,LILA
  const ProductDetailsfc = {
    categories: [
      //GRUPO(1) Casacas
      {
        id: "1",
        grupo: 1,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Lola ",
        href: "#",
        imageSrc: "https://i.postimg.cc/vBP5jtvW/Conjunto-Overol-Lola-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          ///
          {
            id: "1",
            op: "1",
            name: "Conjunto Overol Lola Jeans Strech Forro Rosado  (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/hGKr5rmG/Conjunto-Overol-Lola-04.png",
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
            op: "1",
            name: "Conjunto Overol Lola Jeans Strech Forro Rosado  (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/q7bpt1Xh/Conjunto-Overol-Lola-05.png",
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
            op: "1",
            name: "Conjunto Overol Lola Jeans Strech Forro Rosado  (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/g2xsFJSC/Conjunto-Overol-Lola-06.png",
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
          //
          {
            id: "4",
            op: "2",
            name: "Conjunto Overol Lola Jeans Strech Forro Blanco  (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/CL1X5wrN/Conjunto-Overol-Lola-07.png",
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
            op: "2",
            name: "Conjunto Overol Lola Jeans Strech Forro Blanco  (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/m2WxdvmN/Conjunto-Overol-Lola-08.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Overol Lola Jeans Strech Forro Blanco  (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/6pw8N1pC/Conjunto-Overol-Lola-09.png",
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
          //
          {
            id: "7",
            op: "3",
            name: "Conjunto Overol Lola Jeans Strech Forro Lila (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/vBP5jtvW/Conjunto-Overol-Lola-01.png",
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
            id: "8",
            op: "3",
            name: "Conjunto Overol Lola Jeans Strech Forro Lila (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/hjkKSfcf/Conjunto-Overol-Lola-02.png",
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
            id: "9",
            op: "3",
            name: "Conjunto Overol Lola Jeans Strech Forro Lila  (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/C1Y494f1/Conjunto-Overol-Lola-03.png",
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
        grupo: 1,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Overol Lady",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/Jh1HDX4H/Conjunto-Overol-Strech-Lady-04.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Overol Lady Jeans Strech Forro Rosado  (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Jh1HDX4H/Conjunto-Overol-Strech-Lady-04.png",
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
            op: "1",
            name: "Conjunto Overol Lady Jeans Strech Forro Rosado  (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/g0SyGsq2/Conjunto-Overol-Strech-Lady-05.png",
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
            op: "1",
            name: "Conjunto Overol Lady Jeans Strech Forro Rosado (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/CLg8T9T4/Conjunto-Overol-Strech-Lady-06.png",
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
          //
          {
            id: "4",
            op: "2",
            name: "Conjunto Overol Lady Jeans Strech Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/JnCrHVQ6/Conjunto-Overol-Strech-Lady-07.png",
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
            op: "2",
            name: "Conjunto Overol Lady Jeans Strech Forro Blanco  (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/Y2yPdN5k/Conjunto-Overol-Strech-Lady-08.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Overol Lady Jeans Strech Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/ZKHxfJBN/Conjunto-Overol-Strech-Lady-09.png",
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
          //
          {
            id: "7",
            op: "3",
            name: "Conjunto Overol Lady Jeans Strech Forro Lila (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/BQ6w92vQ/Conjunto-Overol-Strech-Lady-01.png",
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
            id: "8",
            op: "3",
            name: "Conjunto Overol Lady Jeans Strech Forro Lila (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/K81HXKyL/Conjunto-Overol-Strech-Lady-02.png",
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
            id: "9",
            op: "3",
            name: "Conjunto Overol Lady Jeans Strech Forro Lila (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Overol`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "1",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/rpSgcxZd/Conjunto-Overol-Strech-Lady-03.png",
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
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Clasico ",
        href: "#",
        imageSrc: "https://i.postimg.cc/1z8SkSck/c1.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Pantalon con Forro Rosado (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/1z8SkSck/c1.png",
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
            op: "1",
            name: "Conjunto Pantalon con Forro Rosado   (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/25gYmt0V/c2.png",
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
            op: "1",
            name: "Conjunto Pantalon con Forro Rosado   (Azul Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/rpR6hJqc/c3.png",
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
          ///
          {
            id: "4",
            op: "2",
            name: "Conjunto Pantalon con Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/FKLqbHxH/c4.png",
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
            op: "2",
            name: "Conjunto Pantalon con Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/SQrPf5cC/c5.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Pantalon con Forro Blanco  (Azul Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "1",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/dVTnpSZW/c6.png",
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
        grupo: 2,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Jogger",
        href: "#",
        imageSrc: "https://i.postimg.cc/cCQs0VzK/conjunto-joger-nina-01.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Pantalon Jogger con Forro Rosado (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/cCQs0VzK/conjunto-joger-nina-01.png",
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
            op: "1",
            name: "Conjunto Pantalon Jogger con Forro Rosado (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/xdhYHfDJ/conjunto-joger-nina-02.png",
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
            op: "1",
            name: "Conjunto Pantalon Jogger con Forro Rosado (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/KjdgHSMR/conjunto-joger-nina-03.png",
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
          //////////
          {
            id: "4",
            op: "2",
            name: "Conjunto Pantalon Jogger con Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/50802YYN/conjunto-joger-nina-04.png",
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
            op: "2",
            name: "Conjunto Pantalon Jogger con Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/4NfdX3Js/conjunto-joger-nina-05.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Pantalon Jogger con Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/KzhGwGqX/conjunto-joger-nina-06.png",
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
        grupo: 2,
        color: 1,
        date: "July 12, 2021",
        datetime: "2021-07-12",
        status: "delivery",
        productName: "Conjunto Pantalon Cargo",
        href: "#",
        imageSrc:
          "https://i.postimg.cc/7YK6gwLx/Conjunto-panta-cargo-nina-02.png",
        imageAlt:
          "Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.",
        details: [
          {
            id: "1",
            op: "1",
            name: "Conjunto Pantalon Cargo con Forro Rosado (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/7YK6gwLx/Conjunto-panta-cargo-nina-02.png",
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
            op: "1",
            name: "Conjunto Pantalon Cargo con Forro Rosado (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/TY1GvmR6/Conjunto-panta-cargo-nina-03.png",
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
            op: "1",
            name: "Conjunto Pantalon Cargo con Forro Rosado (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/Kv84hY28/rosado-01.png",
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
          //////////
          {
            id: "4",
            op: "2",
            name: "Conjunto Pantalon Cargo con Forro Blanco (Moteado)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc:
              "https://i.postimg.cc/tRt74hQn/Conjunto-panta-cargo-nina-01.png",
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
            op: "2",
            name: "Conjunto Pantalon Cargo con Forro Blanco (Celeste)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/mgkCbw7J/blanco-01.png",
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
            id: "6",
            op: "2",
            name: "Conjunto Pantalon Cargo con Forro Blanco (Cristal)",
            codigo: "Codigo",
            description: `Conjunto Pantalon`,
            formato1: "Tallas (2,4,6,8) Precio x Mayor S/.38",
            formato2: "Tallas (10,12) Precio x Mayor S/.40",
            grupo: "2",
            subgrupo: "2",
            sexo: "nina",
            href: "#",
            imageSrc: "https://i.postimg.cc/85p1Sy6r/blanco-02.png",
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
  let [isOpenGuias, setIsOpenGuias] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [contador, setContador] = useState(false);
  const [show, setShow] = useState(false);

  const [titulo, setTitulo] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function ocultaTallas() {
    //document.getElementById("idtallas").style.visibility = "hidden";
  }
  function openModal(a, b, c) {
    /*document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("idtallas").style.visibility = "hidden";
    });*/
    //console.log(a);
    //console.log(b);
    //console.log(c);
    setSubGrupo(a);

    //document.getElementById("idtallas").style.display = "hidden";
    //document.getElementById("idtallas").style.visibility = "hidden";
    //console.log(a);
    //console.log(b);
    setTallita(2);
    setColores(b);
    setIsOpen(true);
    setParametro(a); //aqui se aplica el cambio de las tallas
    setGrupo(c); //aqui se aplica el cambio de las tallas
    setRadio("1");

    setTitulo("");

    //ocultaTallas();
    //document.getElementById("idtallas").style.visibility = "hidden";
    //console.log(a);
    //console.log(b);
    //idtitulo
    //document.getElementById("idtallas").style.visibility = "hidden";

    /*if (a == 8 || a == 9 || a == 11) {
      document.getElementById("idCarrito").style.visibility = "hidden";
    } else {
      document.getElementById("idCarrito").style.visibility = "visible";
    }*/
    //document.getElementById("nodisponible").style.visibility = "hidden";
    //onClickHandler(index, grupo, subgrupo, valor, sexo) {
    //2,parametroDetalle.grupo, parametroDetalle.subgrupo, params.valorAbsoluto,  params.sexo

    //document.getElementById("idcosto").innerText = "";
    /*TallasSeleccionm.seleccion.map((image) =>
      image.grupo === "2" && image.subgrupo === "1"
        ? image.details.map(
            (item, itemIdx) =>
              item.talla == "2"
                ? //document.getElementById("idcosto").innerText =
                  //item.precio
                  item.precio === "S/.0"
                  ? ocultarDatos("0")
                  : mostrarDatos(item.precio)
                : null
            //(costo = 20)
          )
        : null
    );*/
    //document.getElementById("idCarrito").style.visibility = "hidden";

    //alert(b);
  }
  function closeModalGuias() {
    setIsOpenGuias(false);
  }

  function openModalGuias(a) {
    setIsOpenGuias(true);
    //setParametro(a); //aqui se aplica el cambio de las tallas
  }
  function loadModal(a) {
    //aqui se aplica el cambio de las tallas
    //Container(2, onClickHandler(2, params.id, parametro), onLoad, 2);
    /*active={activeIndex === 2}
                                onClick={() =>
                                  onClickHandler(
                                    2,
                                    parametroDetalle.grupo,
                                    parametroDetalle.subgrupo
                                  )
                                }*/
    //const [activeIndex, setActiveIndex] = useState(2);
    //console.log(parametroDetalle);
  }

  function Container({ active, onClick, onLoad, id }) {
    return (
      <div
        key={id}
        className={`rounded-lg  bg-black text-white  text-center h-6 w-10  ${
          active
            ? "active"
            : "text-black bg-slate-300 text-center  h-6 w-10 container rounded-lg"
        }`}
        onClick={onClick}
        onLoad={onLoad}
      >
        {id}
      </div>
    );
  }

  function openMensaje() {
    setShow(true);
  }
  function closeMensaje() {
    setShow(false);
  }
  //const [selectedColor, setSelectedColor] = useState(item.id[0])
  //SELECCION
  function valorSeleccionado(item) {
    //alert("entro");
    //console.log("ok");
    //console.log(item)
    //console.log(activeIndex);
    //let indexado = activeIndex;
    setActiveIndex(true);
    //onClickHandler(2, grupo, parametro, 1, 1);

    //const [activeIndex, setActiveIndex] = useState(true);

    setTitulo(item.name);
    //setParametroDetalle(true);
    setParametroDetalle(item);

    document.getElementById("idtitulo").style.visibility = "visible";
    //document.getElementById("idcosto").innerText = "";
    document.getElementById("idmensaje").innerText = "";
    document.getElementById("idtallas").style.visibility = "visible";
    //setActiveIndex(2);
    /* onClickHandler(
      2,
      parametroDetalle.grupo,
      parametroDetalle.subgrupo,
      params.valorAbsoluto,
      params.sexo
    );*/
    //console.log(item);

    //onClickHandler
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
                  to="/Tienda"
                  className="ml-4 text-[1.0rem]  text-gray-500 hover:text-gray-700 font-Rum-Raisin "
                >
                  Catalogo x Tienda / Lista x Producto
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <main
        className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-4 border-slate-800 rounded-3xl"
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
            {"1" == params.id &&
            "1" == params.sexo &&
            "1" == params.valorAbsoluto
              ? "Lista de Casacas para Niños"
              : null}
            {"2" == params.id &&
            "1" == params.sexo &&
            "1" == params.valorAbsoluto
              ? "Lista de Overoles para Niños"
              : null}
            {"3" == params.id &&
            "1" == params.sexo &&
            "1" == params.valorAbsoluto
              ? "Lista de Pantalones para Niños"
              : null}
            {"4" == params.id &&
            "1" == params.sexo &&
            "1" == params.valorAbsoluto
              ? "Lista de Camisas para Niños"
              : null}
            {"5" == params.id &&
            "1" == params.sexo &&
            "1" == params.valorAbsoluto
              ? "Lista de Overol Short para Niños"
              : null}
            {"6" == params.id &&
            "1" == params.sexo &&
            "1" == params.valorAbsoluto
              ? "Lista de Short para Niños"
              : null}

            {"1" == params.id &&
            "1" == params.sexo &&
            "2" == params.valorAbsoluto
              ? "Lista de Conjunto Overol para Niños"
              : null}
            {"2" == params.id &&
            "1" == params.sexo &&
            "2" == params.valorAbsoluto
              ? "Lista de Conjunto Pantalon para Niños"
              : null}
            {"3" == params.id &&
            "1" == params.sexo &&
            "2" == params.valorAbsoluto
              ? "Lista de Conjunto Camisa para Niños"
              : null}
            {"4" == params.id &&
            "1" == params.sexo &&
            "2" == params.valorAbsoluto
              ? "Lista de Conjunto 3 Piezas para Niños"
              : null}

            {"1" == params.id &&
            "2" == params.sexo &&
            "2" == params.valorAbsoluto
              ? "Lista de Conjunto Overol Para Niñas"
              : null}
            {"2" == params.id &&
            "2" == params.sexo &&
            "2" == params.valorAbsoluto
              ? "Lista de Conjunto Pantalon para Niñas"
              : null}
          </h1>
          <p className="mt-2 text-sm text-gray-500"></p>
        </div>
        <div
          className=" mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 
        lg:gap-x-8 xl:grid-cols-4 "
        >
          {params.valorAbsoluto === "1"
            ? params.sexo === "1"
              ? ProductDetailsm.categories.map((order) =>
                  order.grupo == params.id ? (
                    <div
                      key={order.id}
                      className="group relative object-center"
                    >
                      <div className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                        <button
                          type="button"
                          onClick={() =>
                            openModal(order.id, order.color, order.grupo)
                          }
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
                    <div
                      key={order.id}
                      className="group relative object-center"
                    >
                      <div className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                        <button
                          type="button"
                          onClick={() =>
                            openModal(order.id, order.color, order.grupo)
                          }
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
                        <h3 className="mt-4 text-1xl text-gray-500 text-left font-Rum-Raisin ">
                          <a href={order.href}>
                            <span className="absolute justify-center" />
                            {order.productName}
                          </a>
                        </h3>
                      ) : null}
                    </div>
                  ) : null
                )
            : params.sexo === "1"
            ? ProductDetailsmc.categories.map((order) =>
                order.grupo == params.id ? (
                  <div key={order.id} className="group relative object-center">
                    <div className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                      <button
                        type="button"
                        onClick={() =>
                          openModal(order.id, order.color, order.grupo)
                        }
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
            : ProductDetailsfc.categories.map((order) =>
                order.grupo == params.id ? (
                  <div key={order.id} className="group relative object-center">
                    <div className="flex justify-center items-center  rounded-3xl bg-black group-hover:opacity-50 hover:scale-110 hover:text-sky-500  border-2 border-blue-700">
                      <button
                        type="button"
                        onClick={() =>
                          openModal(order.id, order.color, order.grupo)
                        }
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
                      <h3 className="mt-4 text-1xl text-gray-500 text-left font-Rum-Raisin ">
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
            onLoad={onLoadHandler}
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
                          <Tab.Group
                            as="div"
                            className="col-span-2"
                            id="idpanel"
                          >
                            <div className="flex flex-row ">
                              <div className="pl-1 pt-2">
                                <Tab.List className="flex flex-col borde-2 border-blue-600 h-64 sm:h-96">
                                  {params.valorAbsoluto === "1"
                                    ? params.sexo === "1"
                                      ? ProductDetailsm.categories.map(
                                          (image) =>
                                            image.grupo == params.id &&
                                            image.id == parametro
                                              ? image.details.map(
                                                  (
                                                    item,
                                                    itemIdx,
                                                    { selected }
                                                  ) =>
                                                    colores === 0 &&
                                                    item.op === 0 ? (
                                                      <Tab
                                                        className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                                  bg-white text-sm font-medium uppercase text-gray-900 
                                                  hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                        key={item.id}
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
                                                              src={
                                                                //Aqui cambio de radiobutton
                                                                item.imageSrc
                                                              }
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
                                                    ) : item.op === radio ? (
                                                      <Tab
                                                        className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                              bg-white text-sm font-medium uppercase text-gray-900 
                                              hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                        key={item.id}
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
                                                              src={
                                                                //Aqui cambio de radiobutton
                                                                item.imageSrc
                                                              }
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
                                                    ) : null
                                                )
                                              : null
                                        )
                                      : ProductDetailsf.categories.map(
                                          (image) =>
                                            image.grupo == params.id &&
                                            image.id == parametro
                                              ? image.details.map(
                                                  (
                                                    item,
                                                    itemIdx,
                                                    { selected }
                                                  ) =>
                                                    colores === 0 &&
                                                    item.op === 0 ? (
                                                      <Tab
                                                        className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                                  bg-white text-sm font-medium uppercase text-gray-900 
                                                  hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                        key={item.id}
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
                                                              src={
                                                                //Aqui cambio de radiobutton
                                                                item.imageSrc
                                                              }
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
                                                    ) : item.op === radio ? (
                                                      <Tab
                                                        className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                              bg-white text-sm font-medium uppercase text-gray-900 
                                              hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                        key={item.id}
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
                                                              src={
                                                                //Aqui cambio de radiobutton
                                                                item.imageSrc
                                                              }
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
                                                    ) : null
                                                )
                                              : null
                                        )
                                    : //Condicion va la parte de conjuntos
                                    params.sexo === "1"
                                    ? ProductDetailsmc.categories.map((image) =>
                                        image.grupo == params.id &&
                                        image.id == parametro
                                          ? image.details.map(
                                              (item, itemIdx, { selected }) =>
                                                colores === 0 &&
                                                item.op === 0 ? (
                                                  <Tab
                                                    className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                              bg-white text-sm font-medium uppercase text-gray-900 
                                              hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                    key={item.id}
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
                                                          src={
                                                            //Aqui cambio de radiobutton
                                                            item.imageSrc
                                                          }
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
                                                ) : item.op === radio ? (
                                                  <Tab
                                                    className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                          bg-white text-sm font-medium uppercase text-gray-900 
                                          hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                    key={item.id}
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
                                                          src={
                                                            //Aqui cambio de radiobutton
                                                            item.imageSrc
                                                          }
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
                                                ) : null
                                            )
                                          : null
                                      )
                                    : ProductDetailsfc.categories.map((image) =>
                                        image.grupo == params.id &&
                                        image.id == parametro
                                          ? image.details.map(
                                              (item, itemIdx, { selected }) =>
                                                colores === 0 &&
                                                item.op === 0 ? (
                                                  <Tab
                                                    className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                              bg-white text-sm font-medium uppercase text-gray-900 
                                              hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                    key={item.id}
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
                                                          src={
                                                            //Aqui cambio de radiobutton
                                                            item.imageSrc
                                                          }
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
                                                ) : item.op === radio ? (
                                                  <Tab
                                                    className="relative  h-32 w-16 sm:h-56 sm:w-36   
                                          bg-white text-sm font-medium uppercase text-gray-900 
                                          hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                    key={item.id}
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
                                                          src={
                                                            //Aqui cambio de radiobutton
                                                            item.imageSrc
                                                          }
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
                                                ) : null
                                            )
                                          : null
                                      )}
                                </Tab.List>
                              </div>
                              <div className="pt-2">
                                <Tab.Panels className="aspect-h-1 aspect-w-1 w-full ">
                                  {
                                    //Condicion para prendas solas
                                    params.valorAbsoluto === "1"
                                      ? params.sexo === "1"
                                        ? ProductDetailsm.categories.map(
                                            (image) =>
                                              image.grupo == params.id &&
                                              image.id == parametro
                                                ? image.details.map(
                                                    (item, itemIdx) =>
                                                      colores === 0 &&
                                                      item.op === 0 ? (
                                                        <Tab.Panel
                                                          key={item.id}
                                                        >
                                                          <img
                                                            src={item.imageSrc}
                                                            alt={item.imageAlt}
                                                            className="h-full w-full object-cover object-center rounded-3xl"
                                                          />
                                                        </Tab.Panel>
                                                      ) : item.op === radio ? (
                                                        <Tab.Panel
                                                          key={item.id}
                                                        >
                                                          <img
                                                            src={item.imageSrc}
                                                            alt={item.imageAlt}
                                                            className="h-full w-full object-cover object-center rounded-3xl"
                                                          />
                                                        </Tab.Panel>
                                                      ) : null
                                                  )
                                                : null
                                          )
                                        : ProductDetailsf.categories.map(
                                            (image) =>
                                              image.grupo == params.id &&
                                              image.id == parametro
                                                ? image.details.map(
                                                    (item, itemIdx) =>
                                                      colores === 0 &&
                                                      item.op === 0 ? (
                                                        <Tab.Panel
                                                          key={item.id}
                                                        >
                                                          <img
                                                            src={item.imageSrc}
                                                            alt={item.imageAlt}
                                                            className="h-full w-full object-cover object-center rounded-3xl"
                                                          />
                                                        </Tab.Panel>
                                                      ) : item.op === radio ? (
                                                        <Tab.Panel
                                                          key={item.id}
                                                        >
                                                          <img
                                                            src={item.imageSrc}
                                                            alt={item.imageAlt}
                                                            className="h-full w-full object-cover object-center rounded-3xl"
                                                          />
                                                        </Tab.Panel>
                                                      ) : null
                                                  )
                                                : null
                                          )
                                      : //Condicion va la parte de conjuntos
                                      params.sexo === "1"
                                      ? ProductDetailsmc.categories.map(
                                          (image) =>
                                            image.grupo == params.id &&
                                            image.id == parametro
                                              ? image.details.map(
                                                  (item, itemIdx) =>
                                                    colores === 0 &&
                                                    item.op === 0 ? (
                                                      <Tab.Panel key={item.id}>
                                                        <img
                                                          src={item.imageSrc}
                                                          alt={item.imageAlt}
                                                          className="h-full w-full object-cover object-center rounded-3xl"
                                                        />
                                                      </Tab.Panel>
                                                    ) : item.op === radio ? (
                                                      <Tab.Panel key={item.id}>
                                                        <img
                                                          src={item.imageSrc}
                                                          alt={item.imageAlt}
                                                          className="h-full w-full object-cover object-center rounded-3xl"
                                                        />
                                                      </Tab.Panel>
                                                    ) : null
                                                )
                                              : null
                                        )
                                      : ProductDetailsfc.categories.map(
                                          (image) =>
                                            image.grupo == params.id &&
                                            image.id == parametro
                                              ? image.details.map(
                                                  (item, itemIdx) =>
                                                    colores === 0 &&
                                                    item.op === 0 ? (
                                                      <Tab.Panel key={item.id}>
                                                        <img
                                                          src={item.imageSrc}
                                                          alt={item.imageAlt}
                                                          className="h-full w-full object-cover object-center rounded-3xl"
                                                        />
                                                      </Tab.Panel>
                                                    ) : item.op === radio ? (
                                                      <Tab.Panel key={item.id}>
                                                        <img
                                                          src={item.imageSrc}
                                                          alt={item.imageAlt}
                                                          className="h-full w-full object-cover object-center rounded-3xl"
                                                        />
                                                      </Tab.Panel>
                                                    ) : null
                                                )
                                              : null
                                        )
                                  }
                                </Tab.Panels>
                                <div
                                  id="idpaneldisponible"
                                  className="font-cabecera text-2xl text-slate-900"
                                ></div>
                              </div>
                            </div>

                            {/* Image selector */}
                          </Tab.Group>
                          <div className="col-span-1 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
                            <h1
                              className="text-4xl font-bold tracking-tight text-gray-900 "
                              id="idtitulo"
                            >
                              {titulo}
                            </h1>
                            <div className="mt-3">
                              <h3 className="sr-only">Reviews</h3>
                              <div className="flex items-center">
                                <p className="sr-only">
                                  {product.rating} out of 5 stars
                                </p>
                              </div>
                            </div>
                            <h1 className="font-bold pb-1 " id="idcategoria">
                              Categoria
                            </h1>
                            <div
                              id="idcategoriadescripcion"
                              className="space-y-6 font-cabecera"
                              dangerouslySetInnerHTML={{
                                __html: parametroDetalle.description,
                              }}
                            />
                            <div
                              id="disponibilidad"
                              className="font-cabecera text-2xl text-slate-900"
                            ></div>
                            <div id="idcolores" className="">
                              <h1 className="font-bold pb-1  ">Colores</h1>

                              <div className=" sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                {params.sexo === "1"
                                  ? colores === 0
                                    ? notificationMethods0.map(
                                        (notificationMethod) => (
                                          <div
                                            key={notificationMethod.id}
                                            className="flex items-center"
                                          >
                                            <input
                                              defaultChecked={
                                                notificationMethod.id === "0"
                                              }
                                              onChange={(e) =>
                                                mostrarTituloRadio(
                                                  e.currentTarget.value
                                                )
                                              }
                                              value={notificationMethod.value}
                                              id={notificationMethod.id}
                                              name="notification-method"
                                              type="radio"
                                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label
                                              htmlFor={notificationMethod.id}
                                              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              {notificationMethod.title}
                                            </label>
                                          </div>
                                        )
                                      )
                                    : notificationMethods1.map(
                                        (notificationMethod) => (
                                          <div
                                            key={notificationMethod.id}
                                            className="flex items-center"
                                          >
                                            <input
                                              defaultChecked={
                                                notificationMethod.id === "1"
                                              }
                                              onChange={(e) =>
                                                mostrarTituloRadio(
                                                  e.currentTarget.value
                                                )
                                              }
                                              value={notificationMethod.value}
                                              id={notificationMethod.id}
                                              name="notification-method"
                                              type="radio"
                                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                            <label
                                              htmlFor={notificationMethod.id}
                                              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              {notificationMethod.title}
                                            </label>
                                          </div>
                                        )
                                      )
                                  : colores === 0
                                  ? notificationMethods0fem.map(
                                      (notificationMethod) => (
                                        <div
                                          key={notificationMethod.id}
                                          className="flex items-center"
                                        >
                                          <input
                                            defaultChecked={
                                              notificationMethod.id === "0"
                                            }
                                            onChange={(e) =>
                                              mostrarTituloRadio(
                                                e.currentTarget.value
                                              )
                                            }
                                            value={notificationMethod.value}
                                            id={notificationMethod.id}
                                            name="notification-method"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                          />
                                          <label
                                            htmlFor={notificationMethod.id}
                                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                          >
                                            {notificationMethod.title}
                                          </label>
                                        </div>
                                      )
                                    )
                                  : notificationMethods1fem.map(
                                      (notificationMethod) => (
                                        <div
                                          key={notificationMethod.id}
                                          className="flex items-center"
                                        >
                                          <input
                                            defaultChecked={
                                              notificationMethod.id === "1"
                                            }
                                            onChange={(e) =>
                                              mostrarTituloRadio(
                                                e.currentTarget.value
                                              )
                                            }
                                            value={notificationMethod.value}
                                            id={notificationMethod.id}
                                            name="notification-method"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                          />
                                          <label
                                            htmlFor={notificationMethod.id}
                                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                          >
                                            {notificationMethod.title}
                                          </label>
                                        </div>
                                      )
                                    )}
                              </div>
                            </div>

                            <h2 className="pb-2 font-bold">Tallas</h2>

                            <div className="flex" id="idtallas">
                              {/*AQUITALLAS */}
                              <div className="grid grid-cols-8 items-center justify-center">
                                <div className="col-span-1 pr-2   pl-2 ">
                                  <input
                                    id="default-radio-1"
                                    type="checkbox"
                                    value="2"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        2,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "2"}
                                  ></input>
                                </div>
                                <div className="col-span-1 pl-2 pr-2">
                                  {" "}
                                  <input
                                    id="default-radio-2"
                                    type="checkbox"
                                    value="4"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        4,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "4"}
                                  ></input>
                                </div>
                                <div className="col-span-1 pl-2 pr-2">
                                  {" "}
                                  <input
                                    id="default-radio-3"
                                    type="checkbox"
                                    value="6"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        6,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "6"}
                                  ></input>
                                </div>
                                <div className="col-span-1 pl-2 pr-2">
                                  {" "}
                                  <input
                                    id="default-radio-4"
                                    type="checkbox"
                                    value="8"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        8,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "8"}
                                  ></input>
                                </div>
                                <div className="col-span-1 pl-2 pr-2">
                                  {" "}
                                  <input
                                    id="default-radio-5"
                                    type="checkbox"
                                    value="10"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        10,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "10"}
                                  ></input>
                                </div>
                                <div className="col-span-1 pl-2 pr-2">
                                  {" "}
                                  <input
                                    id="default-radio-6"
                                    type="checkbox"
                                    value="12"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        12,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "12"}
                                  ></input>
                                </div>
                                <div className="col-span-1 pl-2 pr-2">
                                  {" "}
                                  <input
                                    id="default-radio-7"
                                    type="checkbox"
                                    value="14"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        14,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "14"}
                                  ></input>
                                </div>
                                <div className="col-span-1 pl-2 pr-2">
                                  {" "}
                                  <input
                                    id="default-radio-8"
                                    type="checkbox"
                                    value="16"
                                    name="default-radio"
                                    className="w-6 h-6 text-blue-600  items-center justify-center
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                                      focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                    onChange={(e) =>
                                      onClickHandler(
                                        16,
                                        grupo,
                                        parametro,
                                        params.valorAbsoluto,
                                        params.sexo,
                                        setTallita(e.currentTarget.value)
                                      )
                                    }
                                    checked={tallita === "16"}
                                  ></input>
                                </div>

                                <div className=" text-center">2</div>
                                <div className=" text-center">4</div>
                                <div className=" text-center">6</div>
                                <div className=" text-center">8</div>
                                <div className=" text-center">10</div>
                                <div className=" text-center">12</div>
                                <div className=" text-center">14</div>
                                <div className=" text-center">16</div>
                              </div>
                            </div>
                            <h3 className="pb-2 font-bold">Precio</h3>
                            <p
                              id="idpos"
                              className="font-cabecera text-6xl text-red-800"
                            ></p>
                            <h2
                              id="idcosto"
                              className="font-cabecera text-6xl text-red-800 "
                            >
                              {params.valorAbsoluto === "1"
                                ? //PRENDAS SOLAS
                                  params.sexo === "1"
                                  ? costo === undefined
                                    ? (costo = "")
                                    : costo
                                  : costo === undefined
                                  ? (costo = "")
                                  : costo
                                : //PRENDAS CONJUNTOS
                                params.sexo === "1"
                                ? costo === undefined
                                  ? (costo = "")
                                  : costo
                                : costo === undefined
                                ? (costo = "")
                                : costo}
                            </h2>
                            {/* Contador */}
                            <div id="idtotal">
                              <div className="flex items-start justify-start text-2xl font-mono text-base pt-6 ">
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

                              <div className="grid grid-cols-1  ">
                                <div className="flex col-span-1" id="idCarrito">
                                  <button
                                    type="button"
                                    //id="idCarrito"
                                    //onClick={() => addToCart(artists)}
                                    onClick={() => {
                                      addToCart([
                                        ...artists,
                                        {
                                          id: "y" + nextId++,
                                          name: parametroDetalle.name,
                                          cantidad: calculo,
                                          talla: tallita,
                                          sexo: parametroDetalle.sexo,
                                          tipo: "xT",
                                        },
                                      ]);
                                      document.getElementById(
                                        "monto"
                                      ).innerText = 1;
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
                                </div>
                                <div className="col-span-1 ">
                                  <h2
                                    id="idMensajenulo"
                                    className="font-cabecera text-2xl text-slate-900  "
                                  ></h2>
                                </div>

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
                              <div className="flex pt-10">
                                <button
                                  type="button"
                                  className="flex max-w-xs flex-1 items-center justify-center rounded-md 
                                              border border-transparent bg-black px-8 py-3 text-base font-medium text-white
                                               hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 
                                               focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                  onClick={() => openModalGuias()}
                                >
                                  Guia de Tallas
                                </button>
                              </div>
                              {/* Global notification live region, render this permanently at the end of the document */}
                              <div className="flex">
                                <h2
                                  id="idmensaje"
                                  className=" text-1xl font-cabecera font-bold pt-2  text-red-700"
                                >
                                  {mensaje}
                                </h2>
                              </div>
                            </form>
                            <section
                              aria-labelledby="details-heading"
                              className="mt-12"
                            >
                              <h2 id="details-heading" className="sr-only">
                                Additional details
                              </h2>
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
        {/* AbrirPopalGuias */}
        <Transition
          appear
          show={isOpenGuias}
          as={Fragment}
          onClose={setIsOpenGuias}
        >
          <Dialog
            as="div"
            className="relative z-10 border-2 border-cyan-500"
            onClose={closeModalGuias}
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
                  <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden border-slate-900 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="bg-white">
                      <button
                        type="button"
                        className="absolute right-4 top-6 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-7 md:right-6 md:top-7 lg:right-8 lg:top-7"
                        onClick={() => closeModalGuias(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon
                          className="h-10 w-10 font-bold bg-slate-950 text-white rounded-full"
                          aria-hidden="true"
                        />
                      </button>
                      <div className="ml-4 bg-red-600 rounded-2xl text-[1.9rem] sm:text-[2.2rem] text-gray-500 hover:text-gray-700 font-Rum-Raisin text-center ">
                        Guia de Tallas
                      </div>
                      <div className="grid grid-rows-5 items-center justify-center">
                        <div className="row-span-1">
                          {" "}
                          <img
                            src="https://i.postimg.cc/mrb3f22q/01.jpg"
                            alt={product.imageAlt}
                            className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl"
                          />
                        </div>
                        <div className="row-span-1">
                          {" "}
                          <img
                            src="https://i.postimg.cc/6q02hCCp/02.jpg"
                            alt={product.imageAlt}
                            className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl"
                          />
                        </div>
                        <div className="row-span-1">
                          {" "}
                          <img
                            src="https://i.postimg.cc/vTQDDDCF/03.jpg"
                            alt={product.imageAlt}
                            className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl"
                          />
                        </div>
                        <div className="row-span-1">
                          {" "}
                          <img
                            src="https://i.postimg.cc/9FQrhRGy/04.jpg"
                            alt={product.imageAlt}
                            className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl"
                          />
                        </div>
                        <div className="row-span-1">
                          <img
                            src="https://i.postimg.cc/x1WCM6BP/05.jpg"
                            alt={product.imageAlt}
                            className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl"
                          />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* AbrirPopalGuias */}
      </main>
    </div>
  );
}
