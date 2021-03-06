import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
 
//Titutlo do web site
const Hero = () => (
  <Section row nopadding> 
    <LeftSection>
      <SectionTitle main center>
       Bem vindo <br />

      </SectionTitle>
      <SectionText>
      Meu portfolio pessoal
      </SectionText>
<Button onClick={() => window.location = 'https://www.linkedin.com/in/arthur-batista-3613a1206/'}>Saber mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;
