import type { FC, MouseEventHandler } from "react"

import { useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import fanartList from "../contents/fanart-list.json"

const FanartSection: FC = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const length = fanartList.length
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
        {fanartList.map((fanart, index) => (
          <FanartButton
            key={fanart.image}
            fanart={fanart}
            onClick={() => {
              setSelected(index)
              setOpen(true)
            }}
          />
        ))}
        {open && (
          <Lightbox
            mainSrc={fanartList[selected].image}
            prevSrc={fanartList[(selected + length - 1) % length].image}
            nextSrc={fanartList[(selected + 1) % length].image}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
              setSelected((selected + length - 1) % length)
            }
            onMoveNextRequest={() => setSelected((selected + 1) % length)}
            imageCaption={
              <span className="font-jp">{fanartList[selected].author}</span>
            }
          />
        )}
        <style jsx global>{`
          .ril-caption {
            justify-content: flex-end;
          }
        `}</style>
      </div>
    </div>
  )
}

type Fanart = {
  image: string
  author: string
}

type FanartButtonProps = {
  fanart: Fanart
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const FanartButton: FC<FanartButtonProps> = ({ fanart, onClick }) => {
  return (
    <button
      className="
        relative w-full h-96 md:w-1/2
        block
        font-jp text-base
      "
      onClick={onClick}
    >
      <div
        className="
          relative w-full h-full
        "
      >
        <img className="w-full h-full object-cover" src={fanart.image} alt="" />
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
    </button>
  )
}

export default FanartSection
