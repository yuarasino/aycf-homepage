import type { NextPage } from "next"

import Head from "next/head"

import ThanksSection from "../components/thanks-section"

const ThanksPage: NextPage = () => {
  return (
    <div id="thanks">
      <Head>
        <title>お世話になってる方々 | えーゆーちごふれ！</title>
        <meta
          name="description"
          content="えーゆーちごふれがお世話になってる方々"
        />
      </Head>
      <ThanksSection />
    </div>
  )
}

export default ThanksPage
