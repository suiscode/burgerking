import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menu = ({img, title, setClicked,id} : {
    img:any,
    title:String
    setClicked: any,
    id:any;
}) => {
  return (
    <Link onClick={() => setClicked(true)} href={`/hurgelt?ci=${img}`} className="w-[31%] h-[400px] rounded-xl overflow-hidden">
          <div className="w-full h-[330px] relative">
            <Image
              src={img}
              objectFit="cover"
              alt="1"
              sizes='100vw'
              fill={true}
            />
          </div>
          <div className="bg-white h-[70px] flex items-center justify-center">
            <h1 className="text-amber-950 text-xl">{title}</h1>
          </div>
        </Link>
  )
}

export default menu