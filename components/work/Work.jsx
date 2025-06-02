"use client";
import Image from "next/image";
import dummy from "../../public/dummywork.png";
import one from "../../public/one.png";
import two from "../../public/two.png";
import three from "../../public/three.png";
import four from "../../public/four.png";
import tfs2 from "../../public/tfs2.jpg";
import tfs3 from "../../public/tfs3.jpg";
import tfs1 from "../../public/tfs1.jpg";
import tfs5 from "../../public/tfs5.jpg";
import tfs6 from "../../public/tfs6.jpg";
import ngb1 from "../../public/ngb-1.jpg";
import ngb2 from "../../public/ngb-2.jpg";
import ngb3 from "../../public/ngb-3.jpg";
import yantram from "../../public/yantram1.jpg";
import yantram2 from "../../public/yantam2.jpg";
import yantram3 from "../../public/yantram3.jpg";
import xzult1 from "../../public/xzult/xzult1.png";
import xzult2 from "../../public/xzult/xzult2.png";
import xzult3 from "../../public/xzult/xzult3.png";
import gurucodes from "../../public/gurucodes/gurucodes1.png";
import gurucodes2 from "../../public/gurucodes/gurucodes2.png";
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

function Work() {
  const [projects, setProjects] = useState([
    {
      id: "tfs-case-study",
      name: "TFS - Toshika Financial Services",
      description:
        "A comprehensive NBFC loan management platform featuring multi-tiered agent tracking, automated referral systems, and end-to-end loan processing. Built for both mobile and web to streamline loan operations, agent performance monitoring, and customer acquisition through structured referral networks.",
      detailedDescription:
        "Developed a complete financial services ecosystem that digitizes the entire loan lifecycle from application to disbursement. The platform features a sophisticated agent hierarchy system with real-time performance tracking, automated commission calculations, and multi-level referral management. Implemented secure KYC verification, credit scoring integration, document management, and automated approval workflows while ensuring RBI compliance and data security standards.",
      features: [
        "Multi-level agent hierarchy & tracking",
        "Automated referral commission system",
        "Real-time loan application processing",
        "KYC verification & document management",
        "Credit scoring & risk assessment",
        "Agent performance analytics dashboard",
        "Automated approval workflows",
        "Commission tracking & payouts",
        "Customer relationship management",
        "Compliance reporting & audit trails",
        "Push notifications & SMS alerts",
        "Offline data synchronization",
      ],
      source: "",
      type: "mobile",
      live: "https://play.google.com/store/apps/details?id=tech.codedale.tfsfinserv&hl=en_IN",
      start: "Feb 2024",
      end: "Ongoing",
      hassource: true,
      islive: true,
      technology: [
        "react-native",
        "nextjs",
        "postgresql",
        "redis",
        "aws-ec2",
        "jwt-auth",
        "razorpay",
        "twilio",
        "firebase",
        "typescript",
      ],
      ongoing: true,
      category: "Fintech Platform",
      images: [tfs2, tfs3, tfs1],
      img: tfs1,
      caseStudy: true,
      caseStudyLink: "/case-study/tfs",
    },
    {
      id: "xzult-case-study",
      name: "Xzult Educations",
      description:
        "An overseas education partner who bridges the gap between academic excellence and career success, helping students thrive both at home and abroad. Created a comprehensive website to generate leads with integrated Razorpay payments, WhatsApp communication, and advanced SEO optimization using Next.js.",
      detailedDescription:
        "Built a performance-optimized website for Xzult Educations, a leading overseas education consultancy. The platform serves as a comprehensive lead generation system with seamless payment integration, automated WhatsApp communication for instant student support, and advanced SEO strategies that significantly improved organic traffic and conversion rates.",
      features: [
        "Lead generation optimization",
        "Razorpay payment integration",
        "WhatsApp API integration",
        "Advanced SEO implementation",
        "Mobile-responsive design",
        "Student inquiry management",
        "Course catalog system",
        "Consultation booking system",
      ],
      source: "",
      type: "Web",
      live: "https://xzult.com",
      hassource: true,
      islive: true,
      start: "Jun 2023",
      end: "Aug 2023",
      technology: [
        "nextjs",
        "razorpay",
        "whatsapp-api",
        "seo",
        "tailwind",
        "analytics",
      ],
      ongoing: false,
      category: "Web Application",
      images: [xzult1, xzult2, xzult3],
      img: three,
      caseStudy: true,
      caseStudyLink: "/case-study/xzult",
    },
    {
      id: "yantram-case-study",
      name: "NVcore - Yantram Medtech",
      description:
        "A comprehensive medical device integration solution that bridges hardware and software through seamless Android connectivity. The project involved fixing critical background processing issues, establishing reliable Bluetooth Low Energy communication protocols, and implementing automated deployment pipelines.",
      detailedDescription:
        "Tackled complex challenges in medical device connectivity where the Android application struggled with background operations and Bluetooth communication failures. Implemented robust background services using Android WorkManager, established stable BLE communication protocols with proper error handling and reconnection logic, and set up CI/CD pipelines using AWS Elastic Beanstalk for seamless deployments.",
      features: [
        "Background service optimization",
        "Bluetooth Low Energy integration",
        "Real-time data synchronization",
        "AWS deployment automation",
        "Medical device compliance",
      ],
      source: "",
      type: "mobile",
      live: "",
      start: "Jan 2024",
      end: "Ongoing",
      hassource: true,
      islive: false,
      technology: [
        "react-native",
        "android",
        "bluetooth-le",
        "webrtc",
        "aws-ebs",
        "metro",
      ],
      ongoing: true,
      category: "Mobile App",
      images: [yantram, yantram2, yantram3],
      img: one,
      caseStudy: true,
      caseStudyLink: "/case-study/yantram",
    },
    {
      id: "ngb-case-study",
      name: "NGB Mobile Learning Platform",
      description:
        "A feature-rich mobile Learning Management System built for Nawin Golden Boy's educational platform. Enables seamless course delivery, live streaming, community engagement, and secure payment processing with advanced video content protection.",
      detailedDescription:
        "Developed a comprehensive mobile LMS that handles the complete student learning journey from course enrollment to completion. Integrated advanced video encryption using VdoCipher to protect premium content, implemented real-time chat and community features, and created a robust payment system supporting multiple Indian payment methods through Razorpay.",
      features: [
        "Encrypted video streaming",
        "Live class integration",
        "Community forums & chat",
        "Multi-payment gateway support",
        "Progress tracking & analytics",
        "Offline content download",
      ],
      source: "",
      type: "mobile",
      live: "",
      start: "Sep 2023",
      end: "Feb 2024",
      hassource: true,
      islive: false,
      technology: [
        "react-native",
        "nextjs",
        "vdocipher",
        "nextauth",
        "razorpay",
        "tailwind",
        "rest-api",
      ],
      ongoing: false,
      category: "Mobile App",
      images: [ngb1, ngb3, ngb2],
      img: two,
      caseStudy: true,
      caseStudyLink: "/case-study/ngb",
    },
    {
      id: "gurucodes-case-study",
      name: "GuruCodes Academy",
      description:
        "A high-converting course landing page and learning platform that drives significant traffic and sales. Features modern design, seamless payment integration, and comprehensive analytics to optimize conversion rates.",
      detailedDescription:
        "Built a performance-optimized landing page that consistently attracts 100+ daily visitors and converts at industry-leading rates. Implemented A/B testing capabilities, integrated advanced analytics for user behavior tracking, and created a streamlined checkout process that resulted in 300+ course sales within the first quarter.",
      features: [
        "High-conversion landing design",
        "A/B testing framework",
        "Advanced analytics integration",
        "Secure payment processing",
        "SEO optimization",
        "Mobile-responsive design",
      ],
      source: "",
      type: "Web",
      live: "https://academy.gurucodes.dev/problem-solving-and-dsa-in-cpp",
      hassource: true,
      islive: true,
      start: "Jun 2023",
      end: "Aug 2023",
      technology: ["nextjs", "razorpay", "magicui", "tailwind", "analytics"],
      ongoing: false,
      category: "Web Application",
      images: [gurucodes, gurucodes2],
      img: three,
      caseStudy: true,
      caseStudyLink: "/case-study/gurucodes",
    },
  ]);

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
                    <div className="flex-shrink-0 relative">
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
                    </div>

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
