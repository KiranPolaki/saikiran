import xzult1 from "@/public/xzult/xzult1.png";
import xzult2 from "@/public/xzult/xzult2.png";
import xzult3 from "@/public/xzult/xzult3.png";

import tfs1 from "@/public/tfs/tfs1.jpg";
import tfs2 from "@/public/tfs/tfs2.jpg";
import tfs3 from "@/public/tfs/tfs3.jpg";

import yantram from "@/public/yantram/yantram1.jpg";
import yantram2 from "@/public/yantram/yantam2.jpg";
import yantram3 from "@/public/yantram/yantram3.jpg";

import ngb1 from "@/public/ngb/ngb-1.jpg";
import ngb2 from "@/public/ngb/ngb-2.jpg";
import ngb3 from "@/public/ngb/ngb-3.jpg";

import gurucodes from "@/public/gurucodes/gurucodes1.png";
import gurucodes2 from "@/public/gurucodes/gurucodes2.png";

import three from "@/public/three.png";
import two from "@/public/two.png";
import one from "@/public/one.png";

export const projects = [
  {
    id: "tfs", // Changed from "tfs-case-study" to match slug
    name: "TFS - Toshika Financial Services",
    description:
      "A comprehensive NBFC loan management platform featuring multi-tiered agent tracking, automated referral systems, and end-to-end loan processing. Built for both mobile and web to streamline loan operations, agent performance monitoring, and customer acquisition through structured referral networks.",
    detailedDescription:
      "Developed a complete financial services ecosystem that digitizes the entire loan lifecycle from application to disbursement. The platform features a sophisticated agent hierarchy system with real-time performance tracking, automated commission calculations, and multi-level referral management. Implemented secure KYC verification, credit scoring integration, document management, and automated approval workflows while ensuring RBI compliance and data security standards. We focused on scalability and security, utilizing AWS infrastructure and robust authentication mechanisms to handle sensitive financial data and a growing user base of agents and customers. The mobile-first design for agents ensures ease of use in the field, while the comprehensive web admin panel provides powerful oversight and management capabilities.",
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
      "Offline data synchronization (for mobile)",
    ],
    source: "", // Add actual source if available
    type: "mobile", // "Mobile & Web" might be more accurate
    live: "https://play.google.com/store/apps/details?id=tech.codedale.tfsfinserv&hl=en_IN",
    start: "Feb 2024",
    end: "Ongoing",
    hassource: false, // Update if you have a public source
    islive: true,
    technology: [
      "React Native",
      "Next.js (Admin)",
      "PostgreSQL",
      "Redis",
      "AWS EC2",
      "JWT Auth",
      "Razorpay",
      "Twilio",
      "Firebase (FCM)",
      "TypeScript",
    ],
    ongoing: true,
    category: "Fintech Platform",
    images: [tfs1, tfs2, tfs3], // Use the imported image objects
    img: tfs1, // Main card image
    caseStudy: true,
    caseStudyLink: "/case-study/tfs",
    // You can add more fields specific to case studies here:
    // e.g., challenge: "The primary challenge was...", solution: "We developed a multi-platform solution..."
  },
  {
    id: "xzult", // Changed from "xzult-case-study"
    name: "Xzult Educations",
    description:
      "An overseas education partner who bridges the gap between academic excellence and career success, helping students thrive both at home and abroad. Created a comprehensive website to generate leads with integrated Razorpay payments, WhatsApp communication, and advanced SEO optimization using Next.js.",
    detailedDescription:
      "Built a performance-optimized website for Xzult Educations, a leading overseas education consultancy. The platform serves as a comprehensive lead generation system with seamless payment integration for consultation fees, automated WhatsApp communication for instant student support, and advanced SEO strategies including structured data, sitemap generation, and keyword optimization. This significantly improved organic traffic, search engine rankings, and conversion rates for new student inquiries. The site also features a dynamic blog and resources section managed through a simple interface.",
    features: [
      "Lead generation forms & CRM integration",
      "Razorpay payment integration",
      "WhatsApp API for direct messaging",
      "Advanced SEO (On-page, Technical)",
      "Mobile-responsive & accessible design",
      "Student inquiry management system",
      "Dynamic course & university catalog",
      "Consultation booking & scheduling",
      "Blog and content management",
    ],
    source: "",
    type: "Web",
    live: "https://xzult.com",
    hassource: false,
    islive: true,
    start: "Jun 2023",
    end: "Aug 2023",
    technology: [
      "Next.js",
      "Razorpay",
      "WhatsApp API",
      "SEO",
      "Tailwind CSS",
      "Vercel Analytics",
      "Google Analytics",
    ],
    ongoing: false,
    category: "Web Application",
    images: [xzult1, xzult2, xzult3],
    img: three, // Assuming 'three' is xzult1 or a representative image
    caseStudy: true,
    caseStudyLink: "/case-study/xzult",
  },
  {
    id: "yantram", // Changed from "yantram-case-study"
    name: "NVcore - Yantram Medtech",
    description:
      "A comprehensive medical device integration solution that bridges hardware and software through seamless Android connectivity. The project involved fixing critical background processing issues, establishing reliable Bluetooth Low Energy communication protocols, and implementing automated deployment pipelines.",
    detailedDescription:
      "Tackled complex challenges in medical device connectivity for Yantram Medtech's NVcore system. The existing Android application struggled with maintaining background operations for data syncing and often faced Bluetooth communication failures with proprietary medical hardware. My role involved re-architecting background services using Android WorkManager for reliability, implementing robust BLE communication protocols with comprehensive error handling and auto-reconnection logic. Additionally, I set up CI/CD pipelines using AWS Elastic Beanstalk and CodePipeline for streamlined, automated deployments, significantly reducing manual intervention and deployment errors.",
    features: [
      "Robust background service optimization (WorkManager)",
      "Stable Bluetooth Low Energy (BLE) integration",
      "Real-time data synchronization & buffering",
      "AWS CI/CD pipeline automation (Elastic Beanstalk)",
      "Adherence to medical device software compliance needs",
      "Error handling & diagnostics for connectivity",
      "Secure data transmission protocols",
    ],
    source: "",
    type: "mobile",
    live: "",
    start: "Jan 2024",
    end: "Ongoing",
    hassource: false,
    islive: false,
    technology: [
      "React Native",
      "Native Android (Java/Kotlin)",
      "Bluetooth LE",
      "WebRTC (for future features)",
      "AWS (EC2, EBS, CodePipeline)",
      "Metro Bundler",
      "SQLite",
    ],
    ongoing: true,
    category: "Mobile App / MedTech",
    images: [yantram, yantram2, yantram3],
    img: one, // Assuming 'one' is yantram or a representative image
    caseStudy: true,
    caseStudyLink: "/case-study/yantram",
  },
  {
    id: "ngb", // Changed from "ngb-case-study"
    name: "NGB Mobile Learning Platform",
    description:
      "A feature-rich mobile Learning Management System built for Nawin Golden Boy's educational platform. Enables seamless course delivery, live streaming, community engagement, and secure payment processing with advanced video content protection.",
    detailedDescription:
      "Developed a comprehensive mobile Learning Management System (LMS) for Nawin Golden Boy, catering to students preparing for competitive exams. The platform supports the entire student learning journey, from course discovery and enrollment to content consumption and community interaction. Key integrations include VdoCipher for DRM-protected video streaming to prevent piracy, real-time chat and discussion forums for community engagement, and a robust payment system using Razorpay, supporting various Indian payment methods. The app also features progress tracking, quizzes, and offline content download capabilities.",
    features: [
      "DRM Encrypted video streaming (VdoCipher)",
      "Live class & webinar integration",
      "Community forums & real-time chat",
      "Multi-payment gateway support (Razorpay)",
      "Student progress tracking & analytics",
      "Offline content download & access",
      "Push notifications for updates & reminders",
      "Quiz & assignment modules",
    ],
    source: "",
    type: "mobile",
    live: "", // Add Play Store/App Store link if available
    start: "Sep 2023",
    end: "Feb 2024",
    hassource: false,
    islive: false,
    technology: [
      "React Native",
      "Next.js (Backend API)",
      "VdoCipher",
      "NextAuth.js",
      "Razorpay",
      "Tailwind CSS (for web components)",
      "REST API",
      "Firebase (FCM)",
    ],
    ongoing: false,
    category: "Mobile LMS App",
    images: [ngb1, ngb3, ngb2],
    img: two, // Assuming 'two' is ngb1 or a representative image
    caseStudy: true,
    caseStudyLink: "/case-study/ngb",
  },
  {
    id: "gurucodes", // Changed from "gurucodes-case-study"
    name: "GuruCodes Academy",
    description:
      "A high-converting course landing page and learning platform that drives significant traffic and sales. Features modern design, seamless payment integration, and comprehensive analytics to optimize conversion rates.",
    detailedDescription:
      "Built a performance-optimized landing page and integrated learning environment for GuruCodes Academy's flagship DSA course. The platform consistently attracts over 100 daily organic visitors and achieves industry-leading conversion rates. Implemented A/B testing capabilities for headlines and CTAs, integrated advanced analytics (Google Analytics, Hotjar) for user behavior tracking, and created a streamlined, mobile-first checkout process using Razorpay. This resulted in over 300 course sales within the first quarter of launch. The design focuses on clarity, trust-building elements, and a compelling value proposition.",
    features: [
      "High-conversion landing page design",
      "A/B testing framework for optimization",
      "Advanced analytics & heatmaps (Hotjar)",
      "Secure payment processing (Razorpay)",
      "SEO optimization for organic traffic",
      "Mobile-responsive and fast-loading",
      "Testimonial and social proof sections",
      "Simple course access post-purchase",
    ],
    source: "",
    type: "Web",
    live: "https://academy.gurucodes.dev/problem-solving-and-dsa-in-cpp",
    hassource: false,
    islive: true,
    start: "Jun 2023",
    end: "Aug 2023",
    technology: [
      "Next.js",
      "Razorpay",
      "Magic UI (components)",
      "Tailwind CSS",
      "Google Analytics",
      "Hotjar",
      "SendGrid (Transactional Emails)",
    ],
    ongoing: false,
    category: "Web Application / EdTech",
    images: [gurucodes, gurucodes2], // Add more if available
    img: three, // Re-evaluate which image 'three' refers to, or use gurucodes directly
    caseStudy: true,
    caseStudyLink: "/case-study/gurucodes",
  },
];
