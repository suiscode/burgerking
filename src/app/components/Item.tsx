import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Item = ({
  img,
  title,
  price,
  setActive,
  id
}: {
  img: any;
  title: String;
  price: String;
  setActive: any;
  id: any
}) => {

  return (
    
      <div onClick={()=>setActive(id)} className="flex flex-col w-[20%] justify-center items-center">
        <div className="w-full h-[250px] relative">
            <Image
              src={img}
              objectFit="cover"
              alt="1"
              fill={true}
            />
          </div>
        <h1 className="text-2xl">{title}</h1>
        <h3 className="text-red-700">{price}₮</h3>
      </div>
  );
};

export default Item;
