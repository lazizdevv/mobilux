import { productTypes } from "@/service/types/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductCard = ({
  img,
  title,
  ram,
  color,
  memory,
  display,
  core,
  geForce,
  price,
  weight,
  id,
  brand,
  rame,
}: productTypes) => {
  return (
    <>
      <Link href={`/product-detail/${id}`}>
        <div className="w-[262px] bg-white cursor-pointer p-4 h-fit">
          <Image
            className="border"
            src={img}
            alt=""
            layout="responsive"
            objectFit="cover"
            width={262}
            height={262}
          />
          <h1 className="text-[rgb(10,_10,_10)] font-[Poppins] text-[14px] font-normal leading-[20px] tracking-[0%] text-left line-clamp-2">
            {title}
          </h1>
          <p className="text-[rgb(10,_10,_10)] font-[Poppins] text-[14px] font-normal leading-[20px] tracking-[0%] text-left line-clamp-2">{`${
            display ? display : ""
          } ${ram ? ram : ""} ${rame ? rame : ""} / ${memory ? memory : ""} ${
            color ? color : ""
          }`}</p>
          <strong className="text-[rgb(10,_10,_10)] font-[Lato] text-[18px] font-extrabold leading-[24px] tracking-[0%] text-left">
            {`${price} so'm`}
          </strong>
        </div>
      </Link>
    </>
  );
};
