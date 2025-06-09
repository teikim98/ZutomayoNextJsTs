
import React from "react";
import Footer from "./Footer";

type AppLayoutProps = {
  children: React.ReactNode;
};

//전체 레이아웃 
export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="ztmy-container relative min-h-screen max-w-screen bg-[url('/bg_contents_pc.jpeg')] bg-top bg-repeat-y bg-[length:100%]">
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
