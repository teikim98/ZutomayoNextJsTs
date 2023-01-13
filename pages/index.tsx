import Image from "next/image";
import HomePopup from "../components/HomePopup";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="ztmy" className="home">
        <HomePopup width={200} height={100} top={60} left={70} time={0.9}></HomePopup>
        <HomePopup width={250} height={180} top={55} left={80} time={1.1}></HomePopup>
        <HomePopup width={320} height={150} top={80} left={70} time={0.7}></HomePopup>
        <div className="inner-wrapper">
          <picture className="top-bg">
            <source media="(min-width: 769px)" srcSet="/main_kv_pc.jpeg" />
            <source media="(max-width: 769px)" srcSet="/main_kv_sp.jpg" />
            <img src="/main_kv_pc.jpeg" alt="bg" />
          </picture>
          <h1>
            <img src="/logo_w.svg" alt="" />
          </h1>
          <nav className="ztmy-top--nav">
            <ul>
              <li>
                <Link className="f-px" href="/">
                  <span>TOP</span>
                </Link>
              </li>
              <li>
                <Link className="f-px" href="/news/">
                  <span>NEWS</span>
                </Link>
              </li>
              <li>
                <Link className="f-px" href="/release/">
                  <span>RELEASE</span>
                </Link>
              </li>
              <li>
                <Link className="f-px" href="/profile/">
                  <span>PROFILE</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <footer className="ztmy-footer">
          <div className="ztmy-footer-inner">
            <ul className="ztmy-sns">
              <li>
                <a href="https://www.youtube.com/channel/UCv6P5nsS9rP4tDtFlqLU_QQ"><img src="/icon_yt.png" alt="Youtube" /></a>
              </li>
              <li>
                <a href="https://twitter.com/zutomayo"><img src="/icon_tw1.png" alt="TwiiterZTMY" /></a>
              </li>
              <li>
                <a href="https://twitter.com/zutomayo_staff"><img src="/icon_tw2.png" alt="TwiiterStaff" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/zutomayo/?hl=ja"><img src="/icon_in.png" alt="Instagram" /></a>
              </li>
            </ul>
            <div>
              <p className="ztmy-footer-copy">
                <small className="f-tt--b">
                  ALL RIGHTS RESERVED 2023&copy;ZUTOMAYO
                </small>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .home {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        .top-bg img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          z-index: 1;
          pointer-events: none;
        }
        h1 {
          display: block;
          width: 50%;
          position: relative;
          top: 50px;
          left: 100px;
          margin-left: -5px;
          z-index: 100;
        }
        h1 > img {
          font-size: 0;
          line-height: 0;
          width: 100%;
          height: auto;
        }
        .ztmy-top--nav {
          position: absolute;
          top: 200px;
          left: 25px;
          z-index: 20;
          text-shadow: -3px 0 #340850, 0 3px #340850, 3px 0 #340850, 0 -3px #340850;
        }
        @media screen and (min-width: 769px) {
          .home .ztmy-top--nav {
            top: calc(120px + 5vw);
            left: 100px;
          }
        }
        .ztmy-top--nav li {
          margin-bottom: 1rem;
        }
        .ztmy-top--nav li a {
          line-height: 1;
          position: relative;
          display: inline-block;
        }
        .ztmy-top--nav li a::before {
          content: "";
          position: absolute;
          z-index: 9999;
          transition: all 0.3s;
          background-color: #8027d0;
          width: 0%;
          height: 100%;
          bottom: -5px;
          left: 5px;
        }

        .ztmy-top--nav li a:hover::before {
          width: 100%;
        }
        .f-px {
          font-weight: normal;
          font-style: normal;
        }
        span {
          font-size: 25px;
          color: white;
          letter-spacing: 0.1rem;
        }
        .ztmy-footer {
          position:fixed;
          text-align: center;
          padding: 21px 25px 21px;
          height: 90px;
          z-index:2;
          margin: 0;
          bottom:0;
          left :3rem;
          text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;"
        }

        .ztmy-footer-copy {
          font-size: 16px;
          text-align: right;
          white-space: nowrap;
        } 
        .ztmy-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5px;
        }
        .ztmy-footer .ztmy-sns {
          white-space: nowrap;
        }
        .ztmy-footer .ztmy-sns li {
          display: inline-block;
          width: 27px;
          margin: 0 2px 0 0;
        }
        .ztmy-footer .ztmy-sns li a {
          display: block;
          font-size: 0;
          line-height: 0;
        }
        .ztmy-footer .ztmy-sns li a img {
          width: 100%;
          height: auto;
        }
        @media screen and (min-width: 769px) {
          .home .ztmy-footer {
            position: fixed;
            z-index: 3;
            left: 94px;
            bottom: 50px;
            width: auto;
            margin: 0;
            padding: 0;
            background: transparent;
          }
        }
        
        @media screen and (min-width: 769px) {
          .home .ztmy-footer .ztmy-footer-inner {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          }
        }
        @media screen and (min-width: 769px) {
          .home .ztmy-footer .ztmy-footer-copy {
            padding-top: 10px;
            padding-left: 0;
          }
        }
        @media screen and (min-width: 769px) {
          .ztmy-footer-copy {
            text-align: center;
            color: #ffffff;
            font-size: 18px;
            text-shadow : none;
            padding: 0 2rem 0 2rem;
          }
        }
        
        
      `}</style>
    </>
  );
}
