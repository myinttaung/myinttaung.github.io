import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portolio
      </SectionTitle>
      <SectionText>
        My name is Myint Myat Aung and I am currently a computer science major student at St. Cloud State University.
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/myintmaung'}>Learn More</Button> 
    </LeftSection>
  </Section>
);

export default Hero;