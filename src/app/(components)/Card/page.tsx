import { Features } from "@/Page/LandingPage/page";

export default function Card({ name, image}:Features) {
  return (
    <>
    <div className="flex justify-center">
        <div className={`h-75 w-[80%] bg-amber-600 bg-[url(${image})] bg-cover rounded-4xl`}>
            {/* {image} */}
        </div>
    </div>
        
    </> 
  );
}