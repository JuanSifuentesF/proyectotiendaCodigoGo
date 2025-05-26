
import { ProductCard } from "@/components/ui/Product/Card"; 
import { Carrousel } from "@/components/ui/Product/Carrousel";

const products = [
  {
    name: "Galaxy S22 Ultra",
    price: 32999,
    originalPrice: 74999,
    save: 32999,
    imageUrl: "/public/images/img1.png",
  },
  {
    name: "Galaxy M13 (4GB | 64 GB)",
    price: 10499,
    originalPrice: 14999,
    save: 4500,
    imageUrl: "/public/images/img2.png",
  },
  {
    name: "Galaxy M33 (4GB | 64 GB)",
    price: 16999,
    originalPrice: 24999,
    save: 8000,
    imageUrl: "/public/images/img3.png",
  },
  {
    name: "Galaxy M53 (4GB | 64 GB)",
    price: 31999,
    originalPrice: 40999,
    save: 9000,
    imageUrl: "/public/images/img4.png",
  },
  {
    name: "Galaxy S22 Ultra",
    price: 67999,
    originalPrice: 85999,
    save: 18000,
    imageUrl: "/public/images/img5.png",
  },
];



export const Home = () => {
 return (
    <section>
    <div className=" w-full">
      <Carrousel />
    </div>
     
    <div className=" max-w-screen-xl mx-auto p-8 ">
      <div className=" flex justify-between  items-center  ">
      <h1 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 inline-block">
        Grab the best deal on <span className="text-blue-500">Smartphones</span>
      <hr  className="bg-red-500"/>
      </h1>
      <h2 className="font-semibold mb-6"> View all </h2>
      
      </div>
    

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
   
    </section>
  );
}