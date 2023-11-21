'use client'

import React, { useState } from "react";
import menus from "../menu.json";
import Menu from "../components/Menu"

const page = (props: any ) => {
  const { searchParams } = props;
  const { ci } = searchParams;
  const menu = menus.data.menus;

  const [isClicked, setClicked] = useState<boolean>(false);

  console.log(menu);

  return (
    isClicked ? <div style={{ height: "200px", background: "red"}}>
      { ci }
      <button style={{ marginTop:"100px" }} onClick={() => setClicked(false)}> back </button>
    </div> 
    :
    <div className="mt-20 flex flex-col items-center justify-center bg-orange-100">
      <div className="h-48 bg-red-600 flex justify-center w-full items-center py-10 px-10">
        <h1 className="text-6xl text-white">Ресторан</h1>
      </div>
      <div className=" flex justify-center max-w-[950px] py-12 flex-wrap gap-5">
        {menu.map((item) => {
          return (
          <Menu key={item.id} id={item.id} img={item.img} title={item.title} setClicked={setClicked} />
          )})}
      </div>
    </div>
  );
};

export default page;
