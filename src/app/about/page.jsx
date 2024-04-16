import React from "react";
import PropTypes from "prop-types";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./about.css";
import SocialWidget from "@/components/Widget/SocialWidget";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Uses", url: "/uses" },
];

const socialLinks = [
  {
    text: "Follow me on Instagram",
    url: "https://www.instagram.com/angelisha.kitten/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png",
  },
  {
    text: "Follow me on LinkedIn",
    url: "https://www.linkedin.com/feed/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    text: "Follow me on GitHub",
    url: "https://github.com/Angeli13101",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    text: "Email me",
    url: "mailto:ywu581@ensign.edu",
    logo: "https://img.icons8.com/?size=64&id=6mtfF8X7F8eV&format=png",
  },
];

export default function About() {
  //Return HTML elements for About page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="aboutBody">
        <div className="aboutDescription">
          <h1 className="h1">I’m Angelina. I live in Utah, where I am studying to be a software engineer.</h1>
          <br />
          <p>
            Welcome to my portfolio, where technology meets passion and faith intertwines with innovation. As a
            dedicated software engineer and lifelong student, I am committed to pushing the boundaries of what is
            possible in the digital realm. With a relentless pursuit of knowledge and a fervent belief in the power of
            technology to positively impact our world, I embark on a journey of continual growth and exploration.
          </p>
          <br />
          <p>
            Within these virtual pages, you will find a showcase of my projects, each a testament to my skills,
            creativity, and unwavering dedication to excellence. From elegant code solutions to cutting-edge software
            applications, my work reflects both my technical proficiency and my relentless pursuit of excellence.
          </p>
          <br />
          <p>
            But beyond mere technical prowess, my portfolio is infused with a deeper purpose – a steadfast faith that
            guides my every endeavor. As a believer, I approach my work with integrity, humility, and a commitment to
            using my skills for the greater good. Whether it is developing tools to empower communities, creating
            solutions to tackle pressing societal challenges, or simply striving to make the world a better place, my
            faith serves as a compass, guiding me towards meaningful and impactful work.
          </p>
          <br />
          <p>
            So join me on this journey of innovation, learning, and faith as we navigate the ever-evolving landscape of
            technology together. Welcome to my portfolio – where software engineering meets studenthood, and belief
            fuels boundless possibility.
          </p>
          <br /><br />
        </div>

        <div className="aboutColumn">
          <div className="imageStyle">
            <img src="pic.png" alt="Profile" />
            <br />
          </div>

          <SocialWidget links={socialLinks} />
        </div>
      </div>

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
