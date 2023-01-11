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
        .ztmy-container {
          position: relative;
          min-height: 100vh;
          background-repeat: repeat-y;
          background-position: top center;
          background-image: url(/bg_contents_pc.jpeg);
          background-size: 100%;
        }
      `}</style>
    </>
  );
}
