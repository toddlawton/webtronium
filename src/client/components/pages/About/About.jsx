import React from 'react'
import { Button } from 'ui-components'
import styled from 'styled-components'

const StyledAbout = styled.div`
  max-width: 940px;
  margin: 0 auto;
`

const About = () => (
  <StyledAbout>
    <h1>About</h1>
    <p>Shutterstock, a global technology company, has created the largest and most vibrant two-sided marketplace for creative professionals to license content - including images, videos and music - as well as innovative tools that power the creative process.</p>
    <p>The company has expanded its portfolio to include Bigstock, a value-oriented stock media agency PremiumBeat, a curated royalty-free music library; Rex Features, a premier source of editorial images for the world's media; and WebDAM, a cloud-based digital asset management platform for businesses, as well as creating Offset, a high-end image collection.</p>
    <Button label="hey there!" />
  </StyledAbout>
)

export default About
