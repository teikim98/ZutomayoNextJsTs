import Image from "next/image";
import HomePopup from "../components/HomePopup";
import Link from "next/link";
import newsConent from '../components/News/news.json'

//메인 페이지
export default function Home() {
  return (
    <>
      <div id="ztmy" className="home w-full max-w-full mx-auto">
        <HomePopup width={250} height={140} top={60} left={70} time={0.9} title={'News ' + newsConent.content[0].time} content={newsConent.content[0].title} id={1}></HomePopup>
        <HomePopup width={250} height={150} top={55} left={80} time={1.1} title={'News ' + newsConent.content[1].time} content={newsConent.content[1].title} id={2}></HomePopup>
        <HomePopup width={320} height={100} top={80} left={70} time={0.7} title={'News ' + newsConent.content[2].time} content={newsConent.content[2].title} id={3}></HomePopup>
        <div className="inner-wrapper">
          {/* 반응형 이미지 */}
          <picture className="top-bg relative">
            <source media="(min-width: 769px)" srcSet="/main_kv_pc.jpeg" />
            <source media="(max-width: 769px)" srcSet="/main_kv_sp.jpg" />
            <img className="absolute top-0 left-0 w-full h-full object-cover z-[1] pointer-events-none" src="/main_kv_pc.jpeg" alt="bg" />
          </picture>
          <h1 className="relative top-[50px] left-[100px] ml-[-5px] z-[100] w-1/2">
            <img src="/logo_w.svg" alt="" />
          </h1>
          <nav className="ztmy-top--nav absolute top-[200px] left-[25px] z-20 text-shadow-purple md:[top:calc(120px+5vw)] md:left-[100px]">
            <ul>
              <li>
                <Link className="nav-link" href="/">
                  <span className="text-white text-[25px] tracking-wider">TOP</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/news">
                  <span className="text-white text-[25px] tracking-wider">NEWS</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/release/">
                  <span className="text-white text-[25px] tracking-wider">RELEASE</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/profile/">
                  <span className="text-white text-[25px] tracking-wider">PROFILE</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* jsx충돌때문에 따로 제작한 footer */}
        <footer className="ztmy-footer fixed left-12 bottom-0 text-center p-[21px_25px] h-[90px] z-20">
          <div className="ztmy-footer-inner flex items-center justify-between p-[0_5px] md:flex-col md:items-start md:justify-start">
            <ul className="ztmy-sns whitespace-nowrap">
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
              <p className="ztmy-footer-copy text-[16px] text-right whitespace-nowrap md:text-center md:text-white md:text-[18px] md:p-[0_2rem] md:shadow-none">
                <small className="f-tt--b">
                  ALL RIGHTS RESERVED 2023&copy;ZUTOMAYO
                </small>
              </p>
            </div>
          </div>
        </footer>
      </div>

    </>
  );
}
