import type { FC } from "react"

import Image from "next/image"

import fanartList from "../contents/fanart-list.json"

const FanartSection: FC = () => {
  return (
    <div className="-mt-16 pt-16 mb-16">
      <h1
        className="
          py-8 md:py-12
          font-jp font-bold text-4xl text-center tracking-widest md:text-6xl
        "
      >
        <span>FANART</span>
        <span className="text-2xl md:text-3xl">/ファンアート</span>
      </h1>
      <div
        className="
          container mx-auto
          flex flex-wrap content-start
        "
      >
        {fanartList.map((fanart) => (
          <FanartBox key={fanart.image} fanart={fanart} />
        ))}
      </div>
    </div>
  )
}

type Fanart = {
  image: string
  author: string
}

type FanartBoxProps = {
  fanart: Fanart
}

const FanartBox: FC<FanartBoxProps> = ({ fanart }) => {
  return (
    <div
      className="
        relative w-full h-96 md:w-1/2
        font-jp text-base
      "
    >
      <div
        className="
          relative w-full h-full
        "
      >
        <Image src={fanart.image} alt="" layout="fill" objectFit="cover" />
      </div>
      <div
        className="
          absolute bottom-0 right-0
          bg-gray-900 bg-opacity-50
          text-white
        "
      >
        <span className="px-2">{fanart.author}</span>
      </div>
    </div>
  )
}

export default FanartSection
