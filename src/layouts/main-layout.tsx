import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container border border-red-800">
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="flex flex-col  w-full border-2"
        >
          <header
            style={{ width: "100%", background: "white",position:"sticky", top:"0" }}
            className=" flex justify-between items-center z-50"
          >
            <Header />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};
