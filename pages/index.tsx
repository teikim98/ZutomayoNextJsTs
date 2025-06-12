import Image from "next/image";
import Link from "next/link";
import newsConent from '../components/News/news.json'

//메인 페이지
export default function Home() {
  return (
    <>
      <div id="ztmy">
        <div>
          {/* 반응형 이미지 */}
          <picture>
            <source media="(min-width: 769px)" srcSet="/main_kv_pc.jpeg" />
            <source media="(max-width: 769px)" srcSet="/main_kv_sp.jpg" />
            <img src="/main_kv_pc.jpeg" alt="bg" />
          </picture>
          <h1>
            <img src="/logo_w.svg" alt="" />
          </h1>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <span>TOP</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <span>NEWS</span>
                </Link>
              </li>
              <li>
                <Link href="/release/">
                  <span>RELEASE</span>
                </Link>
              </li>
              <li>
                <Link href="/profile/">
                  <span>PROFILE</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* jsx충돌때문에 따로 제작한 footer */}
        <footer>
          <div>
            <ul>
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
              <p>
                <small>
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
