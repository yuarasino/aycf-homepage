import type { FC } from "react"

import Link from "next/link"

import archiveList from "../contents/archive-list.json"

const ArchiveSection: FC = () => {
  return (
    <section id="archive" className="-mt-16 pt-16 mb-16">
      <h2
        className="
          py-8 md:py-12
          font-jp font-bold text-4xl text-center tracking-widest md:text-6xl
        "
      >
        <span>ARCHIVE</span>
        <span className="text-2xl md:text-3xl">/アーカイブ</span>
      </h2>
      <div
        className="
          container max-h-120 overflow-auto mx-auto
          flex flex-wrap content-start
        "
      >
        {archiveList.map((archive) => (
          <ArchiveLink key={archive.title} archive={archive} />
        ))}
      </div>
    </section>
  )
}

type Archive = {
  title: string
  date: string
  link: string
  thumb: string
}

type ArchiveLinkProps = {
  archive: Archive
}

const ArchiveLink: FC<ArchiveLinkProps> = ({ archive }) => {
  return (
    <Link href={archive.link}>
      <a
        className="
          w-full h-24 p-2 md:w-1/2 md:p-4
          flex justify-center items-center
          font-jp text-base
          hover:bg-gray-500 hover:bg-opacity-10
        "
      >
        <div
          className="
            w-32 h-full
            flex justify-center items-center
          "
        >
          <div
            className="
              relative w-32 h-18
              border border-gray-100
            "
          >
            <img src={archive.thumb} alt={archive.title} />
          </div>
        </div>
        <div
          className="
            flex-1 h-full ml-2 md:ml-4
            flex flex-col justify-center items-start
          "
        >
          <div className="font-en text-sm text-red-900">
            {archive.date.replace(/-/g, ".")}
          </div>
          <div>{archive.title}</div>
        </div>
      </a>
    </Link>
  )
}

export default ArchiveSection
