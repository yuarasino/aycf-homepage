import type { FC } from "react"

import Image from "next/image"

const TopSection: FC = () => {
  return (
    <div id="top" className="-mt-16 pt-16 mb-16">
      <h1 className="reative">
        <Image
          src="/images/top.jpg"
          alt=""
          width={1920}
          height={994}
          layout="responsive"
          priority
        />
      </h1>
    </div>
  )
}

export default TopSection
