"use client";
import { notFound, useSearchParams } from "next/navigation";
import DataPage from "../components/data-page";
import { data, months, years, type Month } from "../_data";
import CircularProgress from "../components/circular-progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = {
  speed: {
    text: "Speed",
    bulletPoints: [
      "Amount of time spent within 10km/h speed limit for this month",
      "Insurance rate will be lowered if the amount is above 75%.",
    ],
  },
  stopping: {
    text: "Stopping",
    bulletPoints: [
      "Amount of times you have fully stopped at a stop sign this month",
      "Insurance rate will be lowered if the amount is above 75%.",
    ],
  },
  lanes: {
    text: "Lanes",
    bulletPoints: [
      "Amount of time spent within your lanes this month.",
      "Insurance rate will be lowered if the amount is above 75%.",
    ],
  },
  turning: {
    text: "Turning",
    bulletPoints: [
      "Amount of times you did not turn when a pedestrian or a cyclist was in the way this month.",
      "Insurance rate will be lowered if the amount is above 75%.",
    ],
  },
  "phone-usage": {
    text: "Phone Usage",
    bulletPoints: [
      "Amount of time spent not looking at your phone while driving this month.",
      "Insurance rate will be lowered if the amount is above 75%.",
    ],
  },
} as const;

function twoDecimal(num: number) {
  return Math.round(num * 100) / 100;
}

function twoDecimalStr(num: number) {
  return twoDecimal(num).toFixed(2);
}

function over75Percent(num: number) {
  return twoDecimal(num) >= 0.75;
}

const hrefs = Object.keys(skills);
export default function Page({
  params,
}: {
  params: { skill: keyof typeof skills };
}) {
  const { skill } = params;
  const searchParams = useSearchParams();
  if (!hrefs.includes(skill)) notFound();

  const date = new Date();

  const year = parseInt(
    (() => {
      const year = searchParams.get("year") ?? date.getFullYear() + "";

      return years.includes(parseInt(year))
        ? year
        : years[years.length - 1] + "";
    })(),
  );

  const month = (searchParams.get("month") ??
    months[date.getMonth()]!) as Month;

  const dataExists = !!data.totalSavings[year]?.[month];
  const potentialSavings = data.totalSavings[year]?.[month]?.[skill] ?? 0;
  const info = skills[skill];

  const isOverThreshold = over75Percent(
    potentialSavings / data.maxSavings[skill],
  );
  const savings = isOverThreshold ? potentialSavings : 0;
  const savingsColor = isOverThreshold
    ? "hsl(142.1 76.2% 36.3%"
    : "hsl(346.8 77.2% 49.8%)";

  // console.log({
  //   dataExists,
  //   savings,
  //   max: data.maxSavings[skill],
  //   potentialSavings,
  // });
  return (
    <DataPage
      title={skills[skill].text}
      month={month}
      months={months}
      year={year + ""}
      years={years}
    >
      <div className="pt-6">
        <CircularProgress
          r={70}
          cx={80}
          cy={80}
          percentage={
            twoDecimal(potentialSavings / data.maxSavings[skill]) * 100
          }
          color={savingsColor}
        />
      </div>
      {dataExists ? (
        <p className="text-center leading-7 [&:not(:first-child)]:mt-6">
          You have saved{" "}
          <span style={{ color: savingsColor }}>${twoDecimalStr(savings)}</span>{" "}
          out of{" "}
          <span className="text-primary">
            ${twoDecimalStr(data.maxSavings[skill])}
          </span>{" "}
          due to {skill} in {month} {year}.
        </p>
      ) : (
        <p className="text-center leading-7 [&:not(:first-child)]:mt-6">
          No data exists for {month} {year}.
        </p>
      )}
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {info.bulletPoints.map((point, i) => {
          return <li key={i}>{point}</li>;
        })}
      </ul>
      <Button className="w-full" variant={"secondary"} asChild>
        <Link href={"/?" + searchParams.toString()}>Back</Link>
      </Button>
    </DataPage>
  );
}
