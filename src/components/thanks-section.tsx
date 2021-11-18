import type { FC } from "react"

import Link from "next/link"

import thanksList from "../contents/thanks-list.json"

const ThanksSection: FC = () => {
  return (
    <div className="-mt-16 pt-16 mb-16">
      <h1
        className="
          py-8 md:py-12
          font-jp font-bold text-4xl text-center tracking-widest md:text-6xl
        "
      >
        <span>THANKS</span>
        <span className="text-2xl md:text-3xl">/お世話になってる方々</span>
      </h1>
      {Object.entries(groupByClass(thanksList)).map(([key, values]) => (
        <div key={key}>
          <h2
            className="
              py-4 md:py-6
              font-jp font-bold text-2xl text-center tracking-widest md:text-3xl
            "
          >
            <span>- {key} -</span>
          </h2>
          <div
            className="
              container mx-auto mb-4
              flex flex-wrap content-start
            "
          >
            {values.map((thanks) => (
              <ThanksBox key={thanks.name} thanks={thanks} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

type Thanks = {
  name: string
  class: string
  description: string
  icon: string
  twitter: string
  youtube: string
}

const groupByClass = (thanksList: Thanks[]): { [key: string]: Thanks[] } => {
  const res: { [key: string]: Thanks[] } = {}
  thanksList.forEach((thanks) => {
    const class_ = thanks.class
    ;(res[class_] || (res[class_] = [])).push(thanks)
  })
  return res
}

type ThanksBoxProps = {
  thanks: Thanks
}

const ThanksBox: FC<ThanksBoxProps> = ({ thanks }) => {
  return (
    <div
      className="
        w-full h-24 p-2 md:w-1/2 md:p-4
        flex justify-center items-center
        font-jp text-base
      "
    >
      <div
        className="
          w-16 h-full
          flex justify-center items-center
        "
      >
        <div
          className="
            relative w-16 h-16 rounded-full overflow-hidden
            border border-gray-100
          "
        >
          <img src={thanks.icon} alt="" />
        </div>
      </div>
      <div
        className="
          flex-1 h-full ml-2 md:ml-4
          flex flex-col justify-center items-start
        "
      >
        <div>
          <span className="font-bold">{thanks.name}</span>
          <Link href={thanks.twitter}>
            <a
              className="ml-4 text-sm underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </Link>
          <Link href={thanks.youtube}>
            <a
              className="ml-2 text-sm underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </Link>
        </div>
        <div className="text-sm">{thanks.description}</div>
      </div>
    </div>
  )
}

export default ThanksSection
