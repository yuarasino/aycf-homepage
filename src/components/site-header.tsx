import type { FC, MouseEventHandler } from "react"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from "@heroicons/react/solid"

import menuList from "../contents/menu-list.json"

const SiteHeader: FC = () => {
  const [open, setOpen] = useState(false)
  const leftMenuList = menuList.slice(0, menuList.length / 2)
  const rightMenuList = menuList.slice(menuList.length / 2, undefined)
  return (
    <header
      className="
        fixed top-0 left-0 w-full h-16 z-50
        bg-gray-900 text-white
      "
    >
      <div
        className="
          relative w-full h-full
          flex justify-center items-center lg:hidden
        "
      >
        <div
          className={`
            absolute top-16 left-0 w-full h-screen
            flex flex-col justify-start items-center
            bg-gray-900
            transform ${open ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-500
          `}
        >
          {menuList.map((menu) => (
            <DrawerLink
              key={menu.name}
              menu={menu}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
        <LogoLink />
        <OpenButton open={open} onClick={() => setOpen(!open)} />
      </div>
      <div
        className="
          container h-full mx-auto
          hidden justify-center items-center lg:flex
        "
      >
        <div
          className="
            flex-1
            flex justify-evenly items-center
          "
        >
          {leftMenuList.map((menu) => (
            <NavLink key={menu.name} menu={menu} />
          ))}
        </div>
        <LogoLink />
        <div
          className="
            flex-1
            flex justify-evenly items-center
          "
        >
          {rightMenuList.map((menu) => (
            <NavLink key={menu.name} menu={menu} />
          ))}
        </div>
      </div>
    </header>
  )
}

type Menu = {
  name: string
  link: string
}

const LogoLink: FC = () => {
  return (
    <Link href="/">
      <a className="block">
        <h1 className="font-jp font-bold text-2xl tracking-widest">
          <span>えーゆーちごふれ！</span>
        </h1>
      </a>
    </Link>
  )
}

type OpenButtonProps = {
  open: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

const OpenButton: FC<OpenButtonProps> = ({ open, onClick }) => {
  const getIconClassName = (visible: boolean): string => {
    return `
      absolute top-0 left-0 w-full h-full
      ${visible ? "opacity-100" : "opacity-0"}
      transition-opacity duration-500
    `
  }
  return (
    <button
      className="
        absolute top-4 right-4 w-8 h-8
        block
      "
      onClick={onClick}
    >
      <MenuIcon className={getIconClassName(!open)} />
      <XIcon className={getIconClassName(open)} />
    </button>
  )
}

type DrawerLinkProps = {
  menu: Menu
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const DrawerLink: FC<DrawerLinkProps> = ({ menu, onClick }) => {
  return (
    <Link href={menu.link}>
      <a className="block" onClick={onClick}>
        <div
          className="
            w-full h-16
            flex justify-center items-center
            font-en font-bold text-base tracking-widest
          "
        >
          <span>{menu.name}</span>
        </div>
      </a>
    </Link>
  )
}

type NavLinkProps = {
  menu: Menu
}

const NavLink: FC<NavLinkProps> = ({ menu }) => {
  return (
    <Link href={menu.link}>
      <a className="block">
        <div className="font-en font-bold text-base tracking-widest">
          <span>{menu.name}</span>
        </div>
      </a>
    </Link>
  )
}

export default SiteHeader
