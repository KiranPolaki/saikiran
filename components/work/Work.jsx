"use client";
import Image from "next/image";
import dummy from "../../public/dummywork.png";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import {
  GitHubLogoIcon,
  GlobeIcon,
  StackIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { isMobile as detectMobile } from "react-device-detect";
import { projects as allProjects } from "@/app/data/projectsData";

function Work() {
  const [projects, setProjects] = useState(allProjects);

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    setIsMobile(detectMobile);
    setMounted(true);
  }, []);

  const getMobileAppDisplayImages = (projectImages) => {
    const displayImages = [...projectImages];
    while (displayImages.length < 3 && displayImages.length > 0) {
      displayImages.push(displayImages[0]);
    }
    if (displayImages.length === 0) {
      return [dummy, dummy, dummy];
    }
    return displayImages.slice(0, 3);
  };

  if (!mounted) return null;

  return (
    <div className="w-full">
      <div className="p-4 flex gap-6 flex-wrap justify-center w-full">
        {!isMobile ? (
          <>
            {projects.map((project, i) => (
              <div
                className="group border border-gray-200 dark:border-gray-700 rounded-3xl cursor-pointer hover:shadow-lg transition-all duration-300 ease-out bg-white dark:bg-zinc-900 overflow-hidden"
                key={i}
              >
                <div className="relative bottom-6 bg-gradient-to-br dark:to-zinc-700 p-6 z-20 -mb-8">
                  <div className="relative h-[140px] sm:h-[140px]">
                    {project.type === "mobile" ? (
                      <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 flex justify-center items-start space-x-[-28px] sm:space-x-[-35px] w-full px-2">
                        {getMobileAppDisplayImages(project.images).map(
                          (imgSrc, idx) => (
                            <div
                              key={idx}
                              className={`relative transition-all duration-300 ease-out group-hover:translate-y-[-8px]
                              ${
                                idx === 0
                                  ? "transform -rotate-[8deg] translate-y-[6px] group-hover:-rotate-[10deg]"
                                  : ""
                              }
                              ${
                                idx === 1
                                  ? "z-10 scale-105 group-hover:scale-[1.12]"
                                  : "scale-100"
                              }
                              ${
                                idx === 2
                                  ? "transform rotate-[8deg] translate-y-[6px] group-hover:rotate-[10deg]"
                                  : ""
                              }
                            `}
                            >
                              <Image
                                src={imgSrc}
                                alt={`${project.name} screenshot ${idx + 1}`}
                                width={90}
                                height={180}
                                className="rounded-lg sm:rounded-xl object-cover shadow-lg border-2 sm:border-[3px] border-white dark:border-slate-600 bg-slate-200 dark:bg-slate-500"
                                placeholder="blur"
                                blurDataURL={
                                  imgSrc.blurDataURL ||
                                  `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
                                }
                              />
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 flex justify-center items-start space-x-[-28px] sm:space-x-[-35px] w-full px-2">
                        <div
                          className={`relative transition-all duration-300 ease-out group-hover:translate-y-[-8px]
                              transform -rotate-[8deg] translate-y-[6px] group-hover:-rotate-[10deg] scale-90`}
                        >
                          <Image
                            src={project.images[0]}
                            alt={`${project.name} screenshot`}
                            width={300}
                            height={180}
                            className="rounded-lg sm:rounded-xl object-cover shadow-lg border-2 sm:border-[3px] border-white dark:border-slate-600 bg-slate-200 dark:bg-slate-500"
                            placeholder="blur"
                            blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                          />
                        </div>
                        <div
                          className={`relative transition-all duration-300 ease-out group-hover:translate-y-[-8px]
                              z-10 scale-110 group-hover:scale-[1.12]`}
                        >
                          <Image
                            src={project.images[1]}
                            alt={`${project.name} screenshot`}
                            width={300}
                            height={180}
                            className="rounded-lg sm:rounded-xl object-cover shadow-lg border-2 sm:border-[3px] border-white dark:border-slate-600 bg-slate-200 dark:bg-slate-500"
                            placeholder="blur"
                            blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className=" relative bg-white dark:bg-black p-5 space-y-4 z-40">
                  {/* Title and Status */}
                  <div className="flex gap-2 items-center z-40">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                    {project.ongoing && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Live
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Timeline */}
                  {project.start && (
                    <div className="text-xs text-gray-500 dark:text-white-400 flex items-center gap-1">
                      <span>{project.start}</span>
                      <span>→</span>
                      <span>{project.end}</span>
                    </div>
                  )}

                  {/* Description */}
                  <div className="text-sm text-gray-600 dark:text-white leading-relaxed h-22 overflow-hidden">
                    {project.description}
                  </div>

                  {/* Key Features */}
                  {project.features && (
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Key Features
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                            +{project.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      Tech Stack
                    </span>
                    <div className="flex items-center gap-1 flex-wrap">
                      {project.technology.map((tech, idx) => (
                        <Badge
                          variant="outline"
                          key={idx}
                          className="hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-200 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {project.caseStudy && project.caseStudyLink && (
                      <Link href={project.caseStudyLink} className="flex-1">
                        <Badge className="flex gap-2 w-full bg-purple-100 text-purple-700 py-2 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800 justify-center transition-all duration-200">
                          <ReaderIcon className="w-4 h-4" />
                          Case Study
                        </Badge>
                      </Link>
                    )}
                    {project.hassource && project.source && (
                      <Link href={project.source} className="flex-1">
                        <Badge className="flex gap-2 w-full bg-gray-100 text-gray-700 py-2 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 justify-center transition-all duration-200">
                          <GitHubLogoIcon className="w-4 h-4" />
                          Source
                        </Badge>
                      </Link>
                    )}
                    {project.islive && project.live && (
                      <Link href={project.live} className="flex-1">
                        <Badge className="flex gap-2 w-full bg-emerald-100 py-2 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800 justify-center transition-all duration-200">
                          <GlobeIcon className="w-4 h-4" />
                          Live Demo
                        </Badge>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          // Mobile Layout
          <div className="flex gap-4 flex-col w-full">
            {projects.map((project, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-900"
              >
                <div className="p-4">
                  <div className="flex gap-4 items-start">
                    {/* Mobile Image */}
                    {/* <div className="flex-shrink-0 relative">
                      <Image
                        src={project.images[currentImageIndex[i] || 0]}
                        width={project.category === "Mobile App" ? 60 : 80}
                        height={project.category === "Mobile App" ? 120 : 60}
                        placeholder="blur"
                        alt={`${project.name} screenshot`}
                        className={`${
                          project.category === "Mobile App"
                            ? "rounded-lg border border-gray-300 dark:border-gray-600"
                            : "rounded-md"
                        } object-cover`}
                      />
                      {project.images.length > 1 && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                          {project.images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-1 h-1 rounded-full ${
                                (currentImageIndex[i] || 0) === idx
                                  ? "bg-purple-500"
                                  : "bg-gray-300 dark:bg-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div> */}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white">
                            {project.name}
                          </h3>
                          <Badge className="mt-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        {project.ongoing && (
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-600 dark:text-green-400">
                              Live
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                        {project.description.slice(0, 150)}...
                      </div>

                      {/* Mobile Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technology.slice(0, 4).map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technology.length > 4 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            +{project.technology.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Mobile Action Buttons */}
                      <div className="flex gap-2 flex-wrap">
                        {project.caseStudy && project.caseStudyLink && (
                          <Link href={project.caseStudyLink}>
                            <Badge className="flex gap-1 bg-purple-100 text-purple-700 py-1 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 text-xs">
                              <ReaderIcon className="w-3 h-3" />
                              Case Study
                            </Badge>
                          </Link>
                        )}
                        {project.hassource && project.source && (
                          <Link href={project.source}>
                            <Badge className="flex gap-1 bg-gray-100 text-gray-700 py-1 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-xs">
                              <GitHubLogoIcon className="w-3 h-3" />
                              Source
                            </Badge>
                          </Link>
                        )}
                        {project.islive && project.live && (
                          <Link href={project.live}>
                            <Badge className="flex gap-1 bg-emerald-100 py-1 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 text-xs">
                              <GlobeIcon className="w-3 h-3" />
                              Live
                            </Badge>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
