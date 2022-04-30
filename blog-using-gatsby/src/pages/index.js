import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

import styled from "styled-components";

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>My Thoughts</h1>
      <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            date
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
