import type { FC } from "react"

import Image from "next/image"
import Link from "next/link"

import newsList from "../contents/news-list.json"

const NewsSection: FC = () => {
  return (
    <section id="news" className="-mt-16 pt-16">
      <h2
        className="
          py-8 md:py-12
          font-jp font-bold text-4xl text-center tracking-widest md:text-6xl
        "
      >
        <span>NEWS</span>
        <span className="text-2xl md:text-3xl">/ニュース</span>
      </h2>
      <div
        className="
          container h-120 overflow-auto mx-auto
          flex flex-wrap content-start
        "
      >
        {newsList.map((news) => (
          <NewsLink key={news.title} news={news} />
        ))}
      </div>
    </section>
  )
}

type News = {
  title: string
  date: string
  link: string
  thumb: string
}

type NewsLinkProps = {
  news: News
}

const NewsLink: FC<NewsLinkProps> = ({ news }) => {
  const external = /^http/.test(news.link)
  return (
    <Link href={news.link}>
      <a
        className="
          w-full h-24 p-2 md:w-1/2 md:p-4
          flex justify-center items-center
          font-jp text-base
          hover:bg-gray-500 hover:bg-opacity-10
        "
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
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
            <Image
              src={news.thumb}
              alt=""
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
        <div
          className="
            flex-1 h-full ml-2 md:ml-4
            flex flex-col justify-center items-start
          "
        >
          <div className="font-en text-sm text-red-900">
            {news.date.replace(/-/g, ".")}
          </div>
          <div>{news.title}</div>
        </div>
      </a>
    </Link>
  )
}

export default NewsSection
