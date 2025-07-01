import Navbar from "@/(components)/Navbar/page";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="mx-auto w-[1200px]  my-4  px-10 ">
      <div className="   bg-[url(/house.jpg)] h-[95vh]  w-[100%]   bg-cover  rounded-4xl ">
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

      
    </div>
  );
}
