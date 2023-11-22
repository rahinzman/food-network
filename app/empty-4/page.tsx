"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const EmptyPage = () => {
  return (
    <div className="bg-input w-full lg:rounded-tl-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-10 bg-background m-4 h-[90vh] rounded-lg">
          <Image src={"/empty.svg"} alt="empty page" width={500} height={500} />
          <h2 className="text-3xl font-bold"> This Page Is Empty</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default EmptyPage;
