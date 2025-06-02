"use client";
import DarkLightMode from "@/components/header/DarkLightMode";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setSidebarOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResise = () => {
      if (window.innerWidth > 1023) {
        setSidebarOpen(false);
      }
      window.addEventListener("resize", handleResise);
      return () => {
        window.removeEventListener("resize", handleResise);
      };
    };
  }, []);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const handleScrollOutSide = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };
  useEffect(() => {
    if (sidebarOpen) {
      window.addEventListener("scroll", handleScrollOutSide);
    } else {
      window.removeEventListener("scroll", handleScrollOutSide);
    }

    return () => {
      window.removeEventListener("scroll", handleScrollOutSide);
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`w-full flex justify-center h-16 mt-3`}>
      <div
        className={`max-w-3xl flex justify-between w-11/12 md:w-full bg-white/20 shadow-lg ring-1 ring-black/5 p-4 rounded-xl ${
          isSticky
            ? "fixed top-3 h-16 shadow-lg bg-white/30 backdrop-blur-lg z-10 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="flex justify-between w-full gap-24">
          <div className="logo flex justify-start items-center w-full cursor-pointer">
            <Link href={"/"}>
              <svg
                id="logo-36"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M18.9523 11.0726C18.5586 7.69873 18.1429 4.13644 18.1429 0H21.8571C21.8571 4.08998 21.4434 7.64774 21.0502 11.0254C20.7299 13.778 20.4235 16.411 20.3666 19.115C22.2316 17.1697 23.863 15.107 25.572 12.9463C27.6791 10.2823 29.9043 7.46945 32.829 4.54464L35.4554 7.17104C32.5633 10.0631 29.7547 12.2861 27.0884 14.3966L27.0859 14.3985C24.9141 16.1178 22.8365 17.7624 20.885 19.6334C23.579 19.5765 26.1911 19.2717 28.9272 18.9524C32.3011 18.5586 35.8636 18.1429 40 18.1429V21.8571C35.9102 21.8571 32.3524 21.4432 28.9749 21.0502L28.9724 21.05C26.2204 20.7298 23.5882 20.4236 20.885 20.3666C22.829 22.2302 24.8906 23.8609 27.0499 25.5687L27.0533 25.5716C29.7174 27.6789 32.5304 29.9039 35.4554 32.829L32.829 35.4554C29.9369 32.5634 27.714 29.755 25.6038 27.0889L25.5988 27.082L25.5946 27.0765C23.8775 24.9081 22.2349 22.8338 20.3666 20.885C20.4235 23.589 20.7299 26.222 21.0502 28.9746C21.4434 32.3523 21.8571 35.91 21.8571 40H18.1429C18.1429 35.8636 18.5586 32.3013 18.9523 28.9274L18.9531 28.9219C19.272 26.1877 19.5765 23.5772 19.6334 20.885C17.7651 22.8338 16.1225 24.9081 14.4054 27.0765L14.4012 27.082L14.3962 27.0889C12.286 29.755 10.0631 32.5634 7.17104 35.4554L4.54464 32.829C7.46959 29.9039 10.2826 27.6789 12.9467 25.5716L12.9501 25.5687C15.1094 23.8609 17.171 22.2302 19.115 20.3666C16.411 20.4237 13.7779 20.73 11.0251 21.0502C7.6476 21.4432 4.08984 21.8571 0 21.8571V18.1429C4.13644 18.1429 7.69894 18.5586 11.0728 18.9524C13.8089 19.2717 16.421 19.5765 19.115 19.6334C17.1627 17.7617 15.0843 16.1166 12.9116 14.3966C10.2453 12.2861 7.43666 10.0631 4.54464 7.17104L7.17104 4.54464C10.0957 7.46945 12.3209 10.2823 14.428 12.9463C16.137 15.1069 17.7684 17.1696 19.6334 19.1148C19.5765 16.4227 19.272 13.8123 18.9531 11.0781L18.9523 11.0726Z"
                  className="custom"
                  fill="#FFA589"
                ></path>{" "}
              </svg>
            </Link>
          </div>

          <div
            ref={sidebarRef}
            className={`fixed transform top-0 right-0 w-64 h-full shadow-lg ease-in-out transition-transform duration-300 ${
              sidebarOpen
                ? "translate-x-0 backdrop-filter backdrop-blur-lg bg-opacity-30 "
                : "translate-x-full backdrop-filter backdrop-blur-lg bg-opacity-30"
            }`}
          >
            <div>
              <div className="relative ">
                <div className="md:hidden flex justify-end gap-28 pt-9 pr-9 mb-9 pl-4">
                  <button onClick={toggleSidebar} className="pr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 text-foregroundw"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="md:hidden flex flex-col gap-7 font-semibold items-end p-12 w-full text-md">
                    <Link href={"/works"}>
                      <div className="cursor-pointer font-semibold font-inter">
                        work
                      </div>
                    </Link>
                    {/* <div className="cursor-pointer font-semibold font-inter">
                      timeline
                    </div> */}
                    <Link href={"/about"}>
                      <div className="cursor-pointer font-semibold font-inter">
                        about
                      </div>
                    </Link>
                    <Link href={"/gallery"}>
                      <div className="cursor-pointer font-semibold font-inter">
                        gallery
                      </div>
                    </Link>
                    {/* <div className="flex cursor-pointer font-semibold font-inter items-center">
                      more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-4 items-center w-full text-md">
            <Link href={"/works"}>
              <div className="cursor-pointer font-semibold font-inter">
                work
              </div>
            </Link>
            {/* <div className="cursor-pointer font-semibold font-inter">
              timeline
            </div> */}
            <Link href={"/about"}>
              <div className="cursor-pointer font-semibold font-inter">
                about
              </div>
            </Link>
            <Link href={"/gallery"}>
              <div className="cursor-pointer font-semibold font-inter">
                gallery
              </div>
            </Link>
            {/* <div className="flex cursor-pointer font-semibold font-inter items-center">
              more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div> */}
          </div>
        </div>
        <div className="flex gap-4 justify-end items-center w-full">
          <Link
            target="_blank"
            href="https://www.instagram.com/hastag_developer/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram cursor-pointer"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link href={"https://x.com/saiiiii_k"} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter cursor-pointer"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
          <Link href={"https://github.com/KiranPolaki"} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github cursor-pointer"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <div className="font-extralight">|</div>
          <DarkLightMode />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
