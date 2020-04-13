import React, {FunctionComponent} from "react";
import {graphql, Link, useStaticQuery} from "gatsby";
import {Tag} from "../../utils/models";
import Img from "gatsby-image";
import slugify from "slugify";
import {
  StyledTag,
  StyledTagList,
  TagArchiveLink,
  TagArchiveLinkWrapper,
  TagContainer,
  TagIcon,
  TagListTitle,
  TagName,
  TagWrapper
} from "./style";

const TagList: FunctionComponent = () => {
  const tagsQuery = useStaticQuery<{ allTags: { nodes: Tag[] } }>(graphql`
    query Tags {
      allTags(filter: {featured: { eq: true }} limit:6) {
        nodes {
          name
          icon {
            childImageSharp {
              fixed(height: 55) {
                ...GatsbyImageSharpFixed
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  `);


  const tags      = tagsQuery.allTags.nodes;

  // <TagListTitle>Featured Tags</TagListTitle>
  //
  // {/* gatsby-image doesn't handle SVGs, hence we need to take care of it */}
  // {icon.extension !== 'svg'
  //   ? <Img fixed={tag.icon.childImageSharp.fixed}/>
  //   : <TagIcon src={icon.publicURL} alt={tag.name}/>
  // }

  return (
    <TagWrapper>
    <TagContainer>
      <StyledTagList>
        {tags.map((tag, index) => {
          const icon = tag.icon;
          return (
            <StyledTag key={index}>
              <Link to={`/tag/${slugify(tag.name, {lower: true})}`}>

                <TagName>{tag.name}</TagName>
              </Link>
            </StyledTag>
          );
        })}
        <TagArchiveLink to={`/tags`}>...and more!</TagArchiveLink>
      </StyledTagList>
    </TagContainer>
  </TagWrapper>
  );
};

export default TagList;
