'use client'

import React, { useEffect, useState } from "react";
import menus from "../menu.json";
import Restraunt from "../components/Restraunt"
import DeliveryMenu from "../components/DeliveryMenu";

const Page = (props: any ) => {
  const { searchParams } = props;
  const { ci } = searchParams;
  const menu = menus.data.menus;
  const [isClicked, setClicked] = useState<boolean>(false);
  

  useEffect(()=>{
    if(ci){
      setClicked(true)
    }else{
      setClicked(false)
    }
  },[ci])
  

  return (
    isClicked ? <DeliveryMenu setClicked={setClicked}/>
    :
    <div className="mt-20 flex flex-col items-center justify-center bg-orange-100">
      <div className="h-48 bg-red-600 flex justify-center w-full items-center py-10 px-10">
        <h1 className="text-6xl text-white">Ресторан</h1>
      </div>
      <div className=" flex justify-center max-w-[950px] py-12 flex-wrap gap-5">
        {menu.map((item) => {
          return (
          <Restraunt key={item.id} img={item.img} title={item.title} id={item.id} />
          )})}
      </div>
    </div>
  );
};

export default Page;
