import type { FC } from "react"

const SiteMain: FC = ({ children }) => {
  return (
    <main
      className="
        w-full min-h-screen pt-16
      "
    >
      {children}
    </main>
  )
}

export default SiteMain
