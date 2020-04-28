import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Link} from "gatsby";
import styled from "styled-components";
import Theme from "../styles/theme";
import SEO from "../components/seo";



//  flex-wrap: wrap;
const Intro = styled.section`
  display: flex;
  position:relative;
  height: 70vh;
  background: ${Theme.components.header.background};

`;

const Introdiv = styled.div`
margin: auto;
width: 1260px;
padding: 0 20px;
color: #fff;
display: flex;

`;

const IntroContent = styled.div`
font-size: 1.5em;
text-shadow: 0 2px 2px rgba(0,0,0,.15);
padding-right: 50px;

`;
const Paragraph = styled.p`
  opacity:.7;
`;
const ContactForm = styled.section`
  margin-top: 5vh;
  display: flex;
  position:relative;
  height: 70vh;
`;

const ContactWrapper = styled.div`
margin: auto;
width: 1260px;
padding: 0 20px;
display: flex;

`;

const ContactContent = styled.div`
font-size: 1.5em;
text-shadow: 0 2px 2px rgba(0,0,0,.15);
padding-right: 50px;
`;
const Form = styled.form`
{
 width:100% ;

}
`;
const Field = styled.div`
{
  margin-bottom: .75rem;
}
`;

const Label = styled.label`
{
margin-bottom: .5em;
font-weight: 700;
}
`;


const Control = styled.div`
{
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
}
`;


const Input = styled.input`
{
box-sizing: border-box;
box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
width: 1220px;
border: 1px solid transparent;
border-color: #dbdbdb;
border-radius: 4px;
box-shadow: none;
display: inline-flex;
font-size: 1rem;
height: 2.25em;
line-height: 1.5;
padding: calc(.375em - 1px) calc(.625em - 1px);
background: #ebe6e6  ;

&:focus {
  border: 3px solid #31404e;
}

}
`;
//  padding: 12px 20px;
//  margin: 8px 0;

const InputMessage = styled.textarea`
{
box-sizing: border-box;
box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
width: 1220px;
border: 1px solid transparent;
border-color: #dbdbdb;
border-radius: 4px;
box-shadow: none;
font-size: 1rem;
height: 30vh;
line-height: 1.5;
padding: calc(.375em - 1px) calc(.625em - 1px);
background: #ebe6e6  ;
display: block;
resize: vertical;
}
&:focus {
  border: 3px solid #31404e;
}

}
`;

const RightField = styled.div`
{
  display: flex;
  justify-content: flex-start;
float: right !important;

}
`;


const ControlButton = styled.div`
{
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  justify-content: center;
  margin-top: .75em;
  margin-bottom: 0;
  margin-right: .75rem;
}
`;

const ControlButton2 = styled.div`
{
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  justify-content: center;
  margin-top: .75em;
  margin-bottom: 0;
}
`;



//    -webkit-transition: background-color .5s;
// transition: background-color .5s;
//font-size: 1rem;
//padding: calc(.375em - 1px) .75em;

const Button = styled.button`
{
    transition-duration: 0.4s;
    color: #31404e;
    padding: 15px 32px;
    border-radius: .3em;
    border: 3px solid #31404e;
    background-color: #ebe6e6  ;
    font-weight: 700;
    text-align: center;
    font-size: 16px;
  &:hover{
    color: #fff;
    background-color: #31404e;
  }
}
`;

const Button2 = styled.button`
{
    transition-duration: 0.4s;
    color: #fff;
    padding: 15px 32px;
    border-radius: .3em;
    border: 3px solid #31404e;
    background-color: #31404e  ;
    font-weight: 700;
    text-align: center;
    font-size: 16px;
  &:hover{
    color: #31404e;
    background-color:  #ebe6e6;
  }
}
`;



function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

return(
  <Layout bigHeader={false}>
    <SEO
      title={`Contact`}
    />
  <Intro>
    <Introdiv>
      <IntroContent>
        <h1 >Contact Me</h1>
          <Paragraph>Shoot me an email about any questions you may have regarding coaching or otherwise.
          I will get back to you as soon as possible.
          </Paragraph>
      </IntroContent>
    </Introdiv>
  </Intro>
    <ContactForm>
      <ContactWrapper>
      <form
      size="100%"
      name="contact"
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </div>
      <Field>
        <Label>
          Name
        </Label>
      <Control>
        <Input type="text" name="name" placeholder= "Name" onChange={handleChange} />
      </Control>
      </Field>
      <Field>
        <Label>
          Email
        </Label>
      <Control>
        <Input type="email" name="email" placeholder= "Email" onChange={handleChange} />
      </Control>
      </Field>
      <Field>
        <Label>
          Message
        </Label>
      <Control>
        <InputMessage name="message" placeholder= "Message" onChange={handleChange} />
      </Control>
      </Field>
      <RightField>
        <ControlButton>
        <Button type="submit">Send</Button>
      </ControlButton>
      <ControlButton2>
        <Button2 type="reset">Clear</Button2>
      </ControlButton2>
      </RightField>
        </form>

      </ContactWrapper>
    </ContactForm>

</Layout>
)
};
