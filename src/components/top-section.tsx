import type { FC } from "react"

import Image from "next/image"

const TopSection: FC = () => {
  return (
    <section id="top" className="-mt-16 pt-16">
      <h2 className="hidden">TOP</h2>
      <div className="reative">
        <Image
          src="/images/top.jpg"
          alt=""
          width={1920}
          height={994}
          layout="responsive"
          priority
        />
      </div>
    </section>
  )
}

export default TopSection
