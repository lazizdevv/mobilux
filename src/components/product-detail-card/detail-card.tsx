import { productTypes } from "@/service/types/products";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export const DetailCard = ({
  price,
  title,
  img,
  brand,
  color,
  id,
  ram,
  rame,
  text,
  core,
  display,
  geForce,
  memory,
  weight,
}: productTypes) => {
  return (
    <>
      <div className="flex  w-full bg-white border-primary border">
        <div className="w-full p-16 relative">
          <Image
            src={img}
            className="border border-primary"
            alt=""
            objectFit="cover"
            width={480}
            height={480}
          />
          <div className="absolute top-0 mx-auto flex justify-between items-center w-full px-7 py-6 left-0">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary cursor-pointer rounded-md hover:bg-slate-300">
              <ArrowLeft />
              <Link
                className="text-[rgb(10,_10,_10)] font-[Lato] text-[15px] font-bold leading-[22.5px] tracking-[0%] text-left"
                href={"/"}
              >
                orqaga
              </Link>
            </div>
            <Heart />
          </div>
        </div>
        <div className="bg-red-400 w-full p-12">
          <h1 className="text-[rgb(0,_0,_0)] font-lato text-[36px] font-bold leading-[43px] tracking-[9.5%] text-left">
            {title}
          </h1>
          <p className="text-primary font-lato text-[42px] font-bold leading-[50px] tracking-[0%] text-left">
            {price} so'm
          </p>
          <Button>savatchaga</Button>
        </div>
      </div>
    </>
  );
};
