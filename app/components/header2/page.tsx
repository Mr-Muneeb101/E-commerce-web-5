import Link from "next/link";
export default function header2() {
  return (
    <div className="hidden sm:block">
      <div className="px-12 py-2 bg-[#F7F7F7] mt-2 border-b-2 border-gray-400">
        <div className="flex items-center justify-between gap-6 ">
          <div
            className="inline-flex gap-1 items-center font-bold font-inter text-3xl mx-4
          "
          >
            <img src="/images/Frame 1.svg" alt="3" /> <h1>Ddsgnr</h1>
          </div>
          <div className="flex  bg-white font-normal text-sm">
            <div className=" flex font-roboto gap-16  mr-8">
              <Link
                href={"#"}
                className="border-b-gray-500 border-b-2 p-2"
              >
                Home
              </Link>
              <Link href={"#"} className=" p-2 ">
                Courses
              </Link>
              <Link href={"#"} className="p-2">
                Services
              </Link>
              <Link href={"#"} className="p-2">
                Achivements
              </Link>
              <Link href={"#"} className=" p-2 ">
                About Us
              </Link>
              <Link href={"#"} className=" p-2 ">
                Testimonial
              </Link>
            </div>
            <div className="flex gap-4">
              <button className="border-2 border-black px-4 rounded-md">
                Login
              </button>
              <button className="border-2 border-black px-4 rounded-md text-white bg-black">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
