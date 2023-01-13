import Link from "next/link";
import { use, useState } from "react";

type AppLayoutProps = {
  content: string;
};

export default function Header({ content }: AppLayoutProps) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="ztmy-header">
        <div className="header-inner">
          <div
            onClick={() => {
              setOpen(prev => !prev)
            }}
            className={open ? "ztmy-header-menu-open ztmy-header-menu" : "ztmy-header-menu"}
            id="ztmy-header-menu"
          >
            <div className="ztmy-burger" id="ztmy-burger">
              <div className="ztmy-burger-icon">
                <span id="ztmy-burger-1" className="ztmy-burger-line"></span>
                <span id="ztmy-burger-2" className="ztmy-burger-line"></span>
                <span id="ztmy-burger-3" className="ztmy-burger-line"></span>
              </div>
            </div>
          </div>
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
        <nav className={open ? "ztmy-fix-menu-open" : "ztmy-fix-menu"}>
          <div className="ztmy-fix-menu-inner">
            <ul className="ztmy-menu-cont">
              <li>
                <Link href="/">
                  <p className="f-px">TOP</p>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <p className="f-px">NEWS</p>
                </Link>
              </li>
              <li>
                <Link href="/release">
                  <p className="f-px">RELEASE</p>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <p className="f-px">PROFILE</p>
                </Link>
              </li>
            </ul>
            <ul className="ztmy-menu-sns">
              <li>
                <a href="https://www.youtube.com/channel/UCv6P5nsS9rP4tDtFlqLU_QQ">
                  <img src="/icon_yt.png" alt="Youtube" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/zutomayo">
                  <img src="/icon_tw1.png" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/zutomayo_staff">
                  <img src="/icon_tw2.png" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zutomayo/?hl=ja">
                  <img src="/icon_in.png" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <style jsx>{`
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
            text-align: center;
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
        .ztmy-header-menu {
          cursor: pointer;
          position: relative;
          z-index: 1000;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .ztmy-header-menu {
            position: fixed;
            top: 30px;
            left: 30px;
          }
        }

        @media (min-width: 992px) {
          .ztmy-header-menu {
            display: none;
          }
        }

        .ztmy-header-menu .ztmy-burger {
          padding: 5px;
        }

        .ztmy-header-menu .ztmy-burger-icon {
          position: relative;
          width: 24px;
        }

        .ztmy-header-menu .ztmy-burger-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .ztmy-header-menu .ztmy-burger-line:nth-child(1) {
          top: -7px;
        }

        .ztmy-header-menu .ztmy-burger-line:nth-child(2) {
          top: 0px;
        }

        .ztmy-header-menu .ztmy-burger-line:nth-child(3) {
          top: 7px;
        }

        .ztmy-header-menu-open .ztmy-burger-line {
          background-color : white;
        }

        .ztmy-header-menu-open .ztmy-burger-line:nth-child(1) {
          top:0;
			transform: rotate(-45deg);
        }

        .ztmy-header-menu-open .ztmy-burger-line:nth-child(2) {
          height: 0px;
        }

        .ztmy-header-menu-open .ztmy-burger-line:nth-child(3) {
          top:0;
			transform: rotate(45deg);
        }



        .ztmy-fix-menu {
          display: block;
          position: fixed;
          left: -100vw;
          top: 0;
          width: 300px;
          max-width: 90vw;
          height: 100%;
          overflow: hidden;
          background-color: #8027d0;
          z-index: 990;
          transition: left 0.3s;
        }

        .ztmy-fix-menu-open {
          display: block;
          position: fixed;
          left: 0;
          top: 0;
          width: 300px;
          max-width: 90vw;  
          height: 100%;
          overflow: hidden;
          background-color: #8027d0;
          z-index: 990;
          transition: left 0.3s;
        }

        .ztmy-fix-menu-inner {
          padding: 80px 0px 0 32px;
        }

        .ztmy-menu-cont li {
          margin-bottom: 0.5rem;
        }
        .ztmy-menu-cont li a {
          display: inline-block;
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          letter-spacing: 0.1rem;
        }
      `}</style>
    </>
  );
}
