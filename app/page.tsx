import Image from "./components/Image/Image"
import HEADER2 from "./components/header2/page";
import Link from "next/link";
import Header from "./components/header/page";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header></Header>
      <HEADER2></HEADER2>
      <div className="sm:flex  ">
        <div className="sm:items-center sm:justify-center sm:flex sm:flex-col sm:w-1/2 sm:gap-6 ">
          <div className="flex flex-col justify-start px-4 py-10 gap-4 sm:py-0 sm:justify-center sm:items-center">
            <div className=" sm:gap-6 sm:flex sm:flex-col sm:items-center sm:justify-center">
              <div>
                <h3 className="font-robot font-bold text-3xl leading-tigh sm:text-6xl">
                  Learn new skills
                </h3>
                <h3 className="font-robot font font-bold text-3xl leading-tight sm:text-6xl">
                  online with ease
                </h3>
              </div>
              <p className="font-roboto font-normal text-base sm:w-[30.25rem] sm:text-start my-4">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-center sm:justify-start items-start sm:mr-40">
            <button
              className="border-[1px] px-6 text-base border-black sm:px-4 py-3 bg-[#000000] text-white rounded-md sm:text-sm font-roboto
          "
            >
              Start learning now
            </button>
            <button className="border-[1px] border-black px-6 sm:px-4 py-3 bg-[#ffffff] text-black rounded-md text-base sm:text-sm font-roboto">
              Explore Courses
            </button>
          </div>
        </div>
        <Image
          src="/images/Image.svg"
          alt="image"
          className="py-12 w-screen sm:w-1/2 sm:py-0  sm:p-0"
          width={400}
        />
      </div>
      <div className="sm:flex sm:justify-between sm:bg-[#F7F7F7] sm:items-center sm:p-2 sm:py-12">
        <p className="font-roboto font-bold text-lg pb-4 px-4 sm:p-0 sm:hidden">
          Trusted by the worlds best companies [social proof to build
          credibility]
        </p>
        <p className="font-roboto font-bold text-lg pb-4 px-4 sm:p-0 hidden sm:block w-80">
          Trusted by the 2000+ companies Worldwide
        </p>

        <div className="flex overflow-scroll gap-3 px-4 sm:overflow-hidden sm:h-10 sm:gap-16 sm:mx-4">
          <Image src="/images/Airbnb Logo.svg" alt="" />
          <Image src="/images/Airbnb Logo2.svg" alt="" />
          <Image src="/images/Airbnb Logo3.svg" alt="" />
          <Image src="/images/Airbnb Logo4.svg" alt="" />
          <Image src="/images/Airbnb Logo5.svg" alt="" />
        </div>
      </div>
      <div className=" px-5 py-12 flex flex-col gap-4 mt-16">
        <h4 className="font-roboto sm:text-5xl text-3xl font-bold text-center">
          Explore Courses by category
        </h4>
        <p className="text-base text-center font-normal ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center">
        <div className="p-4 flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-8 sm:px-0">
          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 px-4 w-[21rem] sm:w-[26.625rem]">
            <Image src="/images/Frame 290.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Design & Development
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 w-[21rem] px-4 sm:w-[26.625rem]">
            <Image src="/images/Frame 291.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Marketing
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 w-[21rem] px-4 sm:w-[26.625rem]">
            <Image src="/images/Frame 292.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Deveopment
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:gap-8 sm:my-4 hidden ">
          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 px-4 w-[21rem] sm:w-[26.625rem]">
            <Image src="/images/Frame 290.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Design & Development
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 w-[21rem] px-4 sm:w-[26.625rem]">
            <Image src="/images/Frame 291.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Marketing
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 w-[21rem] px-4 sm:w-[26.625rem]">
            <Image src="/images/Frame 292.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Deveopment
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:gap-8 sm:my-4 hidden">
          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 px-4 w-[21rem] sm:w-[26.625rem]">
            <Image src="/images/Frame 290.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Design & Development
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 w-[21rem] px-4 sm:w-[26.625rem]">
            <Image src="/images/Frame 291.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Marketing
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-[#F7F7F7] rounded py-4 w-[21rem] px-4 sm:w-[26.625rem]">
            <Image src="/images/Frame 292.svg" alt="" className="h-[80px]" />
            <div className="flex flex-col">
              <span className="font-roboto font-semibold text-lg">
                Deveopment
              </span>
              <span className="font-normal text-base ">
                50+ Courses Available
              </span>
            </div>
          </div>
        </div>
        <button className="border-black border-[1px] w-fit py-2 px-4 rounded text-sm my-8">
          
          View All Courses
        </button>
      </div>

      <div className="sm:block hidden">
        <div className="pt-6 flex flex-col gap-6 sm:my-20 sm:pt-12">
          <h4 className="font-roboto text-3xl font-bold text-center sm:text-5xl">
            Our Achivements
          </h4>
          <p className="font-roboto font-normal text-base text-center sm:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="font-roboto font-normal text-base text-center hidden sm:block ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra
            <br />
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.
          </p>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-y-6 py-6 sm:flex sm:justify-center sm:items-center sm:py-0 sm:gap-44">
          <div className="px-12 flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">+200</h6>
            <p className="font-roboto font-normal text-small">Courses</p>
          </div>
          <div className="px-6  flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">50k</h6>
            <p className="font-roboto font-normal text-small">Mentors</p>
          </div>
          <div className="px-6 flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">370k</h6>
            <p className="font-roboto font-normal text-small">Studnets</p>
          </div>
          <div className="px-6 flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">100+</h6>
            <p className="font-roboto font-normal text-small">Recognition</p>
          </div>
        </div>
      </div>

      <div className=" sm:my-40 sm:block hidden">
        <div className="pt-6 flex flex-col gap-6  sm:my-20 sm:pt-12">
          <h4 className="font-roboto text-3xl font-bold text-center sm:text-5xl">
            Our Achivements
          </h4>
          <p className="font-roboto font-normal text-base text-center sm:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="font-roboto font-normal text-base text-center hidden sm:block ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra
            <br />
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.
          </p>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-y-6 py-6 sm:flex sm:justify-center sm:items-center sm:py-0 sm:gap-44">
          <div className="px-12 flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">+200</h6>
            <p className="font-roboto font-normal text-small">Courses</p>
          </div>
          <div className="px-6  flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">50k</h6>
            <p className="font-roboto font-normal text-small">Mentors</p>
          </div>
          <div className="px-6 flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">370k</h6>
            <p className="font-roboto font-normal text-small">Studnets</p>
          </div>
          <div className="px-6 flex flex-col justify-center items-center">
            <h6 className="font-roboto font-bold text-5xl">100+</h6>
            <p className="font-roboto font-normal text-small">Recognition</p>
          </div>
        </div>
      </div>

      <div className="py-12 mt-12 flex flex-col ">
        <div>
          <h4 className="font-roboto font-bold sm:text-6xl text-3xl text-center sm:py-2">
            Courses
          </h4>
          <p className="font-roboto font-normal text-base text-center my-4">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className="my-12">
          <ul className="flex gap-6 items-center justify-center font-medium text-sm">
            <li>
              <button className="hover:border-b-gray-500  hover:border-b-2 border-b-2 border-transparent rounded-sm">
                Popular
              </button>
            </li>
            <li>
              <button className="hover:border-b-gray-500  hover:border-b-2 border-b-2 border-transparent rounded-sm">
                Recomended
              </button>
            </li>
            <li>
              <button className="hover:border-b-gray-500  hover:border-b-2 border-b-2 border-transparent rounded-sm">
                Best Price
              </button>
            </li>
          </ul>
        </div>
        <div className="sm:flex sm:justify-around">
          <div className="mx-6 bg-[#F7F7F7] rounded my-12 sm:w-[26rem]">
            <Image src="/images/Image2.svg" alt="" className="w-[100%]" />
            <div className="p-6">
              <div className="flex gap-x-1 ">
                <div className="flex justify-between w-[100vw]">
                  <span className="text-sm font-roboto font-semibold">
                    Design
                  </span>{" "}
                  <Image src="/images/Star 1.svg" alt="" className=" w-4 " />
                </div>
                <span className="font-roboto text-sm">5.0</span>
              </div>
              <div>
                <h5 className="font-roboto font-bold text-2xl my-4">
                  UX/UI Design 201
                </h5>
                <p className="font-normal text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="py-6 flex gap-9 items-center">
                <button className="font-roboto border-black border-[1px] rounded text-sm py-1 px-4">
                  Enroll Now
                </button>{" "}
                <span className="font-roboto font-semibold text-sm">$400</span>
              </div>
            </div>
          </div>

          <div className="mx-6 bg-[#F7F7F7] rounded my-12 sm:w-[26rem]">
            <Image src="/images/Image3.svg" alt="" className="w-[100%]" />
            <div className="p-6">
              <div className="flex gap-x-1 ">
                <div className="flex justify-between w-[100vw]">
                  <span className="text-sm font-roboto font-semibold">
                    Programming
                  </span>
                  <Image src="/images/Star 1.svg" alt="" className=" w-4 " />
                </div>
                <span className="font-roboto text-sm">5.0</span>
              </div>
              <div>
                <h5 className="font-roboto font-bold text-2xl my-4">
                  Introduction to Python
                </h5>
                <p className="font-normal text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="py-6 flex gap-9 items-center">
                <button className="font-roboto border-black border-[1px] rounded text-sm py-1 px-4">
                  Enroll Now
                </button>{" "}
                <span className="font-roboto font-semibold text-sm">$400</span>
              </div>
            </div>
          </div>

          <div className="mx-6 bg-[#F7F7F7] rounded my-12 sm:w-[26rem]">
            <Image src="/images/Image4.svg" alt="" className="w-[100%]" />
            <div className="py-6 px-4 ">
              <div className="flex gap-x-1 ">
                <div className="flex justify-between w-[100vw]">
                  <span className="text-xs font-roboto font-semibold">
                    Bussiness
                  </span>{" "}
                  <Image src="/images/Star 1.svg" alt="" className=" w-4 " />
                </div>
                <span className="font-roboto text-xs">5.0</span>
              </div>
              <div>
                <h5 className="font-roboto font-bold text-xl mb-2 mt-4">
                  Data Analysis for beginners
                </h5>
                <p className="font-normal text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="py-2 flex gap-9 items-center">
                <button className="font-roboto border-black border-[1px] rounded text-sm py-1 px-4">
                  Enroll Now
                </button>{" "}
                <span className="font-roboto font-semibold text-sm">$400</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:justify-around hidden">
          <div className="mx-6 bg-[#F7F7F7] rounded my-12 sm:w-[26rem]">
            <Image src="/images/Image2.svg" alt="" className="w-[100%]" />
            <div className="p-6">
              <div className="flex gap-x-1 ">
                <div className="flex justify-between w-[100vw]">
                  <span className="text-sm font-roboto font-semibold">
                    Design
                  </span>{" "}
                  <Image src="/images/Star 1.svg" alt="" className=" w-4 " />
                </div>
                <span className="font-roboto text-sm">5.0</span>
              </div>
              <div>
                <h5 className="font-roboto font-bold text-2xl my-4">
                  UX/UI Design 201
                </h5>
                <p className="font-normal text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="py-6 flex gap-9 items-center">
                <button className="font-roboto border-black border-[1px] rounded text-sm py-1 px-4">
                  Enroll Now
                </button>{" "}
                <span className="font-roboto font-semibold text-sm">$400</span>
              </div>
            </div>
          </div>

          <div className="mx-6 bg-[#F7F7F7] rounded my-12 sm:w-[26rem]">
            <Image src="/images/Image3.svg" alt="" className="w-[100%]" />
            <div className="p-6">
              <div className="flex gap-x-1 ">
                <div className="flex justify-between w-[100vw]">
                  <span className="text-sm font-roboto font-semibold">
                    Programming
                  </span>{" "}
                  <Image src="/images/Star 1.svg" alt="" className=" w-4 " />
                </div>
                <span className="font-roboto text-sm">5.0</span>
              </div>
              <div>
                <h5 className="font-roboto font-bold text-2xl my-4">
                  Introduction to Python
                </h5>
                <p className="font-normal text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="py-6 flex gap-9 items-center">
                <button className="font-roboto border-black border-[1px] rounded text-sm py-1 px-4">
                  Enroll Now
                </button>{" "}
                <span className="font-roboto font-semibold text-sm">$400</span>
              </div>
            </div>
          </div>

          <div className="mx-6 bg-[#F7F7F7] rounded my-12 sm:w-[26rem]">
            <Image src="/images/Image4.svg" alt="" className="w-[100%]" />
            <div className="py-6 px-4 ">
              <div className="flex gap-x-1 ">
                <div className="flex justify-between w-[100vw]">
                  <span className="text-xs font-roboto font-semibold">
                    Bussiness
                  </span>{" "}
                  <Image src="/images/Star 1.svg" alt="" className=" w-4 " />
                </div>
                <span className="font-roboto text-xs">5.0</span>
              </div>
              <div>
                <h5 className="font-roboto font-bold text-xl mb-2 mt-4">
                  Data Analysis for beginners
                </h5>
                <p className="font-normal text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="py-2 flex gap-9 items-center">
                <button className="font-roboto border-black border-[1px] rounded text-sm py-1 px-4">
                  Enroll Now
                </button>{" "}
                <span className="font-roboto font-semibold text-sm">$400</span>
              </div>
            </div>
          </div>
        </div>

        <button className="border-black border-[1px] w-fit py-2 px-4 rounded text-xs my-2 mx-auto">
          {" "}
          View All Courses{" "}
        </button>
      </div>

      <div className="flex flex-col justify-center p-6 bg-[#F7F7F7] items-center">
        <div className="pt-20 pb-10">
          <h4 className="font-roboto font-bold text-center sm:text-5xl  text-3xl my-8 ">
            Our team
          </h4>
          <p className="fonr-roboto font-normal text-center text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="sm:grid grid-cols-3 grid-rows-2 sm:gap-x-56 ">
          <div className="flex flex-col p-4 items-center mt-6 ">
            <Image src="/images/Image5.svg" alt="" className="w-20 my-6" />
            <div className="flex justify-center  flex-col mb-6">
              <span className="font-roboto font-bold text-center text-xl ">
                {" "}
                James Nakdu{" "}
              </span>
              <p className="font-roboto font-normal text-center text-lg">
                Marketing Coordinator
              </p>
            </div>
            <div className="flex justify-center gap-4 ">
              <Image src="/images/Vector1.svg" alt="" />
              <Image src="/images/Vector2.svg" alt="" />
              <Image src="/images/Vector3.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col p-4 items-center mt-6 ">
            <Image src="/images/Image6.svg" alt="" className="w-20 my-6" />
            <div className="flex justify-center  flex-col mb-6">
              <span className="font-roboto font-bold text-center text-xl ">
                {" "}
                Joseph Nunyambu{" "}
              </span>
              <p className="font-roboto font-normal text-center text-lg">
                Nursing Assistant
              </p>
            </div>
            <div className="flex justify-center gap-4 ">
              <Image src="/images/Vector1.svg" alt="" />
              <Image src="/images/Vector2.svg" alt="" />
              <Image src="/images/Vector3.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col p-4 items-center mt-6 ">
            <Image src="/images/Image7.svg" alt="" className="w-20 my-6" />
            <div className="flex justify-center  flex-col mb-6">
              <span className="font-roboto font-bold text-center text-xl ">
                {" "}
                Jospeh Ngumbau{" "}
              </span>
              <p className="font-roboto font-normal text-center text-lg">
                Medical Assistant
              </p>
            </div>
            <div className="flex justify-center gap-4 ">
              <Image src="/images/Vector1.svg" alt="" />
              <Image src="/images/Vector2.svg" alt="" />
              <Image src="/images/Vector3.svg" alt="" />
            </div>
          </div>

          <div className=" flex-col p-4 items-center mt-6 sm:flex hidden">
            <Image src="/images/Image7.svg" alt="" className="w-20 my-6" />
            <div className="flex justify-center  flex-col mb-6">
              <span className="font-roboto font-bold text-center text-xl ">
                {" "}
                Jospeh Ngumbau{" "}
              </span>
              <p className="font-roboto font-normal text-center text-lg">
                Medical Assistant
              </p>
            </div>
            <div className="flex justify-center gap-4 ">
              <Image src="/images/Vector1.svg" alt="" />
              <Image src="/images/Vector2.svg" alt="" />
              <Image src="/images/Vector3.svg" alt="" />
            </div>
          </div>
          <div className=" flex-col p-4 items-center mt-6 sm:flex hidden">
            <Image src="/images/Image7.svg" alt="" className="w-20 my-6" />
            <div className="flex justify-center  flex-col mb-6">
              <span className="font-roboto font-bold text-center text-xl ">
                {" "}
                Jospeh Ngumbau{" "}
              </span>
              <p className="font-roboto font-normal text-center text-lg">
                Medical Assistant
              </p>
            </div>
            <div className="flex justify-center gap-4 ">
              <Image src="/images/Vector1.svg" alt="" />
              <Image src="/images/Vector2.svg" alt="" />
              <Image src="/images/Vector3.svg" alt="" />
            </div>
          </div>
          <div className="sm:flex flex-col p-4 items-center mt-6  hidden">
            <Image src="/images/Image7.svg" alt="" className="w-20 my-6" />
            <div className="flex justify-center  flex-col mb-6">
              <span className="font-roboto font-bold text-center text-xl ">
                {" "}
                Jospeh Ngumbau{" "}
              </span>
              <p className="font-roboto font-normal text-center text-lg">
                Medical Assistant
              </p>
            </div>
            <div className="flex justify-center gap-4 ">
              <Image src="/images/Vector1.svg" alt="" />
              <Image src="/images/Vector2.svg" alt="" />
              <Image src="/images/Vector3.svg" alt="" />
            </div>
          </div>
        </div>
        <button className="border-black border-[1px] text-base py-1.5 px-4 w-fit rounded my-6 mt-8 sm:hidden">
          {" "}
          View All{" "}
        </button>
      </div>

      <div className="flex flex-col gap-6 py-4 px-4 justify-center items-center sm:items-start sm:bg-[#F7F7F7] sm:py-48  ">
        <div className="px-4 my-8 ">
          <h4 className="font-roboto font-bold text-3xl text-center  mb-4 sm:hidden">
            What Our Student Say
          </h4>
          <h4 className="font-roboto font-bold text-3xl text-center sm:text-start mb-4 hidden sm:block sm:text-5xl">
            Customer Terminal
          </h4>
          <p className="font-sans font-normal text-center text-base sm:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="sm:w-[100%] sm:px-12">
          <div className="sm:flex sm:gap-8 sm:justify-between sm:items-start sm:w-[100%]">
            <div className="flex flex-col p-8 gap-6 border-2 border-gray-600 sm:w-[23rem]">
              <div className=" flex w-fit gap-1">
                {" "}
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
              </div>
              <div className=" pr-4 text-left">
                <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-14 rounded-full border-2 overflow-hidden">
                  <Image src="/images/Image7.svg" alt="" className="w-full" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-roboto font-semibold text-base text-left">
                    Waden Warren
                  </span>
                  <span className="font-roboto font-normal text-base text-left ">
                    Position, Company name{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex-col p-8 gap-6 border-2 border-gray-600 sm:w-[23rem] hidden sm:flex">
              <div className=" flex w-fit gap-1">
                {" "}
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
              </div>
              <div className=" pr-4 text-left">
                <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-14 rounded-full border-2 overflow-hidden">
                  <Image src="/images/Image7.svg" alt="" className="w-full" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-roboto font-semibold text-base text-left">
                    Waden Warren
                  </span>
                  <span className="font-roboto font-normal text-base text-left ">
                    Position, Company name{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex-col p-8 gap-6 border-2 border-gray-600 sm:w-[23rem] hidden sm:flex">
              <div className=" flex w-fit gap-1">
                {" "}
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
                <Image src="/images/Vector4.svg" alt="" />
              </div>
              <div className=" pr-4 text-left">
                <p className="text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-14 rounded-full border-2 overflow-hidden">
                  <Image src="/images/Image7.svg" alt="" className="w-full" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-roboto font-semibold text-base text-left">
                    Waden Warren
                  </span>
                  <span className="font-roboto font-normal text-base text-left ">
                    Position, Company name{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-2">
              <div className="rounded-full w-2 h-2 bg-black"></div>
              <div className="rounded-full w-2 h-2 bg-[#8D8D8D]"></div>
              <div className="rounded-full w-2 h-2 bg-[#8D8D8D]"></div>
              <div className="rounded-full w-2 h-2 bg-[#8D8D8D]"></div>
              <div className="rounded-full w-2 h-2 bg-[#8D8D8D]"></div>
            </div>
            <div className="flex gap-3 w-fit">
              <button className="p-3 border-black border-[1px] rounded-full">
                <Image src="/images/Vector5.svg" alt=""/>
              </button>
              <button className="p-3 border-black border-[1px] rounded-full">
                <Image src="/images/Vector6.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 my">
        <div className="">
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between sm:p-12 sm:my-24">
            <div>
              <p className="font-roboto font-semibold text-center text-lg sm:text-start ">
                Subscribe to our newsletter
              </p>
              <p className="font-roboto font-normal text-base text-center my-4 sm:my-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <div className="w-full flex flex-col gap-2 sm:flex-row">
                <input
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="px-3 py-3 text-left rounded-md border-gray-600 border-[1px] font-normal text-gray-800 sm:w-72"
                ></input>
                <button className="font-roboto text-center flex items-center justify-center text-lg border-black border-[1px] p-2 py-2.5 rounded-md font-base sm:text-sm sm:px-6">
                  Subscribe
                </button>
              </div>
              <p className="font-roboto text-xs text-center font-normal sm:text-start">
                By subscribing you agree to with our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className="my-18 border-b-2 border-gray-900 py-6 sm:grid sm:grid-cols-4 sm:p-12 sm:py-28">
            <div className="flex items-center justify-center pr-5 sm:justify-start sm:items-start ">
              <Image src="/images/Frame 1.svg" alt="" width={400}  height={400}/>{" "}
              <p className="font-sans font-bold text-2xl">Ddsgnr</p>
            </div>
            <div>
              <p className="font-semibold text-center font-roboto text-base my-8 sm:m-0">
                Courses
              </p>
              <div className=" flex flex-col gap-5 sm:mt-5">
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Bussiness
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Development
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Technolgy
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Design
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Programming
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-center font-roboto text-base my-8 sm:m-0">
                Resources
              </p>
              <div className=" flex flex-col gap-5 sm:mt-5">
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Career
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Resume
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Learning
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Internship Preparation
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Jobs
                </Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-center font-roboto text-base my-8 sm:my-0">
                About us
              </p>
              <div className=" flex flex-col gap-5 sm:mt-5">
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Contact
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Help/Support
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  FAQ
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Terms and Condtions
                </Link>
                <Link
                  href={"#"}
                  className="font-normal text-center font-roboto text-base"
                >
                  {" "}
                  Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-6  sm:flex-row sm:justify-between sm:p-8">
          <div className="sm:flex sm:gap-4">
            <p className="font-normal text-sm text-center font-roboto">
              2023 Ddsgnr. All right reserved.
            </p>
            <div className="font-normal text-sm text-center font-roboto flex gap-5 underline justify-center">
              <a
                href="
              #"
              >
                {" "}
                Privacy Policy
              </a>
              <a href="#">Terms of service</a>
              <a href="#"> Cookies settings</a>
            </div>
          </div>
          <div className="flex gap-3 justify-center sm:h-6">
            <Image src="images/Vector7.svg" alt="" />
            <Image src="images/Vector8.svg" alt="" />
            <Image src="images/Vector9.svg" alt="" />
            <Image src="images/Vector10.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
