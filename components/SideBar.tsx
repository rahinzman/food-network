'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoApps } from "react-icons/io5";
import { LuPlaySquare } from "react-icons/lu";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { RiApps2Line } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import Button2 from "./ui/button2";
import { Button } from "./ui/button";

const SideBar = () => {
  const currentPath = usePathname();

  const nav_items = [
    { logo: <TbSmartHome />, href: "/" },
    { logo: <RiApps2Line />, href: "/empty" },
    { logo: <PiPaperPlaneTiltBold />, href: "/empty-2" },
    { logo: <LuPlaySquare />, href: "/empty-3" },
    { logo: <IoApps />, href: "/empty-4" },
  ];
  return (
    <div className="flex lg:flex-col justify-center items-center bg-card lg:w-[4.4rem] w-[full] h-[3rem] lg:h-[93vh] sticky bottom-0">
      <div className="flex lg:flex-col items-center justify-center gap-[2.5rem]">
        {nav_items.map((nav_item, i) => (
          <Link key={i} href={nav_item?.href}>
            <Button className={`text-2xl hover:bg-input rounded-lg p-[6px] px-2 ${nav_item.href === currentPath ? `text-[#ff6e3a] bg-[#e6542735]` :` text-foreground bg-input`}`}>{nav_item?.logo}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
