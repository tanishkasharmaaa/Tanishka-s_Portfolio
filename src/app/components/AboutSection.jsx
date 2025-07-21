"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
     <ul className="list-disc pl-2">
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript (ES6+)</li>
  <li>React.js</li>
  <li>Chakra UI</li>
  <li>RESTful APIs</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>JWT Authentication</li>
  <li>Google OAuth 2.0</li>
  <li>Cloudinary Integration</li>
  <li>Google Gemini API (AI Integration)</li>
  <li>Git & GitHub</li>
</ul>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Completed Frontend Development Training at Prepleaf by Masai</li>
        <li>Attended Prepleaf Program (Bangalore) focused on real-world web development skills</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
   <li>
    <a
      href="https://drive.google.com/file/d/1s1OFBRfDhQ8ifNTcaOa4x6P0M9fPX_ST/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Certificate of Participation (from Prepleaf by Masai)
    </a>
  </li>
  
  <li>
    <a
      href="https://drive.google.com/file/d/1LYr5pkuJYuVnBAwO6xkhyJP3Y0TcG7g3/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Certificate of Appreciation (from Prepleaf by Masai)
    </a>
  </li>
</ul>

    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const activeTab = TAB_DATA.find((t) => t.id === tab) || TAB_DATA[0];

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About image showcasing the developer"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a passionate Full Stack Web Developer with hands-on experience in building responsive, real-world web applications using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js).

On the frontend, I craft interactive and mobile-friendly UIs using <strong>React</strong> and <strong>Chakra UI</strong>, with solid knowledge of <strong>HTML5, CSS3, and JavaScript (ES6+)</strong>.

On the backend, I build secure <strong>RESTful APIs</strong> using <strong>Node.js</strong> and <strong>Express.js</strong>, with database management via <strong>MongoDB</strong> and <strong>Mongoose</strong>.

I also work on projects that integrate <strong>AI APIs</strong>. My project <strong>AskAI</strong> is powered by <strong>Google Gemini API</strong> and provides real-time intelligent responses, secured with <strong>JWT authentication</strong> and <strong>Google OAuth 2.0</strong>. I also use <strong>Cloudinary</strong> for media upload and management.

I love solving real-world problems through code and continuously push myself to learn and build better.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map(({ id, title }) => (
              <TabButton
                key={id}
                selectTab={() => handleTabChange(id)}
                active={tab === id}
              >
                {title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">{activeTab.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
