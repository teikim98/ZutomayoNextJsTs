import Image from "next/image";
import HomePopup from "../components/HomePopup";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="ztmy" className="home">
        <HomePopup width={200} height={100}></HomePopup>
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
              <li>
                <Link className="f-px" href="/faq/">
                  <span>CONTACT</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
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
          top: 225px;
          left: 25px;
          z-index: 20;
        }
        @media screen and (min-width: 769px) {
          .home .ztmy-top--nav {
            top: calc(80px + 5vw);
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
        
      `}</style>
    </>
  );
}
