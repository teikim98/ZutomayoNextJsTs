
import React from "react";
import Footer from "./Footer";

type AppLayoutProps = {
  children: React.ReactNode;
};

//전체 레이아웃 
export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="ztmy-container">
        <div>{children}</div>
        <Footer />
      </div>
      <style jsx>{`

          /* 기본 컨테이너 */
        .ztmy-container {
          position: relative;
          min-height: 100vh;
          max-width: 100vw;
          background-repeat: repeat-y;
          background-position: top center;
          background-image: url(/bg_contents_pc.jpeg);
          background-size: 100%;
        }
      `}</style>
    </>
  );
}
