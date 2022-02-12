import React from 'react';
import { DiCodeBadge, DiCss3, DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
      I have worked with numerous technologies including C++, PHP, Microsoft SQL Server, Oracle SQL server, Javascript, etc...
      I also have experience with Object Oriented Programming.
    </SectionText>
    <List>
      <ListItem>
        <DiCodeBadge size = "3rem" />
        <ListContainer>
          <ListTitle> Coding languages </ListTitle>
          <ListParagraph>
            Experience with <br/>
            C++, Javascript, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size = "3rem" />
        <ListContainer>
          <ListTitle> Databases </ListTitle>
          <ListParagraph>
            Experience with <br/>
            MYSQL Server, PHP, MangoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle> Frontend </ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
