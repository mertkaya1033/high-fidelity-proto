"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

// function findUser(username: string, password: string) {
//   const authList = [
//     {
//       username: "driver1",
//       password: "password123",
//     },
//   ];

//   return authList.find((item) => {
//     return item.username === username && item.password === password;
//   });
// }

export default function OtherPage() {
  const router = useRouter();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Car $tat Tracker</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
          <Label htmlFor="email">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button
            className="mt-3 self-center"
            onClick={() => {
              localStorage.setItem("isLoggedIn", "yessir");
              router.push("/");
            }}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
