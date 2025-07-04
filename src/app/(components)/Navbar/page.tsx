import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={`flex pt-15  text-white sticky `}>
        <div className="flex flex-1 justify-center">
          <Link href="/#" className="text-2xl font-bold">
            Househand
          </Link>
        </div>
        <div className="flex justify-center content-center w-100 shrink-0">
          <ul className="flex justify-around text-lg w-90 font-normal">
            <Link href="/#">Use cases</Link>
            <Link href="/#">Features</Link>
            <Link href="/#">Pricing</Link>
            <Link href="/#">Our staff</Link>
          </ul>
        </div>
        <div className="flex justify-center content-center text-2xl flex-1">
          <Link className="font-medium" href="/#">
            Login
          </Link>
          <Link
            className="ml-10 bg-white py-1 px-3 rounded-full text-black font-medium"
            href="/#"
          >
            Sing up
          </Link>
        </div>
      </div>
    </>
  );
}
