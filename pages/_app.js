import App, { Container } from "next/app";
import Head from "next/head";
import NextSeo from "next-seo";
import { createSEOConfig } from "../utils/seo";
import getPostData from "../utils/get-post-data";
import BlogEngine from "../utils/blog-engine";
import { renderLayout } from "../utils/render-app-layout";

import { checkForSW } from "../utils/check-for-sw";

import { GlobalStyles } from "../styles/global-blog-styles";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { navOpen: false, postData: props.postData };
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const [allData, postData] = await Promise.all([
      BlogEngine(),
      getPostData(router)
    ]).catch(error =>
      console.error("Error in _app.js getInitialProps()", error)
    );

    const propsObj = Object.assign(
      {},
      { router, postData, allData, ...pageProps }
    );

    return { ...propsObj };
  }

  async componentDidMount() {
    await checkForSW();
  }

  async componentDidUpdate(prevProps, prevState) {
    const postData = await getPostData(this.props.router);
    if (!prevState.postData || postData.name !== this.state.postData.name) {
      this.setState({ postData });
    }
  }

  handleToggleNavigation = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  render() {
    const { postData } = this.state;

    const seoData = createSEOConfig(postData);
    if (postData) {
      const tagsString = postData.tags.join(", ");
      return (
        <Container>
          {/* (1) SEO  */}
          <Head>
            <meta name="keywords" content={tagsString} />
          </Head>
          <NextSeo config={seoData} />

          {/* (3) page body */}
          <React.Fragment>
            {renderLayout(this.props, this.state)}
          </React.Fragment>

          <GlobalStyles />

          <style jsx>
            {`
              .icon-button {
                margin: 15px;
              }
            `}
          </style>
        </Container>
      );
    } else {
      return null;
    }
  }
}
