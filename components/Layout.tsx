import Menu from "./Menu";
import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <Menu />
      <div className="ztmy-container">
        <div>{children}</div>
      </div>
      <style jsx>{`
        /* .ztmy-container {
          margin: 0 auto;
          width: 100%;
          padding: 0;
        } */
      `}</style>
    </>
  );
}
