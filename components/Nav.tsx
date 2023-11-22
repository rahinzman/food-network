'use client'
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {BsMoonStars} from 'react-icons/bs'
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbDeviceNintendo } from "react-icons/tb";
import Button2 from "./ui/button2";
import { Button } from "./ui/button";
import { HiSun } from "react-icons/hi";
const Nav = () => {
  const { setTheme } = useTheme();
  return (
    <div className="bg-card h-[3.75rem] flex justify-between items-center px-5 sticky top-0 lg:z-30 z-0">
      <Link href={`/`} className="cursor pointer">
        <Image
          src={"/foodNetwork.svg"}
          alt="Food Network Logo"
          width={80}
          height={80}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>
      <div className="hidden md:flex">
        <Input type="text" placeholder='Search Best Food' className=" h-10 w-[24rem]" />
        <Button2 cl="absolute mt-1 ml-[21.7rem] text-[#ff6e3a] bg-[#e6542735] rounded-md">
          <BiSearch />
        </Button2>
      </div>
      <div className="hidden md:flex gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="text-2xl p-[6px] text-[#ff6e3a] bg-[#e6542735] rounded-md">
              <HiSun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <BsMoonStars className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background p-4 border-input border-[1px] rounded-md">
            <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer ">
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="icon" className="text-2xl p-[6px] text-foreground bg-[#e6542735] rounded-md">
          <TbDeviceNintendo />
        </Button>
        <Button variant="outline" size="icon" className="text-2xl p-[6px] text-foreground bg-[#1010101A] rounded-md">

          <GiHamburgerMenu />
        </Button>
      </div>
      <div className="flex md:hidden gap-4">
      <Button variant="outline" size="icon" className="text-2xl p-[6px] text-[#ff6e3a] bg-[#e6542735] rounded-md">
          <BiSearch />
        </Button>
        <Button variant="outline" size="icon" className="text-2xl p-[6px] text-foreground bg-[#1010101A] rounded-md">
          <GiHamburgerMenu />
        </Button>
      </div>
    </div>
  );
};

export default Nav;
