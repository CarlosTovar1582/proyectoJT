import React from "react";

export default function About() {
  return (
    <div className="">
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32 ">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center font-cabecera ">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl  rounded-2xl ">
                <h1 className="text-4xl  tracking-tight text-slate-900 bg-clip-text   sm:text-6xl font-bold  mt-6  ">
                  Acerca de la Empresa.
                </h1>
                <p className="relative mt-6 text-md leading-8 text-gray-600 sm:max-w-md lg:max-w-none mx-2">
                  Jeans Tovar tiene más de 40 años de trayectoria en el mercado
                  peruano, ofreciendo una amplia y diversa colección de jeans de
                  alta calidad para niños y niñas. Combinando diseños
                  innovadores con la durabilidad y comodidad tradicional,
                  permitiendo a los pequeños expresar su estilo único. Contamos
                  con una tienda física y servicio de envío y delivery a todo
                  Lima. ,somos una marca reconocida por su calidad, creatividad
                  y compromiso con el desarrollo integral de los niños🌟.
                </p>
              </div>

              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-slate-800 mb-20"></div>
      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl  rounded-2xl   ">
          <h2 className="text-4xl  tracking-tight text-slate-900 bg-clip-text   sm:text-6xl font-bold  mx-2 font-cabecera">
            Nuestra Mision
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <div className="mt-10 max-w-xl text-md leading-8 text-gray-700">
                <p className="relative mt-6 text-md leading-8 text-gray-600 sm:max-w-md lg:max-w-none mx-2 font-cabecera">
                  "Crear prendas de alta calidad y moda para niños y niñas,
                  combinando la tradición familiar de más de 40 años con diseños
                  innovadores y duraderos y ofreciendo prendas confortables que
                  permiten a los pequeños expresar su estilo único sintiendo
                  comodidad."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src="https://i.postimg.cc/mkh3NwcH/logo-nosotros.png"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
      {/* Values section */}
      <div className="border-2 border-slate-800 mt-8"></div>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0  rounded-2xl">
          <h2 className="text-4xl  tracking-tight text-slate-900 bg-clip-text   sm:text-6xl font-bold  mx-2 font-cabecera">
            Vision
          </h2>
          <p className="relative mt-6 text-md leading-8 text-gray-600 sm:max-w-md lg:max-w-none mx-2 font-cabecera">
            "Consolidarnos como la marca líder de jeans infantiles en Perú,
            reconocida a nivel nacional e internacional por nuestra calidad
            superior, creatividad en los diseños y compromiso inquebrantable con
            el crecimiento y desarrollo integral de los niños y niñas. Llevando
            nuestro legado de tradición y excelencia a familias en toda
            Latinoamérica."
          </p>
        </div>
      </div>
    </div>
  );
}
