import React from "react";
import Image from "next/image";
import Link from "next/link";

const DeliveryCat = ({
  img,
  title,
  id,
}: {
  img: any;
  title: String;
  id: any;
}) => {
  return (
    <Link href={`?ci=${id}`} id='cat' className="flex border-[0.5px] overflow-hidden border-gray-600 box-border h-[50px] rounded-2xl " >
      <div className="w-[50px] h-[50px] relative">
        <Image src={img} objectFit="cover" alt="1" sizes="100" fill={true} />
      </div>
      
      <div className="bg-orange-100 px-3 h-[50px] flex items-center justify-center">
        <h1 className="text-amber-950 text-xs w-full">{title}</h1>
      </div>
    </Link>
  );
};

export default DeliveryCat;
