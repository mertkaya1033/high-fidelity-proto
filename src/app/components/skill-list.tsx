"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type Savings } from "../_data";
function twoDecimal(num: number) {
  return Math.round(num * 100) / 100;
}

function twoDecimalStr(num: number) {
  return twoDecimal(num).toFixed(2);
}

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

export default function SkillList({
  savings,
  maxSavings,
}: {
  savings: Savings;
  maxSavings: Savings;
}) {
  const searchParams = useSearchParams();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      {Object.keys(skills).map((skillStr, i) => {
        const skill = skills[skillStr as keyof typeof skills];
        const saving = savings[skillStr as keyof typeof skills];
        const maxSaving = maxSavings[skillStr as keyof typeof skills];
        return (
          <div className="flex w-full items-center justify-between">
            <Button key={i} variant={"outline"} asChild>
              <Link href={"/" + skillStr + "?" + searchParams.toString()}>
                {skill.text}
              </Link>
            </Button>
            <p
              className="text-center"
              style={
                saving > 0 ? { color: "hsl(142.1 76.2% 36.3%" } : undefined
              }
            >
              ${twoDecimalStr(saving)} / ${twoDecimalStr(maxSaving)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
