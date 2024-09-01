import React from 'react'

export default function About() {
  return (
    <div className=''>
        {/* Hero section */}
        <div className="relative isolate -z-10">
            <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32 ">
                    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center font-cabecera ">
                        <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl  rounded-2xl  ">
                            <h1 className="text-4xl  tracking-tight text-slate-900 bg-clip-text fon  sm:text-6xl font-bold  ">
                                Acerca de la Empresa.
                            </h1>
                            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ">
                            Aqui se coloca la descripcion de la empresas y como se describedsdsdsdsdsdsdsdsdsdsdsd.
                            </p>
                            </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none font-cabecera">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 bg-clip-text  sm:text-4xl font-cabecera">Nuestra Mision</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            
                <div className="mt-10 max-w-xl text-xl leading-8 text-gray-700">
                <p>
                    

                    Aqui colocar la mision de la empresa
                </p>                
                </div>
            </div>
        
            </div>
        </div>
        </div>        

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
        </div>
        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 font-cabecera">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 bg-clip-text   sm:text-4xl">Nuestros Valores</h2>
            <p className="mt-4 text-lg leading-4 text-gray-600">
            -Esfuerzo y tenacidad.</p>
            <p className="mt-4 text-lg leading-4 text-gray-600">
            -Respeto y generosidad.</p>
            <p className="mt-4 text-lg leading-4 text-gray-600">
            -Autoestima racional.</p>
            <p className="mt-4 text-lg leading-4 text-gray-600">
            -Entusiasmo (y actitud positiva).</p>
            <p className="mt-4 text-lg leading-6 text-gray-600">
            -Flexibilidad, adaptación proactiva a los cambios.</p>
            
            
            
            
            
        </div>
        <br />
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-cabecera bg-clip-text  sm:text-4xl">Vision</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-cabecera">
            Aqui colocar la vision de la empresas.</p>
        
            
        </div>
    </div>


</div>
  )
}
