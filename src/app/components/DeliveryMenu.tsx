"use client";

import React, { useEffect, useState } from "react";
import menu from "../menu.json";
import Link from "next/link";
import DeliveryCat from "./DeliveryCat";
import { useSearchParams } from "next/navigation";
import Item from "./Item";
import { log } from "console";
import BuyMenu from "./BuyMenu";

const DeliveryMenu = ({ setClicked }: any) => {
  const params = useSearchParams();
  const param: any = params.get("ci");

  const menus = menu.data.menus;
  const items = menus[param - 1].items;

  const [active, setActive] = useState('');
  return active ? (
    <BuyMenu items={items} setActive={setActive} active={active}/>
  ) : (
    <div className="mt-20 flex relative flex-col items-center justify-center bg-orange-100">
      <div
        id="zone"
        className="flex items-center w-full relative flex-col justify-center h-[180px]"
      >
        <div className="flex  items-center flex-col justify-center gap-6 z-10 w-full">
          <h1 className="text-orange-400 text-6xl">Хүргэлт</h1>
          <button className="h-[34px] flex align-middle justify-center rounded-xl max-w-[200px] bg-orange-400 py-[7px] px-8">
            <h5 className="text-white text-sm h-full">Хүргэлтийн бүс</h5>
          </button>
        </div>
      </div>
      <div className="h-[100px] mt-10 gap-3 w-[90%] flex">
        {menus.map((menu) => {
          return <DeliveryCat key={menu.id} {...menu} />;
        })}
      </div>
      <Link
        className="absolute text-red-600 left-[200px] top-[300px]"
        onClick={() => setClicked(false)}
        href="/hurgelt"
      >
        Menu
      </Link>
      <div className="flex relative w-[80%] flex-col min-h-[1200px] gap-6">
        <div className="flex mt-14 flex-wrap items-center justify-center max-w-1400px gap-10">
          {items.map((item) => {
            return (
              <Item {...item} setActive={setActive} key={item.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeliveryMenu;
