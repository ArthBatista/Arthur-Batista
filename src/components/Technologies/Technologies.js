import React from 'react';
import { DiFirebase, DiReact, DiJsBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
     Front end em JavaScript
    </SectionText>
    <List>
      <ListItem>
        <DiJsBadge size="3rem" />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>ReactJS</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
     <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>
            
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Minhas experiencias <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
