import React from 'react';
import { Container } from './styled/Container.styled';
import { Attribution, AttributionA, Footericon, Huddlefootericon, Huddleleftpage, Huddlelogo, Huddlemockups, Huddlerightpage, Registerbutton, Styledhuddlelandingpage } from './styled/Landingpage.styled';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import logo from './images/logo.svg';
import mockups from './images/illustration-mockups.svg';

const socials = [
  {
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/fays.dalgona",
  }
];

export const Huddlelandingpage = () => {
  return (
    <Container>
      <Styledhuddlelandingpage>
        <Huddleleftpage>
          <Huddlelogo src={logo} alt='logo'/>
          <Huddlemockups src={mockups} alt='mockups'/>
        </Huddleleftpage>
        <Huddlerightpage>
          <h1>
            Build The Community Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>
          <Registerbutton>
            Register
          </Registerbutton>
          <Huddlefootericon>
            {socials.map(({icon, url}) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Footericon icon={icon} key={url}
                />
              </a>
            ))}
          </Huddlefootericon>
        </Huddlerightpage>
      </Styledhuddlelandingpage>
      <Attribution>
      <AttributionA>
                <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Huddle landing page with a single introductory section.</a></h4>
            </AttributionA>
            <AttributionA>
                <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
