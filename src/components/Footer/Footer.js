import React from "react";
import styled from "styled-components";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const dataTop = [
  {
    title: "Institucional",
    links: [
      {
        href: "/",
        name: "Homepage",
      },
      {
        href: "/",
        name: "Rev Dev",
      },
      {
        href: "/",
        name: "Rev Earth Group",
      },
      {
        href: "/",
        name: "Contact us",
      },
    ],
  },
  {
    title: "Ideas",
    links: [
      {
        href: "/",
        name: "Ideas",
      },
    ],
  },
  {
    title: "Socila Media",
    links: [
      {
        href: "/",
        name: "Facebook",
      },
      {
        href: "/",
        name: "Instagram",
      },
      {
        href: "/",
        name: "Twitter",
      },
      {
        href: "/",
        name: "Linkedin",
      },
      {
        href: "/",
        name: "Youtube",
      },
    ],
  },
];

const dataBottom = {
  copy: "© Rev Earth 2020",
  links: [
    {
      href: "/",
      name: "Política de privacidad",
    },
    {
      href: "/",
      name: "Terminos y condiciones",
    },
    {
      href: "/",
      name: "Politica de cookies",
    },
  ],
};

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <TopFooter blocks={dataTop} />
        <BottomFooter {...dataBottom} />
      </Container>
      <Separator />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 0 calc((100vw / 24) * 2);
`;

const Container = styled.div`
  border-top: 2px solid rgb(0, 30, 80);

  @media (max-width: 559px) {
    padding: 3rem 0;
  }
  @media (min-width: 560px) {
    padding: 2rem calc((100vw / 24) * 1);
  }
`;

const Separator = styled.div`
  @media (max-width: 559px) {
    padding: 2rem 0 1rem;
  }
  @media (min-width: 560px) {
    border-top: 1px solid rgb(223, 228, 232);
    padding-top: 4rem;
  }
`;

export default Footer;
