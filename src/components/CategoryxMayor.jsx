import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/20/solid";
import SliderCard from "./SliderCard";
import { GiHidden } from "react-icons/gi";

const images = [
  {
    //url:"../../public/intro/intro5.jpg",
    title: "Producto 1",
    price: 12000,
    url: "https://i.postimg.cc/D0QPLB9r/intro5.jpg",
  },
  {
    title: "Producto 2",
    price: 50000,
    url: "https://i.postimg.cc/FsmZNXSD/intro1.jpg",
  },
  {
    title: "Producto 3",
    price: 50000,
    url: "https://i.postimg.cc/dQGBbVhh/intro2.jpg",
  },
  {
    title: "Producto 4",
    price: 50000,
    url: "https://i.postimg.cc/KYhzHGf2/intro3.jpg",
  },
  {
    title: "Producto 5",
    price: 50000,
    url: "https://i.postimg.cc/GtthyHLk/intro6.jpg",
  },
];

const Categoryproductsm = [
  {
    id: 1,
    name: "Casacas",
    href: "#",
    sexo: 1,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/zBGkP5zr/casaca-final-05.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Overoles",
    href: "#",
    sexo: 1,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 ",
    description: "",
    imageSrc: "https://i.postimg.cc/d0XzKnp8/overol-pantalon.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 3,
    name: "Pantalones",
    href: "#",
    sexo: 1,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc:
      "https://i.postimg.cc/GpGrTsKV/Whats-App-Image-2024-11-19-at-1-58-17-PM.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Camisas",
    href: "#",
    sexo: 1,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/KYdsWj3f/camisa-bozeto.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 5,
    name: "Overol Short",
    href: "#",
    sexo: 1,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/2jdXHzkd/overol-short-bozeto.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 6,
    name: "Short",
    href: "#",
    sexo: 1,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/J41Yv90f/short-bozeto.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];
const Categoryproductsf = [
  {
    id: 1,
    name: "Casacas",
    href: "#",
    sexo: 2,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/zBGkP5zr/casaca-final-05.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Overol",
    href: "#",
    sexo: 2,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/d0XzKnp8/overol-pantalon.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 3,
    name: "Pantalon",
    href: "#",
    sexo: 2,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc:
      "https://i.postimg.cc/GpGrTsKV/Whats-App-Image-2024-11-19-at-1-58-17-PM.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Overol Short",
    href: "#",
    sexo: 2,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/2jdXHzkd/overol-short-bozeto.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 5,
    name: "JUMPPER",
    href: "#",
    sexo: 2,
    valorAbsoluto: 1,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/kghZsQHX/JUMPER.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];
const Categoryproductsmc = [
  {
    id: 1,
    name: "Conjunto Overol",
    href: "#",
    sexo: 1,
    valorAbsoluto: 2,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/7htwQWKN/Conjunto-Overol-01.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Conjunto Pantalon",
    href: "#",
    sexo: 1,
    valorAbsoluto: 2,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc:
      "https://i.postimg.cc/8Pm63bg6/Conjunto-Clasico-Pantalon-Blanco-01.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 3,
    name: "Conjunto Camisa",
    href: "#",
    sexo: 1,
    valorAbsoluto: 2,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/SRMTjg7q/Conjunto-Camisa-Bermuda-01.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Conjunto 3 Piezas",
    href: "#",
    sexo: 1,
    valorAbsoluto: 2,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc:
      "https://i.postimg.cc/d1V0zmhj/Conjunto3-Piezas-Strechc-Jeans-01.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];
const Categoryproductsfc = [
  {
    id: 1,
    name: "Conjunto Overol",
    href: "#",
    sexo: 2,
    valorAbsoluto: 2,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc: "https://i.postimg.cc/vBP5jtvW/Conjunto-Overol-Lola-01.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Conjunto Pantalon",
    href: "#",
    sexo: 2,
    valorAbsoluto: 2,
    tallas: "2 4 6 8 10 12 14 16",
    description: "",
    imageSrc:
      "https://i.postimg.cc/dVKj6n9h/Conjunto-Pantalon-Nina-Forro-01.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];

export default function CategoryxMayor() {
  const [general, setGeneral] = useState("s");
  const [value, setValue] = useState("m");
  console.log(general);
  const [cart, setCart] = useState([]);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-white font-mono text-xl ">
      <button
        style={{ position: "fixed", bottom: 0, right: "50%" }}
        className="bg-black text-white hidden"
      >
        Guia de Tallas
      </button>
      <div className=" grid grid-cols-4 ">
        <div className="col-span-4">
          <nav aria-label="Breadcrumb" className="flex">
            <ol
              role="list"
              className="flex space-x-4 rounded-md bg-white px-6 shadow"
            >
              <li className="flex">
                <div className="flex items-center justify-start">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <HomeIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <span className="sr-only">Home</span>
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
                  <a className="ml-4  text-[1.2rem] sm:text-[1.2rem] text-gray-500 hover:text-gray-700 font-Rum-Raisin ">
                    Catalogo x Mayor
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className=" col-span-4 pb-6 border-2 border-slate-800 rounded-2xl">
          <div className=" flex items-center justify-center font-Chango pt-4 text-[1.0rem] sm:text-[1.0rem]  md:text-[1.2rem] ">
            <div className="pr-2 pt-1">Prendas Solas</div>
            <div className="pr-2 pt-1">
              <input
                id="default-radio-3"
                type="radio"
                value="s"
                name="default-radio"
                className="w-4 h-4 text-blue-600  
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                onChange={(e) => setGeneral(e.currentTarget.value)}
                checked={general === "s"}
              ></input>
            </div>
            <div className="pr-2 pt-1">Conjuntos</div>
            <div className="pr-2 pt-1">
              <input
                id="default-radio-4"
                type="radio"
                value="c"
                name="default-radio"
                className="w-4 h-4 text-blue-600  
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                onChange={(e) => setGeneral(e.currentTarget.value)}
                checked={general === "c"}
              ></input>
            </div>
          </div>
        </div>
      </div>

      {general === "s" ? (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 border-4  border-black rounded-2xl">
          <h1
            id="products-heading"
            className="  font-Rum-Raisin text-4xl font-bold text-black text-center pb-2 rounded-3xl
         "
          >
            Catalogo x Mayor
          </h1>
          <div className="flex ... justify-center rounded-3xl font-cabecera ">
            <div className="w-full ...  rounded-3xl text-center pt-4 font-cabecera  ">
              <div className="grid grid-cols-12 items-center justify-center  ">
                <div className="col-span-6 flex items-center justify-end font-Chango  text-[0.8rem] sm:text-[1.2rem]  ">
                  <div className="col-span-1 pr-2">Niño</div>

                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value="m"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600  
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                    onChange={(e) => setValue(e.currentTarget.value)}
                    checked={value === "m"}
                  ></input>
                </div>
                <div className="col-span-6 flex items-center justify-start font-Chango text-[0.8rem] sm:text-[1.2rem]  pl-4">
                  <div className="col-span-1 pr-2 ">Niña</div>
                  <input
                    id="default-radio-2"
                    type="checkbox"
                    value="f"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => setValue(e.currentTarget.value)}
                    checked={value === "f"}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {value === "m" ? (
            <div className="card">
              {/* SSection masculino */}

              <div className="pl-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8  pt-10">
                {Categoryproductsm.map((product) => (
                  <Link
                    to={
                      "/CategoryxMayor/" +
                      product.id +
                      "/" +
                      product.sexo +
                      "/" +
                      product.valorAbsoluto
                    }
                    key={product.id}
                    href={product.href}
                    className="group hover:scale-110 hover:text-sky-500 "
                  >
                    <div
                      className=" aspect-h-1  overflow-hidden mx-auto
                      rounded-3xl sm:aspect-h-3 sm:aspect-w-2 flex items-center justify-center  "
                    >
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl border-2 border-indigo-300"
                      />
                    </div>
                    {/* text-center font-bold text-lg  */}
                    <div className="rounded-2xl font-Rum-Raisin text-black mt-4 justify-between  text-gray-900  ">
                      <p className="text-center  text-[1.4rem] sm:text-2xl ">
                        {product.name}
                      </p>
                      <p className="text-left text-blue-800  text-[1.1rem]  rounded-3xl sm:text-[1.2rem]"></p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </div>
              {/* SSection masculino */}
            </div>
          ) : (
            <div className="pl-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 font-cabecera pt-10">
              {Categoryproductsf.map((product) => (
                <Link
                  to={
                    "/CategoryxMayor/" +
                    product.id +
                    "/" +
                    product.sexo +
                    "/" +
                    product.valorAbsoluto
                  }
                  key={product.id}
                  href={product.href}
                  className="group hover:scale-110 hover:text-sky-500 "
                >
                  <div
                    className=" aspect-h-1  overflow-hidden mx-auto
                      rounded-3xl sm:aspect-h-3 sm:aspect-w-2 flex items-center justify-center  "
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl border-2 border-pink-300"
                    />
                  </div>
                  {/* text-center font-bold text-lg  */}
                  <div className="rounded-2xl font-Rum-Raisin  text-black mt-4 justify-between  text-gray-900  ">
                    <p className="text-center  text-[1.4rem] sm:text-2xl ">
                      {product.name}
                    </p>
                    <p className="text-left text-blue-800  text-[1.1rem]  rounded-3xl sm:text-[1.2rem]"></p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500">
                    {product.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 border-4   border-black rounded-2xl">
          <h1
            id="products-heading"
            className="  font-Rum-Raisin text-4xl font-bold text-black text-center pb-2 rounded-3xl
         "
          >
            Catalogo x Mayor
          </h1>
          <div className="flex ... justify-center rounded-3xl font-cabecera ">
            <div className="w-full ...  rounded-3xl text-center pt-4 font-cabecera  ">
              <div className="grid grid-cols-12 items-center justify-center  ">
                <div className="col-span-6 flex items-center justify-end font-Chango  text-[0.8rem] sm:text-[1.2rem]  ">
                  <div className="col-span-1 pr-2">Niño</div>

                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value="m"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600  
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                    onChange={(e) => setValue(e.currentTarget.value)}
                    checked={value === "m"}
                  ></input>
                </div>
                <div className="col-span-6 flex items-center justify-start font-Chango text-[0.8rem] sm:text-[1.2rem]  pl-4">
                  <div className="col-span-1 pr-2 ">Niña</div>
                  <input
                    id="default-radio-2"
                    type="checkbox"
                    value="f"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 
                bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => setValue(e.currentTarget.value)}
                    checked={value === "f"}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {value === "m" ? (
            <div className="card">
              {/* SSection masculino */}

              <div className="pl-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8  pt-10">
                {Categoryproductsmc.map((product) => (
                  <Link
                    to={
                      "/CategoryxMayor/" +
                      product.id +
                      "/" +
                      product.sexo +
                      "/" +
                      product.valorAbsoluto
                    }
                    key={product.id}
                    href={product.href}
                    className="group hover:scale-110 hover:text-sky-500 "
                  >
                    <div
                      className=" aspect-h-1  overflow-hidden mx-auto
                      rounded-3xl sm:aspect-h-3 sm:aspect-w-2 flex items-center justify-center  "
                    >
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl border-2 border-indigo-500"
                      />
                    </div>
                    {/* text-center font-bold text-lg  */}
                    <div className="rounded-2xl font-Rum-Raisin text-black mt-4 justify-between  text-gray-900  ">
                      <p className="text-center  text-[1.4rem] sm:text-2xl ">
                        {product.name}
                      </p>
                      <p className="text-left text-blue-800  text-[1.1rem]  rounded-3xl sm:text-[1.2rem]"></p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </div>
              {/* SSection masculino */}
            </div>
          ) : (
            <div className="pl-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 font-cabecera pt-10">
              {Categoryproductsfc.map((product) => (
                <Link
                  to={
                    "/CategoryxMayor/" +
                    product.id +
                    "/" +
                    product.sexo +
                    "/" +
                    product.valorAbsoluto
                  }
                  key={product.id}
                  href={product.href}
                  className="group hover:scale-110 hover:text-sky-500 "
                >
                  <div
                    className=" aspect-h-1  overflow-hidden mx-auto
                      rounded-3xl sm:aspect-h-3 sm:aspect-w-2 flex items-center justify-center  "
                  >
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-auto  w-auto  object-cover object-center group-hover:opacity-75 rounded-3xl border-2 border-pink-300"
                    />
                  </div>
                  {/* text-center font-bold text-lg  */}
                  <div className="rounded-2xl font-Rum-Raisin  text-black mt-4 justify-between  text-gray-900  ">
                    <p className="text-center  text-[1.4rem] sm:text-2xl ">
                      {product.name}
                    </p>
                    <p className="text-left text-blue-800  text-[1.1rem]  rounded-3xl sm:text-[1.2rem]"></p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500">
                    {product.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
/*   */
