//@ts-ignore
"use client";
import Settings from "@/components/Settings";
import TabItem from "@/components/TabItem";
import MidDesc from "@/components/MidDesc";
import useDisclosure from "@/hooks/useDisclosure";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const { FoodsItemClicked, setFoodsItemClicked, value, setValue } =
    useDisclosure();

  useEffect(() => {
    {
      FoodsItemClicked
        ? document.body.classList.add("overflow-y-hidden")
        : document.body.classList.remove("overflow-y-hidden");
    }
  });
  const pathName = usePathname();
  return (
    <AnimatePresence mode={"wait"}>
      <main
        key={"/"}
        className="flex bg-input lg:rounded-tl-3xl overscroll-y-fixed"
      >
        {FoodsItemClicked ? (
          <div
            className="absolute w-screen h-[120vh] bg-gray-800/80 z-10 -mt-20 transition ease-linear"
            onClick={() => setFoodsItemClicked(false)}
          ></div>
        ) : (
          <div></div>
        )}
        <TabItem FoodsItemClicked={FoodsItemClicked} />
        <MidDesc setFoodsItemClicked={setFoodsItemClicked} value={value} />
        <Settings value={value} setValue={setValue} />
      </main>
    </AnimatePresence>
  );
}
