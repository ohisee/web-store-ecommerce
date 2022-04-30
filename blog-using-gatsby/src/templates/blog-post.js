/**
 * @fileoverview blog post component
 */
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
