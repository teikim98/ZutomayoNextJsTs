import Link from "next/link";
import { use, useState } from "react";

//컨텐츠 이름 Props
type AppLayoutProps = {
  content: string;
};

//헤더 컴포넌트
export default function Header({ content }: AppLayoutProps) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div>
          <div
            onClick={() => {
              setOpen(prev => !prev)
            }}
            className={`${open ? 'burger-open' : ''}`}
            id="ztmy-header-menu"
          >
            <div id="ztmy-burger">
              <div>
                <span id="ztmy-burger-1"></span>
                <span id="ztmy-burger-2"></span>
                <span id="ztmy-burger-3"></span>
              </div>
            </div>
          </div>
          <div>
            <h1>
              <Link href="/">
                <img src="/logo.svg" alt="" />
              </Link>
            </h1>
          </div>
          <div>
            <h2>
              <span>{content}</span>
            </h2>
          </div>
        </div>
        <nav className={open ? "fixed left-0 top-0 w-[300px] max-w-[90vw] h-full overflow-hidden bg-[#8027d0] z-[990] transition-[left]" : "fixed left-[-100vw] top-0 w-[300px] max-w-[90vw] h-full overflow-hidden bg-[#8027d0] z-[990] transition-[left]"}>
          <div>
            <ul>
              <li>
                <Link href="/">
                  <p>TOP</p>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <p>NEWS</p>
                </Link>
              </li>
              <li>
                <Link href="/release">
                  <p>RELEASE</p>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <p>PROFILE</p>
                </Link>
              </li>
            </ul>
            <ul>
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
    </>
  );
}
