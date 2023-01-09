import Menu from "./Menu";
import React from 'react';


type AppLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <Menu />
      <div>{children}</div>
    </>
  );
}
