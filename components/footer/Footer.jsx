function Footer() {
  return (
    <div className="my-10 w-full flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center">
        <div className="flex items-center gap-1 text-sm md:text-md">
          <p className="flex items-center">©️saiiik</p> ✦{" "}
          <p>polaki sai kiran</p>
        </div>
        <p className="text-gray-400 text-xs md:text-sm mb-12">
          Designed in Figma, Coded in Nextjs and deployed on Vercel
        </p>
        <div className="flex items-center gap-2 justify-center select-none text-gray-400">
          {/* <span className="flex-1 sm:hidden flex text-gray-400">
            ──────────────
          </span> */}
          <span className="text-sm ">✦</span>
          <span className="text-xs sm:hidden md:text-sm w-full md:text-md text-gray-400 text-center">
            You miss 100% of shots you don&apos;t take
          </span>
          <span className="text-sm">✦</span>
          {/* <span className="flex-1 text-gray-400 sm:hidden md:flex">
            ──────────────
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
