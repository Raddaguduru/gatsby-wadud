import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Container, Grid} from "../components/common";
import {Post} from "../utils/models";
import {Card} from "../components/card";
import styled from "styled-components";
import TagList from "../components/tag-list";
import {Link} from "gatsby";
//import SidebarContent from "../components/sidebar-content";
import SEO from "../components/seo";
import Theme from "../styles/theme";

interface PostsPageProps {
  pathContext: {
    posts: Post[];
    postsPerPage: number;
  };
  location: Location;
}

//grid-template-columns: minmax(0, 1fr) .25fr;

const HomeContainer = styled(Container)`
display: grid;
grid-template-columns: minmax(0, 1fr);
  @media (max-width: ${Theme.breakpoints.xl}) {
    grid-template-columns: 1fr;
   }
`;
//grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

//  grid-template-areas: "latest latest" ". .";
const PostsContainer = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(3, 386.666px );
  grid-template-rows: repeat(2,500px);
  grid-template-areas: "latest latest latest ";
  grid-gap: 2rem;
  width: 100%;
  justify-content: center;
  margin-left: 0px;
  margin-right: 0px;
 @media (max-width: ${Theme.breakpoints.sm}) {
   display: block;
   padding: 0;

   article {
     margin-bottom: 30px;
   }
 }

`;

// const Sidebar = styled.aside`
//   width: 315px;
//   padding-top: 30px;
//
//   @media (max-width: ${Theme.breakpoints.xl}) {
//     margin: 30px auto;
//     border-top: 2px #e5eff5 solid;
//     padding: 20px;
//     width: 100%;
//   }
// `;

const ArchiveLinkWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`;

const ArchiveLink = styled(Link)`
  font-size: .8em;
  color: #fff ;
  padding: 10px 10px 10px 10px;
  border-radius: .3em;
  transition: background-color .5s;
  background-color: #31404e;

  &:hover {
    background-color: #485e72;
  }
`;

const PostsPage: FunctionComponent<PostsPageProps> = ({ pathContext, location }) => {
  const posts = pathContext.posts.slice(0, pathContext.postsPerPage);
  // <Sidebar>
  //   <SidebarContent />
  // </Sidebar>

// style={{gridArea: index === 0 ? 'latest' : undefined}}
// halfImage={index === 0}
  return (
    <Layout>
      <SEO location={location} type={`WebSite`} />
      <TagList />
      <HomeContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <Card
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              featuredImage={post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp : null}
              content={post.frontmatter.excerpt}
              key={index}
              meta={
                {
                  time: post.frontmatter.created,
                  timePretty: post.frontmatter.createdPretty,
                  tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
                }
              }

            />
          ))}
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
      </HomeContainer>
    </Layout>
  );
};

export default PostsPage;
