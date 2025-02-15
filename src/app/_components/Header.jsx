"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../../../public/chart-donut.svg"

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  // Redirect to the dashboard if the user is signed in
  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
      <Image src="/chart-donut.svg" alt="logo" width={40} height={25} />
      <span className="text-blue-800 font-bold text-xl">FinanSmart</span>
      </div>
      {!isSignedIn && (
        <div className="flex gap-3 items-center">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
