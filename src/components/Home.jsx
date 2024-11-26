  import React from "react";

import { Link } from "react-router-dom";

function visualizar(id) {
  // window.open("https://www.facebook.com/search/top?q=jeans%20tovar");
  console.log(id);
}

const people = [
  {
    name: "Facebook",
    email: "3",
    id: 3,

    imageUrl: "https://i.postimg.cc/pL9CH5dr/face-removebg-preview.png",
    href: "https://www.facebook.com/Jeanstovar.pe",
  },
  {
    name: "Instagram",
    email: "4",
    id: 4,

    imageUrl: "https://i.postimg.cc/8cSk1vDS/insta-removebg-preview.png",
    href: "",
  },
  {
    name: "Tik Tok",
    email: "5",
    id: 5,

    imageUrl: "https://i.postimg.cc/DyfFBnwB/tik.png",
    href: "",
  },
  // More people...
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 mt-10 mx-4 sm:mx-20 lg:mx-48 xl:mx-96  ">
      <Link to="/Tienda">
        <div className="relative flex items-center sm:md:hover:scale-110 md:hover:scale-110  lg:hover:scale-110 space-x-3 rounded-full border border-gray-300 bg-black px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
          <div className="shrink-0">
            <img
              alt=""
              src="https://i.postimg.cc/3JHYTGN3/flechita-removebg-preview-1.png"
              className="size-10 rounded-full bg-white"
            />
          </div>
          <div className="min-w-0 flex-1 ">
            <span aria-hidden="true" className="absolute inset-0" />
            <p className=" font-medium text-gray-900 text-center font-Montserrat-Alternates text-white text-1xl">
              Tienda Virtual
            </p>
            <p className="truncate text-sm text-gray-500"></p>
          </div>
        </div>
      </Link>

      <div className="relative flex items-center sm:md:hover:scale-110 md:hover:scale-110  lg:hover:scale-110 space-x-3 rounded-full border border-gray-300 bg-black px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <div className="shrink-0">
          <img
            alt=""
            src="https://i.postimg.cc/MT0tLkpY/what-removebg-preview.png"
            className="size-10 rounded-full bg-white"
          />
        </div>

        <div className="min-w-0 flex-1 ">
          <a href="https://api.whatsapp.com/send?phone=962915371">
            <span aria-hidden="true" className="absolute inset-0" />
            <p className=" font-medium text-gray-900 text-center font-Montserrat-Alternates text-white text-1xl">
              Whatssap
            </p>
            <p className="truncate text-sm text-gray-500"></p>
          </a>
        </div>
      </div>

      {people.map((person) => (
        <div
          key={person.id}
          className="relative flex items-center sm:md:hover:scale-110 md:hover:scale-110  lg:hover:scale-110 space-x-3 rounded-full border border-gray-300 bg-black px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="shrink-0">
            <img
              alt=""
              src={person.imageUrl}
              className="size-10 rounded-full bg-white"
            />
          </div>
          <div className="min-w-0 flex-1 ">
            <a href={person.href} className="focus:outline-none">
              <span aria-hidden="true" className="absolute inset-0" />
              <p className=" font-medium text-gray-900 text-center font-Montserrat-Alternates text-white text-1xl">
                {person.name}
              </p>
              <p className="truncate text-sm text-gray-500">{person.role}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
