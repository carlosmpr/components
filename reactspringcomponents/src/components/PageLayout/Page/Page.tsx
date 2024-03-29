import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Content from "../Content/Content";
import Hero from "../../Hero/Hero";
import Navbar, { NavbarProps } from "../../Navbar/Navbar";
import "../../../index.css";
import Header from "../../Header/Header";
import SlideIn from "../../Animations/SlideIn";
//@ts-ignore
export default function Page({ NavbarItems, HeroProps }) {
  return (
    <Wrapper>
      <Navbar NavbarItems={NavbarItems} />
      <Header text="Home Page" />
      <SlideIn>
      
      <Content>
        <Hero {...HeroProps} />
      </Content>
      <Content>
        <Hero {...HeroProps} reverse />
      </Content>
      <Content>
        <Hero {...HeroProps} />
      </Content>
      </SlideIn>
    </Wrapper>
  );
}
