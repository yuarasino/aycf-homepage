import type { AppProps } from "next/app"

import App from "next/app"
import "tailwindcss/tailwind.css"

import SiteHeader from "../components/site-header"
import SiteMain from "../components/site-main"
import SiteFooter from "../components/site-footer"

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props
    return (
      <div>
        <SiteHeader />
        <SiteMain>
          <Component {...pageProps} />
        </SiteMain>
        <SiteFooter />
      </div>
    )
  }
}

export default MyApp
