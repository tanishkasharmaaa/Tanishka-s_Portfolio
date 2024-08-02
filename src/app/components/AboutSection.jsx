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
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development from Prepleaf by Masai</li>
        <li>Prepleaf by Masai (Bangalore)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate of Appreciation (from Prepleaf by Masai)</li>
        <li>Internship Completion Certificate from CodSoft</li>
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
            Hello! I'm a passionate Frontend Developer with expertise in
            crafting dynamic and responsive web applications. Proficient in
            HTML, CSS, and JavaScript, I specialize in building user-friendly
            interfaces. My skill set includes React and Redux for state
            management, allowing me to create seamless and interactive user
            experiences. Additionally, I utilize Chakra UI to design visually
            appealing and accessible components. With a keen eye for detail and
            a commitment to clean code, I aim to deliver high-quality web
            solutions. I thrive in collaborative environments and continuously
            seek to enhance my skills and stay updated with the latest industry
            trends.
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
          <div className="mt-8">
            {activeTab.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
