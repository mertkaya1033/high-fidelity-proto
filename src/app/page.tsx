"use client";
import React, { useEffect } from "react";
import SkillList from "./components/skill-list";

import CircularProgress from "./components/circular-progress";
import {
  data,
  type Data,
  type Month,
  years,
  months,
  type Savings,
} from "./_data";
import DataPage from "./components/data-page";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function twoDecimal(num: number) {
  return Math.round(num * 100) / 100;
}

function twoDecimalStr(num: number) {
  return twoDecimal(num).toFixed(2);
}

function over75Percent(num: number) {
  return twoDecimal(num) >= 0.75;
}

function getTotalSavingsAfterTresh(savings: Savings, maxSavings: Savings) {
  return Object.keys(savings)
    .map((skillStr) => {
      const skill = skillStr as keyof Savings;
      const ratio = savings[skill] / maxSavings[skill];
      return {
        [skill]: over75Percent(ratio) ? savings[skill] : 0,
      };
    })
    .reduce((prev, cur) => ({ ...prev, ...cur })) as Savings;
}

const maxTotalSavings = Object.values(data.maxSavings).reduce(
  (val, total) => val + total,
  0,
);

function getMonthSavings(data: Data, month: Month, year: number) {
  const monthSavings = data.totalSavings[year]![month]!;
  const savingsAfterThresh = getTotalSavingsAfterTresh(
    monthSavings,
    data.maxSavings,
  );

  return Object.keys(savingsAfterThresh)
    .map((key) => {
      return savingsAfterThresh[key as keyof Savings];
    })
    .reduce((val, total) => val + total, 0);
}

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      router.push("/login");
    }
  }, [router]);

  const searchParams = useSearchParams();

  const date = new Date();

  const year = (() => {
    const year = searchParams.get("year") ?? date.getFullYear() + "";

    return years.includes(parseInt(year)) ? year : years[years.length - 1] + "";
  })();

  const month = searchParams.get("month") ?? months[date.getMonth()]!;

  const dataExists = !!data.totalSavings[parseInt(year)]?.[month as Month];

  const totalSavings = dataExists
    ? getMonthSavings(data, month as Month, parseInt(year))
    : 0;

  // console.log({
  //   dataExists,
  //   totalSavings,
  //   maxTotalSavings,
  // });

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
          percentage={twoDecimal(totalSavings / maxTotalSavings) * 100}
          color={"hsl(var(--primary))"}
        />
      </div>
      {dataExists ? (
        <>
          <p className="pb-12 text-center leading-7 [&:not(:first-child)]:mt-6">
            You have saved{" "}
            <span className="text-primary">${twoDecimalStr(totalSavings)}</span>{" "}
            out of{" "}
            <span className="text-primary">
              ${twoDecimalStr(maxTotalSavings)}
            </span>{" "}
            in {month} {year}.
          </p>
          <SkillList
            savings={getTotalSavingsAfterTresh(
              data.totalSavings[parseInt(year)]![month as Month]!,
              data.maxSavings,
            )}
            maxSavings={data.maxSavings}
          />
        </>
      ) : (
        <p className="pb-12 text-center leading-7 [&:not(:first-child)]:mt-6">
          No data exists for {month} {year}.
        </p>
      )}
      <Button
        className="w-full"
        variant={"destructive"}
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          router.push("/login");
        }}
      >
        Logout
      </Button>
    </DataPage>
  );
}
