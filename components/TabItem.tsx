"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { fruits, vegs } from "@/app/data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Button from "./ui/button2";

type setFoodsItemClickedType = {
  FoodsItemClicked: boolean;
};

const TabItem: React.FC<setFoodsItemClickedType> = (
  props: setFoodsItemClickedType
) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.75, ease: "easeOut" }}
    >
      <div
        className={`bg-background lg:flex justify-center h-[845px] w-[300px] lg:relative absolute lg:m-4 rounded-xl lg:translate-x-0 lg:z-0 z-20 ${
          props.FoodsItemClicked
            ? `-translate-x-2 transition ease-linear duration-300 -mt-[60px]`
            : `-translate-x-96 transition ease-linear duration-300`
        }`}
      >
        <Tabs defaultValue="fruits" className="w-[280px] p-2 py-4">
          <div className="border-2 border-[#e6542735] rounded-lg">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="fruits" className="font-semibold">
                Fruits
              </TabsTrigger>
              <TabsTrigger value="vegs" className="font-semibold">
                Vegetables
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="fruits">
            <div className="flex items-center py-2 ">
              <Input type="text" placeholder='Search by Fruits Name' className=" h-10 w-[16.5rem] " />
              <Button cl="absolute ml-[14.2rem] text-[#ff6e3a] bg-[#e6542735] rounded-sm">
                <BiSearch />
              </Button>
            </div>
            <div className="h-[700px] overflow-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Card>
                  <Label>Fruit lists</Label>
                  {fruits.map((fruit, i) => (
                    <CardContent
                      className="space-y-3 flex items-center space-x-4 mt-3 transition duration-150 ease-linear"
                      key={i}
                    >
                      <Image
                        src={`/fruits/${fruit.name}.svg`}
                        alt={`${fruit.name}`}
                        width={0}
                        height={0}
                        style={{ width: "23%", height: "23%" }}
                      />
                      <div className="space-y-1 pb-2">
                        <Label className="text-base ">
                          {fruit.name[0].toLocaleUpperCase() +
                            fruit.name.slice(1)}
                        </Label>
                        <CardDescription className="text-sm">
                          {fruit.desc}
                        </CardDescription>
                      </div>
                    </CardContent>
                  ))}
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="vegs">
            <div className="flex items-center py-2 ">
              <Input type="text" placeholder="Search by Vegetables Name" className=" h-10 w-[16.5rem] " />
              <Button cl="absolute ml-[14.2rem] text-[#ff6e3a] bg-[#e6542735] rounded-sm">
                <BiSearch />
              </Button>
            </div>
            <div className="h-[700px] overflow-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Card>
                  <Label>Vegetable lists</Label>
                  {vegs.map((veg, i) => (
                    <CardContent
                      className="space-y-3 flex items-center space-x-4 mt-3"
                      key={i}
                    >
                      <Image
                        src={`/vegs/${veg.name}.svg`}
                        alt={`${veg.name}`}
                        width={0}
                        height={0}
                        style={{ width: "23%", height: "23%" }}
                        className="ml-1 py-1"
                      />
                      <div className="space-y-1 pb-2 pl-1">
                        <Label className="text-base">
                          {veg.name[0].toLocaleUpperCase() + veg.name.slice(1)}
                        </Label>
                        <CardDescription className="text-sm">
                          {veg.desc}
                        </CardDescription>
                      </div>
                    </CardContent>
                  ))}
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default TabItem;
