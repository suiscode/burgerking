"use client";

import React, { useState } from "react";
import Image from "next/image";

const BuyMenu = ({
  items,
  active,
  setActive,
}: {
  items: any;
  active: any;
  setActive: any;
}) => {
  let item: any = [];

  items.forEach((el: any) => {
    if (el.id == active) {
      item = el;
    }
  });

  let [count, setCount] = useState(1);

  const dec=()=>{
    if(count > 1){
        setCount((prev) => prev - 1)
    }
  }
  console.log(count);
  

  return (
    <div className="absolute z-50 mt-20 relative bg-orange-100 w-[100vw] h-[100vh]">
        <img
          onClick={() => setActive("")}
          src="/close.svg"
          style={{ width: "38px", cursor: "pointer" }}
          className="right-[500px] z-50 fixed"
          alt=""
        />
      <div className="w-full h-[280px] bg-orange-400"></div>
      <div className="flex flex-col max-w-[580px] absolute top-10 right-0 left-0 m-auto justify-center items-center">
        <h1 className="text-white text-2xl">Захиалгын дугаар:</h1>
        <div className="w-full mt-4 gap-2 bg-orange-100 flex-col justify-center items-center flex p-10 ">
          <div className="w-[250px] mb-6 h-[250px] relative">
            <Image src={item.img} objectFit="cover" alt="1" fill={true} />
          </div>
          <h1 className="text-2xl text-amber-950">{item.title}</h1>
          <h3 className="text-red-700">{item.price}₮</h3>
          <div className="flex h-[50px] overflow-hidden rounded-lg border-[1px] border-gray-300">
            <img onClick={()=>dec()} className="flex p-2 justify-center items-center active:bg-orange-200 bg-orange-50 w-[40px]" src="/minus.svg" alt="" />
            <h1 className="flex bg-white justify-center items-center w-[200px]">{count}</h1>
            <img onClick={()=>setCount((prev) => prev + 1)} className="flex justify-center p-2 items-center active:bg-orange-200  bg-orange-50 w-[40px]" src="/plus.svg"/>
          </div>
          <h1 className="bg-red-700 h-10 flex justify-center items-center rounded-lg mt-20 text-white w-full">Хаяг оруулах</h1>
        </div>
      </div>
    </div>
  );
};

export default BuyMenu;
