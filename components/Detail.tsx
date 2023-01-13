import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Header from './Header';

type AppLayoutProps = {
  children: React.ReactNode;
  contentName: string;
};

export default function Detail({ children, contentName }: AppLayoutProps) {
  const showSettings = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Menu />
      <Header content={contentName} />
      <article className="detail-wrap">{children}</article>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          overflow: hidden;
        }
        .detail-wrap {
          margin: 0 auto;
          min-height: calc(100vh - 94px - 94px);
        }
      `}</style>
    </>
  );
}
