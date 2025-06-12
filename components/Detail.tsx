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
      <article>{children}</article>
    </>
  );
}
