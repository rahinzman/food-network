"use client";
import { Rating } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { PiStarFill, PiStarLight } from "react-icons/pi";

const MidDesc = ({ setFoodsItemClicked, value }: React.ComponentProps<any>) => {
  const socials = ["facebook", "linkedIn", "twitter", "more"];
  const router = usePathname();

  const test = `text-[10px]`
  const test2 = `text-[15px]`
  const test3 =`text-[20px]`
  const test4 = `text-[25px]`
  const test5 =`text-[30px]`
  
  const val = `text-[${value[0]}px]`
  return (
    
      <motion.div
        key={router}
        initial={{
          opacity:0, x:-150
          // scaleX:2
        }}
        animate={{
           opacity:1,x:0
          // scaleX:1
        }}
        exit={{ opacity:0, x:150}}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
          <div
            className="lg:hidden flex justify-between items-center bg-background rounded-xl cursor-pointer h-14 mx-4 mt-4 px-4 z-10"
            onClick={() => setFoodsItemClicked(true)}
          >
            <div className="flex gap-3">
              <Image
                src={`/foodItemLogo.svg`}
                alt={`food Item Logo`}
                width={30}
                height={30}
              />
              <h3 className="text-lg font-semibold">Select Food Item</h3>
            </div>
            <IoIosArrowDown className="text-xl " />
          </div>
          <div className="bg-background xl:w-[74rem] my-4 lg:p-10 p-5 xl:mx-0 mx-4 rounded-xl">
            {/* top section */}
            <div className="block xl:flex justify-between items-start">
              <div className="hidden xl:block w-[28px] mt-16 space-y-6">
                {socials.map((social, i) => (
                  <Image
                    key={i}
                    src={`/social/${social}.svg`}
                    alt={`${social}`}
                    width={30}
                    height={30}
                    style={{ width: "auto", height: "auto" }}
                  />
                ))}
              </div>
              <div className="xl:w-[492px] space-y-6 pl-2">
                <h1 className="text-[38px] font-black leading-[49px]">
                  Health Benefits Of An Avocado
                </h1>
                <div className="space-y-2">
                  <h5 className="text-lg font-bold">Supports eye health:</h5>
                  <p className={`${val}`}>
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-bold">Supports eye health:</h5>
                  <p className={`${val}`}>
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
              </div>
              <div className="md:flex md:justify-center">
                <Image
                  src={`/avocadoDesc.svg`}
                  alt={`avocadoDesc`}
                  width={520}
                  height={520}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
            {/* mid section */}
            <div className="mt-10 xl:ml-[4.2rem]">
              <div className="space-y-2 ">
                <h5 className="text-lg font-bold">Supports eye health:</h5>
                <p className={`${val}`}>
                  Spinach contains high levels of vitamin A and other
                  antioxidants that help maintain healthy vision and protect
                  against age-related macular degeneration.. Spinach contains
                  high levels of vitamin A and other antioxidants that help
                  maintain healthy vision and protect against age-related
                  macular degeneration.. Spinach contains high levels of vitamin
                  A and other antioxidants that help maintain healthy vision and
                  protect against age-related macular degeneration.. Spinach
                  contains high levels of vitamin A and other antioxidants that
                  help maintain healthy vision and protect against age-related
                  macular degeneration.. Spinach contains high levels of vitamin
                  A and other antioxidants that help maintain healthy vision and
                  protect against age-related macular degeneration.. Spinach
                  contains high levels of vitamin A and other antioxidants that
                  help maintain healthy vision and protect against age-related
                  macular degeneration.. Spinach contains high levels of vitamin
                  A and other antioxidants that help maintain healthy vision and
                  protect against age-related macular degeneration..
                </p>
              </div>
              <div className="block xl:flex mt-10 gap-x-11 items-center">
                <div className="xl:w-[280rem] md:flex md:justify-center">
                  <Image
                    src={`/appleDesc.svg`}
                    alt={`avocadoDesc`}
                    width={520}
                    height={520}
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div className="space-y-2 xl:mt-0 mt-10">
                  <h5 className="text-lg font-bold">Supports eye health:</h5>
                  <p className={`${val}`}>
                    Spinach contains high levels of vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.. Spinach contains
                    high levels of vitamin A and other antioxidants that help
                    maintain healthy vision and protect against age-related
                    macular degeneration.. Spinach contains high levels of
                    vitamin A and other antioxidants that help maintain healthy
                    vision and protect against age-related macular
                    degeneration.. Spinach contains high levels of vitamin A and
                    other antioxidants that help maintain healthy
                  </p>
                </div>
              </div>
            </div>
            {/* rating */}
            <div className="mt-10 space-y-3 xl:ml-[4.2rem]">
              <h5 className="text-lg font-black">Was This Helpful?</h5>

              <Rating
                ratedColor="red"
                unratedColor="red"
                value={4}
                ratedIcon={<PiStarFill className="w-8 h-8 mr-2" />}
                unratedIcon={<PiStarLight className="w-8 h-8 mr-2" />}
              />
              <div className="xl:hidden flex mt-16 space-x-6">
                {socials.map((social, i) => (
                  <Image
                    key={i}
                    src={`/social/${social}.svg`}
                    alt={`${social}`}
                    width={40}
                    height={40}
                    style={{ width: "auto", height: "auto" }}
                  />
                ))}
              </div>
            </div>
          </div>
      </motion.div>

  );
};

export default MidDesc;
