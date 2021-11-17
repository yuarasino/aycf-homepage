import type { AppProps } from "next/app"

import App from "next/app"

import SiteHeader from "../components/site-header"
import SiteFooter from "../components/site-footer"

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props
    return (
      <>
        <SiteHeader />
        <Component {...pageProps} />
        <SiteFooter />
      </>
    )
  }
}

export default MyApp
