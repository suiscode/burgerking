'use client'

import React, { useState } from "react";
import menus from "../menu.json";
import Delivery from "../components/Delivery"
import DeliveryMenu from "../components/DeliveryMenu";

const page = (props: any ) => {
  const { searchParams } = props;
  const { ci } = searchParams;
  const menu = menus.data.menus;
  const [isClicked, setClicked] = useState<boolean>(false);

  return (
    isClicked ? <DeliveryMenu setClicked={setClicked}/>
    :
    <div className="mt-20 flex flex-col items-center justify-center bg-orange-100">
      <div className="h-48 bg-yellow-950 flex justify-center w-full items-center py-10 px-10">
        <h1 className="text-6xl text-orange-400">Хүргэлтийн цэс</h1>
      </div>
      <div className=" flex justify-center max-w-[950px] py-12 flex-wrap gap-5">
        {menu.map((item) => {
          return (
          <Delivery key={item.id} img={item.img} title={item.title} id={item.id} setClicked={setClicked} />
          )})}
      </div>
    </div>
  );
};

export default page;
