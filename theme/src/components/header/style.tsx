import styled from "styled-components";
import Theme from "../../styles/theme";
import Typed from 'react-typed';

export const StyledHeader = styled.header`
  display: flex;
  background: ${Theme.components.header.background};
  flex-direction: column;
  height: ${Theme.components.header.height};
  border-bottom: 2px #ededed solid;

  @media (max-width: ${Theme.breakpoints.sm}) {
    height: 30vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-top: -50px;
    font-size: .75em;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  display: block;
  color: #fff;
  text-shadow: 0 5px 18px rgba(0, 0, 0, .07);
`;

export const Description = styled.h2`
  margin: 0;
  opacity: .85;
`;

export const StyledTopics = styled(Typed)`
  border-bottom: 3px #000 solid;
`;

export const CoachingButton = styled.a`
  background-color: ${Theme.layout.primaryColor};
  color: #fff;
  font-weight: bold;
  box-shadow: 0 0px 1px #e6e6e6, 0 2px 4px #e6e6e6;
  display: block;
  padding: 10px 35px;
  font-size: 1.0em;
  text-align: center;
  margin: 30px 0;
  transition: .5s all;
  &:hover {
    background-color: #949494;
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 0px 1px #ccc, 0 4px 4px #ccc;
  }
`;
