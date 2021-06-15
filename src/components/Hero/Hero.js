import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a developer with a passion for building things with code. I live in
        Madrid, Spain. I love sports and aviation... I'm also a fan of traveling
        and veggie food. My friends say than I'm creative and have a great sense
        of humor. I've worked with companies like La Vanguardia, La Pajita,
        Cedrion, Wild Code School, ISDI...
      </SectionText>
      <Button onClick={() => (window.location = "https://javiuty.github.io")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
