
import React from "react";
import Footer from "./Footer";

type AppLayoutProps = {
  children: React.ReactNode;
};

//전체 레이아웃 
export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <div>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
