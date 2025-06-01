"use client";
import { useState } from "react";
import { Badge } from "../ui/badge";

function WorkExperience() {
  const [workExp, setWorkExp] = useState([
    {
      name: "Codedale",
      role: "Lead Foundational Engineer",
      start: "Oct, 2024",
      end: "present",
      description:
        "I've worked on everything from mobile apps to full-stack applications, and had the chance to lead a small team of three developers. One thing I'm particularly proud of is building an automated deployment system that tracks and monitors releases - it saved us tons of time and headaches. I turned the whole thing into a reusable template so future projects could benefit from the same automation without starting from scratch.",
      technologies: [
        "nextjs",
        "React native",
        "express",
        "cloudflare",
        "postgresql",
        "mongodb",
        "prisma",
        "auth",
        "graphql",
        "aws",
        "docker",
        "kubernetes",
        "azure",
        "jenkins",
        "ecs/ecr",
        "s3",
        "react",
      ],
      current: true,
    },
    {
      name: "Super 30",
      role: "Instructor",
      start: "Jan, 2025",
      end: "",
      description:
        "Taight full-stack development by diving deep into how things actually work under the hood. My students always tell me the same thing - I make the complex stuff click by explaining the internals in ways that just stick. Whether it's React's lifecycle or how Express handles requests, I break it down until those 'aha!' moments happen.",
      technologies: ["nextjs", "react", "javascript", "express", "cloudflare"],
      current: false,
    },
    {
      name: "Kroll",
      role: "Software Engineer",
      start: "Sep, 2024",
      end: "",
      description:
        "Implemented efficient multi-language release management, containerized deployments, and process automation, significantly improving release efficiency and reducing repetitive tasks using Azure DevOps, Docker, Kubernetes, AWS ECS/ECR, and Power Automate.",
      technologies: [
        "azure",
        "devops",
        "docker",
        "kubernetes",
        "aws",
        "ecs/ecr",
        "s3",
        "powerautomate",
        "react",
      ],
      current: false,
    },
    {
      name: "Freelance & Opensource",
      role: "Full Stack Developer",
      start: "Mar, 2022",
      end: "present",
      description:
        "Developed landing pages for Ed-tech, Restaurants, and Startups, integrating payments and analytics, achieving over 1,000+ site views each. Enhanced user experience and functionality in projects like an Interview Management application and a CS e-learning platform.",
      technologies: [
        "nextjs",
        "react",
        "javascript",
        "express",
        "cloudflare",
        "postgresql",
        "mongodb",
        "prisma",
        "auth",
        "graphql",
      ],
      current: true,
    },
    {
      name: "Kroll",
      role: "Servicenow Intern",
      start: "Jan, 2023",
      end: "Aug, 2023",
      description:
        "Contributed to real-time CMDB projects, delivering solutions for over 10,000 records. Enhanced user experience by implementing functional client support pages with scripts.",
      technologies: ["typescript", "clientscript", "businessscript", "cms"],
      current: false,
    },
  ]);
  return (
    <div>
      {workExp.map((work, i) => (
        <div className="relative pl-8 sm:pl-32 py-4 group" key={i}>
          <div className=" text-gray-400 text-md font-semibold tracking-wider p-0 selection:text-purple-900">
            {work.name.toUpperCase()}
          </div>

          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {work.start}
            </time>
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 flex gap-2">
              {work.role}
              {work.current ? (
                <div className="text-xs font-normal flex items-center">
                  <div className=" px-1 rounded-lg bg-emerald-100 text-emerald-600">
                    current
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="text-slate-500 dark:text-slate-400 text-md">
            {work.description}
          </div>
          <div className="gap-1 flex w-full flex-wrap mt-2">
            {work.technologies.map((tech, i) => {
              return (
                <Badge
                  key={i}
                  variant="outline"
                  className="cursor-pointer hover:bg-purple-400 hover:text-white"
                >
                  {tech}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
