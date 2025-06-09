import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Header from './Header';

type AppLayoutProps = {
  children: React.ReactNode;
  contentName: string;
};

export default function Detail({ children, contentName }: AppLayoutProps) {

  return (
    <>
      <Menu />
      <Header content={contentName} />
      <article className="detail-wrap mx-auto min-h-[calc(100vh-94px-94px)] w-full max-w-[960px] overflow-hidden">{children}</article>
    </>
  );
}
