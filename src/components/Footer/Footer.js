import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
        <LinkList>
        <LinkColumn>
        <LinkTitle>Telefone</LinkTitle>
        <LinkItem href="tel:62 98128-6765">62 98128-6765</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ArthurBatista12312@gmail.com">ArthurBatista12312@gmail.com</LinkItem>
        </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
          <Slogan>Desenvolvedor JavaScript <br/>
          Conhecimento médio em bolsa de valores.</Slogan>
          </CompanyContainer>
        </SocialIconsContainer>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/arthur-batista-3613a1206/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/arthur-batista-3613a1206/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.instagram.com/aarthurbatistaa/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </FooterWrapper>
    
  );
};

export default Footer;
