import Navbar from "@/(components)/Navbar/page";
import Link from "next/link";
import Card from "@/(components)/Card/page";

export interface Features {
  id?: number,
  name: string,
  image: string
}

export default function LandingPage() {

  const featurse: Features[]  =[
    {
      id: 1,
      name: "construction",
      image: "/constrution.jpg"
    },
    {
      id: 2,
      name: "designer",
      image: "/designer.jpg"
    },
    {
      id: 3,
      name: "interior",
      image: "/interior.jpg"
    },
    {
      id: 4,
      name: "staff",
      image: "/staff.jpg"
    },

  ]

  return (
    <div className="mx-auto w-[1200px]  my-4  px-10 ">
      <div className="   bg-[url(/house.jpg)] h-[95vh]  w-[100%]   bg-cover  rounded-4xl mb-15 ">
        <Navbar/>
        <div className="flex justify-center py-40  px-70">
          <div >
            <h1 className="text-6xl font-semibold color-#2A2B21 text-[#2A2B21] text-center">Let tell me   what your  house be like</h1>
            <div className="flex justify-center mt-5">
              <Link className=" text-xl font-medium bg-[#D9D9D9]  rounded-full mr-4 py-1 px-5" href="/#">start your House</Link>
              <Link className=" text-xl font-medium  bg-[#308A9F] rounded-full mr-4 py-1 px-5 text-white" href="/#">Learn more</Link>
            </div>
          </div> 
        </div>
      </div>
      <section>
        <div className="flex justify-center">
          <h1 className="text-center text-4xl font-semibold max-w-md">Save hours a week with not know</h1>
        </div>
        <div className="grid grid-cols-2 gap-10 mx-50 mt-7">
          
            {featurse.map((e) =>(
              <Card key={e.id} name={e.name} image={e.image}/>
            )) }
          
          
        </div>
          
        
      </section>

      
    </div>
  );
}
