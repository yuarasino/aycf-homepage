import type { NextPage } from "next"

import Head from "next/head"

import FanartSection from "../components/fanart-section"

const FanartPage: NextPage = () => {
  return (
    <div id="fanart">
      <Head>
        <title>ファンアート | えーゆーちごふれ！</title>
        <meta name="description" content="えーゆーちごふれのファンアート" />
      </Head>
      <FanartSection />
    </div>
  )
}

export default FanartPage
