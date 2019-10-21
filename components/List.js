import React from "react";
import styled from "@emotion/styled";
import PostListing from "./PostListing";

const List = ({ allData }) => {
  const allBlogPosts = allData.filter(content => content.type == "post");
  console.log(allBlogPosts);

  return (
    <BlogPosts>
      {allBlogPosts.map((post, i) => (
        <PostListing key={i} post={post} index={i} />
      ))}
    </BlogPosts>
  );
};

export default List;

const BlogPosts = styled.div`
  grid-row: 2/6;
  grid-column: 2/5;
`;
