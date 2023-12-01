"use client";
import React from "react";
import SkillList from "./components/skill-list";

import CircularProgress from "./components/circular-progress";
import { data, type Data, type Month, years, months } from "./_data";
import DataPage from "./components/data-page";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const maxTotalSavings = Object.values(data.maxSavings).reduce(
  (val, total) => val + total,
  0,
);

function getMonthSavings(data: Data, month: Month, year: number) {
  return Object.values(data.totalSavings[year]![month]).reduce(
    (val, total) => val + total,
    0,
  );
}

function twoDecimal(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export default function HomePage() {
  const searchParams = useSearchParams();

  const date = new Date();

  const year = (() => {
    const year = searchParams.get("year") ?? date.getFullYear() + "";

    return years.includes(parseInt(year)) ? year : years[years.length - 1] + "";
  })();

  const month = searchParams.get("month") ?? months[date.getMonth()]!;

  const totalSavings = getMonthSavings(data, month as Month, parseInt(year));

  return (
    <DataPage
      title="Your Statistics"
      month={month}
      months={months}
      years={years}
      year={year}
    >
      <div className="pt-10">
        <CircularProgress
          r={70}
          cx={80}
          cy={80}
          percentage={Math.floor(totalSavings / maxTotalSavings) * 100}
        />
      </div>
      <p className="pb-12 text-center leading-7 [&:not(:first-child)]:mt-6">
        You have saved{" "}
        <span className="text-primary">${twoDecimal(totalSavings)}</span> out of{" "}
        <span className="text-primary">${twoDecimal(maxTotalSavings)}</span> in{" "}
        {month} of {year}.
      </p>

      <SkillList />
      <Button className="w-full" variant={"destructive"} asChild>
        <Link href={"/login"}>Logout</Link>
      </Button>
    </DataPage>
  );
}
