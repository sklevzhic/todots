import '../styles/globals.css'
import withRedux from 'next-redux-wrapper'
import App, {AppContext, AppProps} from 'next/app'
import { makeStore } from '../store'

class MyApp extends App {
    static async getInitialProps({Component, ctx}: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        return {pageProps}

    }
    render() {
      const { Component, pageProps } = this.props;

      return <Component {...pageProps} />
    }
}

export default withRedux(makeStore)(MyApp)
