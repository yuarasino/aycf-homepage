import type { FC } from "react"

const SiteMain: FC = ({ children }) => {
  return <main className="w-full h-auto pt-16">{children}</main>
}

export default SiteMain
