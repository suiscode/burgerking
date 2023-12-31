"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

  const [display, setDisplay] = useState(false)

  return (
    <header className="w-screen fixed z-[1000] top-0 bg-orange-100 h-20 flex items-center justify-between px-10 py-3">
      <div className="flex items-center justify-center gap-5 box-border">
        <ul className="flex gap-5 text-yellow-950 size text-xl h-7">
          <Link href="/hurgelt" className="hover:text-orange-400">
            <li>hurgelt</li>
          </Link>
          <Link href="/restraunt" className="hover:text-orange-400">
            <li>restraunt</li>
          </Link>
          <Link className="text-red-700" href="/new">
            <li>new</li>
          </Link>
        </ul>
        <Image className="bg-none hover:bg-white hover:fill-slate-500 py-1 box-border px-1 border-0
         rounded-full" src="/bars-solid.svg" width={30} height={30} alt="burgerlogo" onClick={()=>setDisplay(!display)}/>
      </div>
      <Link className="absolute right-0 left-0 w-12 ml-auto mr-auto" href="/">
        <Image src="/burgerlogo.png" width={70} height={70} alt="burgerlogo" />
      </Link>
      <div>
        <Image
            src='/cart.svg'
            width={25}
            height={25}
            alt="cart"
        />
      </div>
      <div id='menu' className={`${display ? 'open-menu' : ''} absolute flex flex-col bg-white rounded-xl top-[60px] left-[280px] justify-between`}>
        <Link href='/'>Бидний тухай</Link>
        <Link href='/'>Бидний тухай</Link>
        <Link href='/'>Бидний тухай</Link>
        <Link href='/'>Бидний тухай</Link>
      </div>
    </header>
  );
};

export default Header;
