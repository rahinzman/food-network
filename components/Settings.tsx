"use client";
import React, { useState } from "react";
import { PiTextTBold } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import VitaminChoice from "./VitaminChoice";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
 
type SliderProps = React.ComponentProps<typeof Slider>;

const Settings = (
  { value, setValue }: React.ComponentProps<any>,
  { className }: SliderProps
) => {
  return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.75, ease: "easeOut" }}
        className="hidden xl:block bg-background font-semibold h-[286px] w-[300px] m-4 p-4 rounded-xl"
      >
        <div className="border-input border-2 rounded-xl p-3">
          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-[#ff6e3a] border-2 border-[#ff6e3a] rounded-md">
                <PiTextTBold />
              </div>
              <h1 className="text-[#ff6e3a]">Settings</h1>
            </div>
            <IoIosArrowUp className="text-[#ff6e3a] text-xl cursor-pointer" />
          </div>
          <div className="flex justify-between items-center py-4">
            <h1>Paragraph font size</h1>
            <h1 className="text-[#ff6e3a]">{value}</h1>
          </div>
          <div>
            <Slider
              defaultValue={value}
              min={10}
              max={30}
              step={5}
              className={cn("w-[100%]", className)}
              onValueChange={(v) => setValue(v)}
            />
          </div>
          <VitaminChoice />
          <div className="flex justify-between pt-3">
            <h1>Turn Off Subtitle</h1>
            <Switch />
          </div>
        </div>
      </motion.div>
  );
};

export default Settings;
