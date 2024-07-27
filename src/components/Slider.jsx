import react from "react";
import SliderCard from "./SliderCard";



const Slider = () =>{
    const images =[
        {
            //url:"../../public/intro/intro5.jpg",
            title :"Producto 1",
            price: 12000,
            url:"https://i.postimg.cc/D0QPLB9r/intro5.jpg",
            

        },
        {
            title :"Producto 2",
            price: 50000,
            url:"https://i.postimg.cc/FsmZNXSD/intro1.jpg",

        },
        {
            title :"Producto 3",
            price: 50000,
            url:"https://i.postimg.cc/dQGBbVhh/intro2.jpg",

        },
        {
            title :"Producto 4",
            price: 50000,
            url:"https://i.postimg.cc/KYhzHGf2/intro3.jpg",

        },    
        {
          title :"Producto 5",
          price: 50000,
          url:"https://i.postimg.cc/GtthyHLk/intro6.jpg",

      },  
    ];
    return(
        <div className="flex items-center justify-center pt-4">        
           <SliderCard images={images}/>        
        </div>
        
        
    )
}
export default Slider