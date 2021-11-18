import type { NextPage } from "next"

import Head from "next/head"

import TopSection from "../components/top-section"
import NewsSection from "../components/news-section"

const HomePage: NextPage = () => {
  return (
    <div id="home">
      <Head>
        <title>えーゆーちごふれ！</title>
        <meta name="description" content="えーゆーちごふれのホームページ" />
      </Head>
      <TopSection />
      <NewsSection />
    </div>
  )
}

export default HomePage
