import React from "react";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import UsesSection from "@/components/UsesCard/UsesSection.jsx";
import "./uses.css";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

const items = [
  {
    groupName: 'Workstation',
    items: [
      {
        title: 'Lenovo laptop, 64GB RAM (2022)',
        description:
          'I was using an Lenovo laptop to this and the differente projects. It was a great laptop, but I needed more power for my work. So I upgraded to a new Lenovo laptop with 64GB of RAM. It’s been great so far.',
      },
      {
        "title": "iPad Pro 12.9\", M1, 16GB RAM (2021)",
        "description": "I added an iPad Pro 12.9\" with the M1 chip and 16GB of RAM to my arsenal in 2021. Its portability and powerful hardware have made it an indispensable tool for both productivity tasks and creative endeavors."
      },

      {
        "title": "Apple Pencil (2nd Generation) (2021)",
        "description": "I added an Apple Pencil (2nd Generation) to my iPad Pro setup in 2021. It’s been great for drawing and has improved my creative workflow."
      },
    ],
  },
  {
    groupName: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        description:
          'I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.',
      },

    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Figma',
        description:
          'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        "title": "Procreate, Digital Art App (2020)",
        "description": "I started using Procreate, a powerful digital art app, in 2020 for my creative projects. Its intuitive interface, vast array of brushes, and advanced features have made it my go-to tool for digital illustration and painting."
      },

      {
        "title": "Adobe Photoshop, Image Editing Software (2016)",
        "description": "Since 2017, I've relied on Adobe Photoshop for all my image editing needs. From retouching photos to creating intricate digital compositions, its extensive features and powerful tools have allowed me to bring my creative visions to life with precision and finesse."
      }
    ],
  },
];

export default function Uses() {
  //Return HTML elements for Project page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="projectBody">
          <h1 className="h1">Software I use, gadgets I love, and other things I recommend.</h1>
          <br></br>
          <p>
          Explore the tools and technologies that power my digital world in the 'Software I Use, Gadgets I Love, and Other Things I Recommend' section. From essential software applications that enhance productivity to innovative gadgets that simplify daily tasks, discover my curated selection of recommendations designed to elevate your digital experience.
          </p>
          <br></br>
          </div>
        <div>
          <UsesSection items={items} />
        </div>

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
