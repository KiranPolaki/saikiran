import WorkExperience from "@/components/work/WorkExperience";
import Image from "next/image";
import story from "../../public/story.jpeg";
import Link from "next/link";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <>
      <div className="w-full justify-center flex">
        <div className="max-w-3xl px-5">
          <div className="flex items-center gap-4 mt-14 px-1">
            <div className="w-28 h-28  c6bo rounded-full bg-cover">
              <Image
                alt="sai"
                placeholder="blur"
                width={200}
                height={200}
                src={story}
                className="rounded-full"
              />
            </div>
            <div className="font-semibold font-inter ">
              <p className="text-2xl">Sai Kiran Polaki</p>
              <div className="flex items-center">
                <Link
                  href={"https://x.com/saiiiii_k"}
                  className="hover:text-purple-500 flex items-center"
                >
                  @saiiiiik
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right "
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-xl mt-10">
            I create web so i am spiderman. my current primary field of work is
            fullstack web development. rn living in hyderabad.
          </div>
          <div className="mt-10">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-xl font-semibold tracking-wider p-0 selection:text-purple-900 mb-2">
                EXPERIENCE
              </p>
              {/* <Link
                href={
                  "https://drive.google.com/drive/folders/1WmqvQuMXWEa_sWyTSloQyAF4Roikc5ok?usp=sharing"
                }
                className="flex items-center hover:underline hover:text-purple-500"
                target="_blank"
              >
                resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right "
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link> */}
            </div>
            <WorkExperience />
          </div>
          <div className="mt-10">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-xl font-semibold tracking-wider p-0 selection:text-purple-900 mb-2">
                WORK
              </p>
              <Link
                href={
                  "https://drive.google.com/drive/folders/1WmqvQuMXWEa_sWyTSloQyAF4Roikc5ok?usp=sharing"
                }
                className="flex items-center hover:underline hover:text-purple-500"
                target="_blank"
              >
                all works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right "
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
            <Work />
          </div>
        </div>
      </div>
    </>
  );
}
