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
                <Link className="f-px" href="/photo/">
                  <span>PHOTO</span>
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
          top: 25px;
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
          margin-bottom: 5px;
          background: linear-gradient(to left, #4f4f4f 50%, violet 50%) right;
          background-size: 200%;
          transition: 0.5s ease-in-out;
        }
        .ztmy-top--nav li:hover {
          background-position: left;
        }

        .ztmy-top--nav li a {
          line-height: 1;
          position: relative;
          display: inline-block;
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
