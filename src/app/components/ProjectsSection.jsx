"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AskAI",
    description: "AskAI (generates:- text and images on a single prompt)",
    image: "/images/projects/8.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/tanishkasharmaaa/AskAI.git",
    previewUrl: "https://ask-ai-vgt6.vercel.app/",
  },
  {
    id: 2,
    title: "Nord Storm Rack",
    description: "Nord Storm Rack Clone",
    image: "/images/projects/1.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/tanishkasharmaaa/Nord_Storm",
    previewUrl: "https://nord-storm.vercel.app/",
  },
  {
    id: 3,
    title: "Myntra",
    description: "Myntra Clone ",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tanishkasharmaaa/Myntra",
    previewUrl: "https://myntra-f8tp.vercel.app/",
  },
  {
    id: 4,
    title: "Urban Company Clone",
    description: "Urban Company Replica ",
    image: "/images/projects/2.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/tanishkasharmaaa/Urban_Company",
    previewUrl: "https://urban-company-liart.vercel.app/",
  },
    {
    id: 5,
    title: "Kanban-Go",
    description: "Task Manager",
    image: "/images/projects/9.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/tanishkasharmaaa/Kanban-Board",
    previewUrl: "https://kanbango.vercel.app",
  },
  {
    id: 6,
    title: "KFC Clone",
    description: "KFC Replica",
    image: "/images/projects/3.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/tanishkasharmaaa/KFC/tree/main/project%201",
    previewUrl: "https://inspiring-gecko-f9852c.netlify.app/",
  },
  {
    id: 7,
    title: "Tanishka.dev",
    description: "Personal Portfolio project",
    image: "/images/projects/6.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/tanishkasharmaaa",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
