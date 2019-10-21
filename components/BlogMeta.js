import React, { Component } from "react";
import TagBlock from "../components/Tags";
import { PostTitle } from "../components/PostTitle";
import { PostDate } from "../components/PostDate";
import ReadingProgress from "../components/ReadingProgress";
import { articleSEO } from "../utils/seo";

export default class BlogMeta extends Component {
  renderProgressBar = postData => {
    return postData.hideProgressBar ? null : <ReadingProgress />;
  };

  render() {
    const { postData } = this.props.data;
    return (
      <>
        <div>{this.renderProgressBar(postData)}</div>
        <PostTitle>{postData.title}</PostTitle>
        <PostDate modifiedDate={false}>{postData.distanceFromPost}</PostDate>
        {postData.modifiedDate && (
          <PostDate modifiedDate={true}>
            {postData.distanceFromModified}
          </PostDate>
        )}

        <TagBlock tags={postData.tags} />
        {articleSEO(postData)}
      </>
    );
  }
}
