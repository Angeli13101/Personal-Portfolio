"use client";
import React from "react";
import WorkWidget from "@/components/Widget/WorkWidget.jsx";
import SkillsWidget from "@/components/Widget/SkillsWidget.jsx";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import ArticleCard from "@/components/Article/Articlecards.jsx";
import ProfileSection from "/workspaces/cs220-portfolio-group-2/src/components/Introduction/Introduction.jsx";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import "./page.css";

//import ThemeSwitcher from "@/components/Theme/ThemeSwitcher.jsx";

// Experiences that go into the Work Widget
//// Logo images are stored in the public folder.
//// If you need to add your own logos, you need to upload them into the public folder.

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

const experiences = [
  {
    logo: "/R.png",
    organization: "BYU",
    jobTitle: "Custodian",
    startYear: 2021,
    endYear: 2023,
  },
  {
    logo: "/L.png",
    organization: "IP",
    jobTitle: "Merchendiser",
    startYear: 2021,
    endYear: 2020,
  },

];

//Article Cards

const articles = [
  {
    date: "Apr 1, 2024",
    title: "Here is my favorite hobby!",
    content:
      "Welcome! I'm a software engineer by day and an avid hobbyist artist by night, finding joy and relaxation in the world of drawing. Join me as I blend technical precision with artistic expression in my diverse portfolio.",
    link: "https://www.nga.gov/",
  },
  {
    date: "Apr 1, 2024",
    title: "Outdoor activity is the best way to feel better and do not be infron of a computer all the time!",
    content:
      "In addition to my passion for software engineering, I thrive on outdoor adventures like hiking, where I find solace and rejuvenation amidst nature's splendor. Exploring scenic trails and embracing the great outdoors is not just a pastime, but a source of inspiration and balance in my life.",
    link: "https://austinadventures.com/destinations/north-america/trips/bryce-canyon-and-zion-family-vacation/?utm_campaign=&utm_source=bing&utm_term=bryce%20canyon%20family&utm_medium=ppc&hsa_cam=662638090&hsa_tgt=kwd-82739371885789:loc-190&hsa_acc=1276977698&hsa_mt=b&hsa_grp=1323814348095466&hsa_net=adwords&hsa_src=o&hsa_kw=bryce%20canyon%20family&hsa_ad=&hsa_ver=3&msclkid=e693b571ab9c192b5a91d369edaf2924",
  },
  {
    date: " Apr 1, 2024",
    title: "Here is time for religion",
    content:
      "Beyond my professional and recreational pursuits, my faith in Jesus Christ anchors my journey, shaping my values and guiding my actions. His teachings inspire me to approach life with compassion, humility, and a desire to make a positive difference in the world around me.",
    link: "https://www.churchofjesuschrist.org/?lang=eng",
  },
];

// Skills that go into the Skills Widget
const skills = [
  { name: "HTML", proficiency: 45, icon: "html5.png" },
  { name: "CSS", proficiency: 38, icon: "css3.png" },
  { name: "JavaScript", proficiency: 48, icon: "javascript.png" },
];

export default function Home() {
  //Return HTML elements for Home page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>
      <div className="profile-section">
        <ProfileSection />
      </div>

      <div className="content">
        <div className={"articles"}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
        {/* <div className="description"></div> */}
        <div className="digits">
          <WorkWidget title={"Work"} content={"My work experience."} experiences={experiences} />
          <SkillsWidget title={"Skills"} content={"My skills."} skills={skills} />
          <>
            <SignupWidget
              title={"Stay up to date"}
              content={"Get notified when I publish something new, and unsubscribe at any time."}
            />
          </>
        </div>
      </div>
      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
