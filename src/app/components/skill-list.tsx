"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const skills = [
  {
    href: "speed",
    title: "Speed",
  },
  {
    href: "stopping",
    title: "Stopping",
  },
  {
    href: "lanes",
    title: "Lanes",
  },
  {
    href: "turning",
    title: "Turning",
  },
  {
    href: "phone-usage",
    title: "Phone Usage",
  },
];

export default function SkillList() {
  const searchParams = useSearchParams();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      {skills.map((skill, i) => {
        return (
          <Button
            key={i}
            className="w-full justify-normal"
            variant={"outline"}
            asChild
          >
            <Link href={"/" + skill.href + "?" + searchParams.toString()}>
              {skill.title}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
