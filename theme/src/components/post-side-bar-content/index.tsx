import React, {FunctionComponent} from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Card} from "../card";
import styled from "styled-components";
import Theme from "../../styles/theme";

const LatestPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 193px;

  @media (max-width: ${Theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const RelevantTitle = styled.div`
width: 193px;

`;

const PostSidebarContent: FunctionComponent = () => {
  const latestPosts = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
        sort: { fields: frontmatter___created, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              tags
              created
              createdPretty: created(formatString: "DD MMMM, YYYY")
              excerpt
              featuredImage {
                childImageSharp {
                  fixed(width: 193, height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = latestPosts.posts.edges.map(node => node.node);

  return (
    <>
<RelevantTitle>
<h3 align={'center'}>You may also like</h3>
</RelevantTitle>
      <LatestPosts>
        {posts.map((post, index) => (
          <Card
            title={post.frontmatter.title}
            featuredImage={post.frontmatter.featuredImage.childImageSharp}
            path={post.frontmatter.path}
            key={index}
            compact={true}
            meta={
              {
                time: post.frontmatter.created,
                timePretty: post.frontmatter.createdPretty,
                tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
              }
            }
          />
        ))}
      </LatestPosts>
    </>
  );
};

export default PostSidebarContent;
