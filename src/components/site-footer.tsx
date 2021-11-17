import type { FC } from "react"

import { ChevronUpIcon } from "@heroicons/react/solid"

const SiteFooter: FC = () => {
  return (
    <footer
      className="
        relative w-full h-16
        bg-gray-900 text-white
      "
    >
      <div
        className="
          h-full
          flex justify-center items-center
        "
      >
        <p className="font-jp text-sm tracking-widest">
          <span className="font-body">&copy;</span>
          <span>えーゆーちごふれ！</span>
        </p>
      </div>
      <ReturnButton />
    </footer>
  )
}

const ReturnButton: FC = () => {
  const returnScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <button
      className="
        absolute bottom-4 right-4 w-8 h-8
        block
      "
      onClick={() => returnScroll()}
    >
      <ChevronUpIcon className="w-full h-full" />
    </button>
  )
}

export default SiteFooter
