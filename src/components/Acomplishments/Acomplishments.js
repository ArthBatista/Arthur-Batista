import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Projetos no Github'},
  { number: 8, text: 'tempo de dev', },
 // { number: 1900, text: 'Cursos', },
  { number: 2, text: 'Freelancers', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Experiencia</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
       <Box key={index}>
<BoxNum>{card.number}+</BoxNum>
<BoxText>{card.text}</BoxText>
       </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
