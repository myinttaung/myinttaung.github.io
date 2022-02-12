import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:320-295-0131'>320-295-0131</LinkItem>
        </LinkColumn>

        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto: myint.aung@go.stcloudstate.edu'>myint.aung@go.stcloudstate.edu</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Slowly but surely into the modern world :)</Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href="https://github.com/myinttaung">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://linkedin.com/in/myintmaung">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://facebook.com">
        <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>

  );
};

export default Footer;
