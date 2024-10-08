"use client";

import { Button } from "@/components/ui/button";
import { Suspense, useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { isMobile } from "react-device-detect";
import { useTheme } from "next-themes";

function GetYears() {
  const years = [2022, 2023, 2024, 1];
  const [yearState, setYearState] = useState(0);
  const { theme, setTheme } = useTheme();

  const handleYearChange = (year) => {
    setYearState(year);
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-gray-400 text-xl font-semibold tracking-wider p-0 selection:text-purple-900">
          CONTRIBUTIONS
        </p>
      </div>
      <div className="flex gap-5">
        {years.map((year) => {
          return (
            <Button
              variant="outline"
              className="shadow-md"
              key={year}
              onClick={() => handleYearChange(year)}
            >
              {year != 1 ? year : "recent"}
            </Button>
          );
        })}
      </div>
      <Suspense fallback="Loadin...">
        <>
          {yearState === 0 || yearState === 1 ? (
            <GitHubCalendar
              username="KiranPolaki"
              blockSize={!isMobile ? 8 : 4}
              colorScheme={theme === "dark" ? "dark" : "light"}
            />
          ) : (
            <GitHubCalendar
              username="KiranPolaki"
              blockSize={!isMobile ? 8 : 4}
              year={yearState}
              colorScheme={theme === "dark" ? "dark" : "light"}
            />
          )}
        </>
      </Suspense>
    </div>
  );
}

export default GetYears;
