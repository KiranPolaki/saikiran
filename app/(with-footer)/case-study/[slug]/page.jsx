"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projectsData";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeftIcon,
  GitHubLogoIcon,
  GlobeIcon,
  CalendarIcon,
  CheckCircledIcon,
  RocketIcon,
  LightBulbIcon, // For "The Challenge"
  BarChartIcon, // For "Results/Impact" or "Key Metrics"
  Link2Icon, // For general links
  Share1Icon, // For "Live Demo" or "Source" section header
  InfoCircledIcon, // For Project Overview
} from "@radix-ui/react-icons";
import { notFound } from "next/navigation"; // For 404

// Helper to get project data
const getProjectBySlug = (slug) => {
  return projects.find((p) => p.id === slug);
};

export default function CaseStudyPage({ params }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound(); // Triggers the not-found.js page or Next.js default 404
  }

  // Find current project index for Next/Prev navigation
  const currentIndex = projects.findIndex((p) => p.id === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const heroImage =
    project.images && project.images.length > 0 ? project.images[0] : null;
  const galleryImages =
    project.images && project.images.length > 1
      ? project.images.slice(0)
      : heroImage
      ? [heroImage]
      : [];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-50 ">
      <main className="container max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back Navigation */}
        <div className="mb-8 md:mb-12">
          <Link
            href="/#work" // Assuming #work is the ID of the work section on your homepage/portfolio page
            className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline group print:hidden"
          >
            <ChevronLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to All Projects
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-10 md:mb-16">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-3 text-xs sm:text-sm py-1 px-3 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30"
            >
              {project.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight text-slate-800 dark:text-slate-100">
              {project.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {project.description} {/* Short description */}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {project.start && project.end && (
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4" />
                <span>
                  {project.start} – {project.end}
                </span>
                {project.ongoing && (
                  <span className="text-green-500">(Ongoing)</span>
                )}
              </div>
            )}
            {(project.islive && project.live) ||
            (project.hassource && project.source) ? (
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 hidden sm:block"></div>
            ) : null}
            {project.islive && project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                <GlobeIcon className="w-4 h-4" />
                <span>View Live</span>
              </Link>
            )}
            {project.hassource && project.source && (
              <Link
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                <span>View Source</span>
              </Link>
            )}
          </div>
        </header>

        {galleryImages.length > 0 && (
          <section className="">
            <p className="text-2xl sm:text-3xl font-semibold mb-6 md:mb-8 text-center text-gray-600  dark:text-white-100 z-20">
              Visual Showcase
            </p>
            {project.type === "Web" ? (
              <div>
                <div className="">
                  <div className="rounded-lg overflow-hidden shadow-lg group border border-slate-200 dark:border-zinc-800  relative h-[330px] w-full">
                    <Image
                      src={project.images[0]}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {galleryImages.map((imgSrc, index) => (
                  <>
                    {index != 0 && (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-lg group border border-slate-200 dark:border-zinc-800  relative h-[700px] w-full"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${project.name} screenshot ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          placeholder="blur"
                          blurDataURL={
                            typeof imgSrc === "object" && imgSrc.blurDataURL
                              ? imgSrc.blurDataURL
                              : `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
                          }
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Hero Image */}
        {/* {heroImage && (
          <div className="mb-10 md:mb-16 rounded-xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-purple-500/10 border border-slate-200 dark:border-zinc-800">
            <Image
              src={heroImage}
              alt={`${project.name} primary visual`}
              width={1200} // Provide appropriate aspect ratio
              height={675}
              className="w-full h-auto object-cover"
              priority
              placeholder="blur"
              blurDataURL={
                typeof heroImage === "object" && heroImage.blurDataURL
                  ? heroImage.blurDataURL
                  : `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
              }
            />
          </div>
        )} */}

        {/* Main Content Area: Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mt-12">
          {/* Left/Main Column */}
          <div className="lg:col-span-8 space-y-10 md:space-y-12">
            <Section icon={<InfoCircledIcon />} title="Project Overview">
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base leading-relaxed space-y-4">
                <p>{project.detailedDescription}</p>
                {/* You can add more structured content here if available in project data */}
                {/* e.g., project.challenge, project.solution */}
              </div>
            </Section>

            {project.features && project.features.length > 0 && (
              <Section
                icon={<CheckCircledIcon />}
                title="Key Features & Functionality"
              >
                <ul className="space-y-3 text-base">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircledIcon className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Optional: Add sections for "The Challenge" or "My Role" if data exists */}
            {/*
            {project.challenge && (
              <Section icon={<LightBulbIcon />} title="The Challenge">
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                  <p>{project.challenge}</p>
                </div>
              </Section>
            )}
            */}
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 self-start">
            <SectionCard icon={<RocketIcon />} title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm px-3 py-1 hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-700 dark:hover:text-purple-100 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </SectionCard>

            {/* {(project.live || project.source) && (
              <SectionCard icon={<Link2Icon />} title="Project Links">
                <div className="space-y-3">
                  {project.islive && project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-medium group"
                    >
                      <GlobeIcon className="w-5 h-5" />
                      <span>View Live Project</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  )}
                  {project.hassource && project.source && (
                    <Link
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline font-medium group"
                    >
                      <GitHubLogoIcon className="w-5 h-5" />
                      <span>View Source Code</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </SectionCard>
            )} */}
          </aside>
        </div>

        {/* Next/Previous Project Navigation */}
        {(prevProject || nextProject) && (
          <nav className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-slate-200 dark:border-zinc-700 flex flex-col sm:flex-row justify-between items-center gap-6 print:hidden">
            {prevProject ? (
              <Link
                href={`/case-study/${prevProject.id}`}
                className="group text-left"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Previous Project
                </p>
                <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-2">
                  <ChevronLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  {prevProject.name}
                </h4>
              </Link>
            ) : (
              <div />
            )}{" "}
            {/* Empty div for spacing if no prev project */}
            {nextProject ? (
              <Link
                href={`/case-study/${nextProject.id}`}
                className="group text-right"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Next Project
                </p>
                <h4 className="text-lg font-medium text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-2 justify-end">
                  {nextProject.name}
                  <ChevronLeftIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 transform rotate-180" />
                </h4>
              </Link>
            ) : (
              <div />
            )}{" "}
            {/* Empty div for spacing if no next project */}
          </nav>
        )}
      </main>

      {/* Optional Footer - if you have a global one, it might be in layout.jsx */}
      {/* <footer className="text-center py-8 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer> */}
    </div>
  );
}

// Helper component for section styling
function Section({ icon, title, children }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-purple-500 dark:text-purple-400">
          {icon &&
            React.cloneElement(icon, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
        </span>
        <p className="text-lg sm:text-lg font-bold mb-3 tracking-tight text-slate-800 dark:text-slate-100">
          {title}
        </p>
      </div>
      {children}
    </section>
  );
}

// Helper component for sidebar card styling
function SectionCard({ icon, title, children }) {
  return (
    <section className="p-5 sm:p-6 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-purple-500 dark:text-purple-400">
          {icon &&
            React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
        </span>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}
