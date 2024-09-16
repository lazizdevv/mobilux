import { Logo } from "@/assets/svgs/Logo";
import HamburgerMenu from "@/components/navbar/client";
import { Search } from "@/components/search/search";
import { Loader, Menu, User, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

export const Header = () => {
  return (
    <>
      <div
        style={{
          
          gap: "20px",
        }}
        className="flex p-3 md:px-5 md:py-6 flex-wrap justify-between items-center gap-6 border-2 w-full bg-white shadow-md"
      >
        <Link href={"/"} className="cursor-pointer">
          <Logo />
        </Link>

        <Suspense
          fallback={
            <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white transition-all rounded-lg lg:hidden bg-primary hover:bg-primary/80">
              <Loader />
            </div>
          }
        >
          <HamburgerMenu />
        </Suspense>

        <div className="max-w-[930px] w-full border-2 ml-10">
          <Search />
        </div>

        <div
          style={{ gap: "15px" }}
          className="justify-between w-fit border p-3 cursor-pointer border-black hidden md:flex"
        >
          <h1 className="mr-5">Kirish</h1>
          <div className="">
            <p className="w-4 h-4">
              <UserCircleIcon />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
