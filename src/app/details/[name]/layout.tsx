// app/special/layout.tsx
import { ReactNode } from "react";

const SpecialLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <header>Special Header</header>
      <nav>Special Navigation</nav>
      <main>{children}</main>
      <footer>Special Footer</footer>
    </div>
  );
};

export default SpecialLayout;
