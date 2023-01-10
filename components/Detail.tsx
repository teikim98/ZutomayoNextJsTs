import Link from "next/link";
import React from "react";

type AppLayoutProps = {
    children: React.ReactNode;
    content: string;
};

export default function Detail({ children, content }: AppLayoutProps) {
    return (
        <>
            <div className="detail-body">
                <header className="ztmy-header">
                    <div className="header-inner">
                        <div className="ztmy-header-logo">
                            <h1>
                                <Link href="/">
                                    <img src="/logo.svg" alt="" />
                                </Link>
                            </h1>
                        </div>
                        <div className="ztmy-header-title">
                            <h2 className="f-tt--b">
                                <span>{content}</span>
                            </h2>
                        </div>
                    </div>
                </header>
                <article className="detail-wrap">{children}</article>
            </div>
            <style jsx>{`
        .detail-body {
          position: relative;
          min-height: 100vh;
          background-repeat: repeat-y;
          background-position: top center;
          background-image: url(/bg_contents_pc.jpeg);
          background-size: 100%;
        }
        .ztmy-header {
          text-align: center;
          margin: 0;
          position: relative;
          height: 54px;
          min-height: 48px;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header {
            height: 94px;
            margin: 0 auto;
          }
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        @media screen and (min-width: 769px) {
          .header-inner {
            width: 50vw;
            margin: 0 auto;
          }
        }
        .ztmy-header-logo {
          display: block;
          width: 50vw;
          max-width: 360px;
          height: auto;
          margin: 0 auto;
          font-size: 0;
          line-height: 0;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header-logo {
            width: 36vw;
            max-width: 100%;
          }
        }
        .ztmy-header-title {
          text-align: center;
          padding: 0 0 0 3px;
          flex-basis: 18vw;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header-title {
            text-align: right;
          }
        }
        .ztmy-header-title h2 {
          margin: 0;
          padding: 0;
          line-height: 0;
          display: block;
          font-size: 1.5em;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header-title h2 span {
            font-size: 2.5vw;
          }
        }
        .ztmy-header-title h2 span {
          display: inline;
          background-color: #000000;
          color: #ffffff;
          padding: 0 0.2rem;
          line-height: 1.5;
        }
        .f-tt--b {
          font-style: normal;
          font-weight: 700;
        }
        .detail-wrap {
          margin: 0 auto;
          min-height: calc(100vh - 94px - 94px);
        }
      `}</style>
        </>
    );
}
