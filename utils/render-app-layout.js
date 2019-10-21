import { SearchContent } from "../components/layouts/SearchLayout";
import { BlogContent } from "../components/layouts/BlogLayout";
import Nav from "../components/Nav";
import BackBtn from "../components/BackBtn";
export function renderLayout(props, state) {
  const { Component } = props;
  const { postData } = state;
  const { layout } = postData;

  if (!layout || !props.router) return;

  switch (layout) {
    case "post":
      return (
        <div className="site-container">
          <BackBtn />
          <BlogContent>
            <Component {...props} postData={postData} />
          </BlogContent>
        </div>
      );
    case "search":
      return (
        <SearchContent>
          <Component {...props} />
        </SearchContent>
      );
    case "blog-post-list":
      return (
        <React.Fragment>
          <div className="site-container">
            <Nav />
            <Component {...props} />
          </div>
        </React.Fragment>
      );
    case "page":
    default:
      return (
        <React.Fragment>
          <Component {...props} postData={postData} />
        </React.Fragment>
      );
  }
}
