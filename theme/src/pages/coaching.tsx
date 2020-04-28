import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Link} from "gatsby";
import styled from "styled-components";
import Theme from "../styles/theme";
import SEO from "../components/seo";

interface CoachingPageProps {
  location: Location;

}

//  flex-wrap: wrap;
const Intro = styled.section`
  display: flex;
  position:relative;
  height: 90vh;
  background: ${Theme.components.header.background};

`;

const AboutMe = styled.div`
margin: auto;
width: 1260px;
padding: 0 20px;
color: #fff;
display: flex;

`;

const AboutMeContent = styled.div`
font-size: 1.5em;
text-shadow: 0 2px 2px rgba(0,0,0,.15);
padding-right: 50px;

`;

const Paragraph = styled.p`
  opacity:.7;
  line-height:2em;
`;
const CoachingPage: FunctionComponent<AboutProps> = ({location}) => (
  <Layout bigHeader={false}>
    <SEO
      location={location}
      title={`Coaching`}
    />
    <Intro>
      <AboutMe>
        <AboutMeContent>
<h1 >Hello there!</h1>
<Paragraph>I'm <strong>Ravi</strong>, a college student, software developer, and personal trainer.
 This, <strong>voluntas.io</strong>, is my personal (<em>tech/fitness</em>) blog deisgned
with the intent of merging my two passions.
</Paragraph>
</AboutMeContent>
      </AboutMe>
    </Intro>
  </Layout>
);
//aspiring software developer growing his data science skillset(SQL/Python) to exeact,analyse,manage,and store data to
//reach better insights
export default CoachingPage;
