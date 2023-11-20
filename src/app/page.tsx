"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [image, setImage] = useState(true);

  const image1 = (
    <Image
      id="banner"
      className={`w-full h-full ${image ? "block banner-change" : 'hidden'}`}
      src="/banner1.png"
      width={0}
      height={0}
      sizes="100vw"
      alt="banner1"
    />
  );
  const image2 = (
    <Image
      id="banner"
      className={`w-full h-full ${image ? "hidden" : "block banner-change"}`}
      src="/banner2.png"
      width={0}
      height={0}
      sizes="100vw"
      alt="banner1"
    />
  );

  return (
    <main className="mt-14 flex min-h-screen bg-orange-100 overflow-hidden flex-col items-center ">
      <div className=" w-screen  relative">
        {image1}
        {image2}
        <Image
          className="w-9 rounded-full py-3 px-3 flex bg-white opacity-60 hover:opacity-100 absolute left-6 top-1/2"
          src="/left.svg"
          width={0}
          height={0}
          alt="left"
          onClick={() => setImage(!image)}
        />
        <Image
          className="w-9 rounded-full py-3 px-3 flex bg-white opacity-60 hover:opacity-100 absolute right-6 top-1/2"
          src="/right.svg"
          width={0}
          height={0}
          alt="left"
          onClick={() => setImage(!image)}
        />
      </div>
      <div className="w-full max-w-[1400px] flex gap-5">
        <div className="w-full flex gap-5  justify-center items-center flex-wrap py-4 px-4">
          <Link href="hurgelt" id="TEST" className="w-[42%]">
            <Image
              className={`w-full overflow-hidden h-full rounded-2xl border-white border-2`}
              src="/menu1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="banner1"
            />
          </Link>
          <Link href="hurgelt" id="TEST" className="w-[42%]">
            <Image
              className={`w-full overflow-hidden h-full rounded-2xl border-white border-2`}
              src="/menu2.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="banner1"
            />
          </Link>
          <Link href="hurgelt" id="TEST" className="w-[42%]">
            <Image
              className={`w-full overflow-hidden h-full rounded-2xl border-white border-2`}
              src="/menu3.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="banner1"
            />
          </Link>
          <Link href="hurgelt" id="TEST" className="w-[42%]">
            <Image
              className={`w-full overflow-hidden h-full rounded-2xl border-white border-2`}
              src="/menu4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="banner1"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
