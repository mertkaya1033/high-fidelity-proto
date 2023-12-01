"use client";
import React, { useCallback } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function DataPage(
  props: React.PropsWithChildren<{
    title: string;
    month: string;
    year: string;
    years: readonly number[];
    months: readonly string[];
  }>,
) {
  const { month, year, children, title, years, months } = props;

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  return (
    <div className="mx-auto flex h-screen w-full max-w-xl flex-col items-center gap-4 px-4 pt-10">
      <h1 className="scroll-m-20 py-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <div className="flex w-full items-center">
        <div className="flex h-full items-center self-start">
          <p className=" leading-7 [&:not(:first-child)]:mt-6">
            Showing stats for:
          </p>
        </div>
        <div className="flex grow justify-end gap-2">
          <Select
            value={month}
            onValueChange={(month) => {
              router.push(pathname + "?" + createQueryString("month", month));
            }}
          >
            <SelectTrigger className="w-auto">
              <SelectValue aria-label={month}>{month}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {months.map((month) => {
                  return (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={year}
            onValueChange={(year) => {
              router.push(pathname + "?" + createQueryString("year", year));
            }}
          >
            <SelectTrigger className="w-auto">
              <SelectValue aria-label={year}>{year}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {years.map((year) => {
                  return (
                    <SelectItem key={year} value={year + ""}>
                      {year}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {children}
    </div>
  );
}
