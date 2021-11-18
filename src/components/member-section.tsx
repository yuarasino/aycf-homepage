import type { FC, MouseEventHandler } from "react"

import { useState } from "react"
import Link from "next/link"

import memberList from "../contents/member-list.json"

const MemberSection: FC = () => {
  const [selected, setSelected] = useState(0)
  return (
    <section id="member" className="-mt-16 pt-16 mb-16">
      <h2
        className="
          py-8 md:py-12
          font-jp font-bold text-4xl text-center tracking-widest md:text-6xl
        "
      >
        <span>MEMBER</span>
        <span className="text-2xl md:text-3xl">/メンバー</span>
      </h2>
      <div
        className="
          container overflow-auto mx-auto
          flex flex-wrap content-start
        "
      >
        {memberList.map((member, index) => (
          <MemberButton
            key={member.name}
            member={member}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
      <div
        className="
          container overflow-auto mx-auto mt-4 md:mt-8
          flex flex-wrap content-start
        "
      >
        <MemberIllust member={memberList[selected]} />
        <MemberInformation member={memberList[selected]} />
      </div>
    </section>
  )
}

type Member = {
  name: string
  nameEn: string
  class: string
  description: string
  twitter: string
  youtube: string
  icon: string
  illust: string
}

type MemberButtonProps = {
  member: Member
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const MemberButton: FC<MemberButtonProps> = ({ member, onClick }) => {
  return (
    <button
      className="
        w-1/2 h-24 p-2 md:w-1/4 md:p-4
        flex justify-center items-center
        font-jp text-xl
        hover:bg-gray-500 hover:bg-opacity-10
      "
      onClick={onClick}
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
          <img src={member.icon} alt="" />
        </div>
      </div>
      <div
        className="
          flex-1 h-full ml-2 md:ml-4
          flex flex-col justify-center items-start
        "
      >
        <div>{member.name}</div>
      </div>
    </button>
  )
}

type MemberIllustProps = {
  member: Member
}

const MemberIllust: FC<MemberIllustProps> = ({ member }) => {
  return (
    <div
      className="
        w-full h-auto md:w-1/2
        flex justify-center items-center
      "
    >
      <div className="relative w-full h-auto">
        <img src={member.illust} alt={member.name} />
      </div>
    </div>
  )
}

type MemberInformationProps = {
  member: Member
}

const MemberInformation: FC<MemberInformationProps> = ({ member }) => {
  return (
    <div
      className="
        w-full md:w-1/2 p-2 md:p-4
        flex flex-col justify-center items-start
        font-jp text-base
      "
    >
      <div className="text-4xl md:text-6xl">{member.name}</div>
      <div className="mt-2 text-2xl text-red-900 md:text-3xl">
        {member.class}
      </div>
      <div className="mt-8 whitespace-pre-wrap">{member.description}</div>
      <div className="mt-8">
        <Link href={member.twitter}>
          <a className="underline" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </Link>
        <Link href={member.youtube}>
          <a
            className="ml-2 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MemberSection
