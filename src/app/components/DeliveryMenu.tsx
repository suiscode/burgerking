import React from "react";
import menu from "../menu.json";
import Image from "next/image";
import DeliveryCat from "./DeliveryCat";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const DeliveryMenu = ({setClicked}: any) => {
    const params = useSearchParams()
    const param = params.get('ci')
    
  const menus = menu.data.menus;

  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-orange-100">
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
          return ( <DeliveryCat key={menu.id}{...menu}/>
          );
        })}
      </div>
      {menus.map(menu=>{
        return(
            <div className="flex flex-col">
            <Link onClick={()=> setClicked(false)} href='/hurgelt'>Menu</Link>
            <div>
                <Image
                    src={menu.img}
                    width={100}
                    height={100}
                    alt='a'
                />
                <h1>{menu.title}</h1>
            </div>
      </div>
        )
      })}
    </div>
  );
};

export default DeliveryMenu;
