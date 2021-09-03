import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoIosContact } from "react-icons/io";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

//Buttoens da aplicação na cabeca do site
const Header = () =>  (
  <Container>
    <Div1>
    <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'  }}>
    <IoIosContact size="3rem"/> <Span>Arthur Batista</Span>
      </a>
    </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
        <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
        <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>Sobre mim</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/ArthBatista">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/arthur-batista-3613a1206/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.instagram.com/aarthurbatistaa/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
