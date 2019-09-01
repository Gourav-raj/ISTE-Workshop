import React from "react";
import App from "next/app";
import "../styles/index.scss";
import { ThemeProvider } from "@material-ui/styles";
import NavBar from "../src/components/NavBar";
import theme from "../src/theme";
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#server-jsx");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
