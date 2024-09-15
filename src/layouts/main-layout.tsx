import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container">
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="flex flex-col  w-full border-2"
        >
          <header
            style={{ width: "100%", background: "white" }}
            className="p-4 flex justify-between items-center"
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
