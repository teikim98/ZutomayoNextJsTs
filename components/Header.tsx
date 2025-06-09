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
      <header className="ztmy-header text-center m-0 relative h-[54px] min-h-[48px] flex w-full items-center justify-center md:h-[94px] md:mx-auto">
        <div className="header-inner flex items-center justify-between w-full md:w-[50vw] md:mx-auto">
          <div
            onClick={() => {
              setOpen(prev => !prev)
            }}
            className={`${open ? 'burger-open' : ''} ztmy-header-menu relative z-[1000] cursor-pointer md:hidden`}
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
          <div className="ztmy-header-logo block w-[50vw] max-w-[360px] h-auto m-auto text-[0px] leading-none md:w-[36vw] md:max-w-full">
            <h1>
              <Link href="/">
                <img src="/logo.svg" alt="" />
              </Link>
            </h1>
          </div>
          <div className="ztmy-header-title text-center pl-0 md:text-center basis-[18vw]">
            <h2 className="font-bold">
              <span className="inline bg-black text-white px-[0.2rem] leading-[1.5] md:text-[2.5vw]">{content}</span>
            </h2>
          </div>
        </div>
        <nav className={open ? "fixed left-0 top-0 w-[300px] max-w-[90vw] h-full overflow-hidden bg-[#8027d0] z-[990] transition-[left]" : "fixed left-[-100vw] top-0 w-[300px] max-w-[90vw] h-full overflow-hidden bg-[#8027d0] z-[990] transition-[left]"}>
          <div className="ztmy-fix-menu-inner p-[80px_0_0]">
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
    </>
  );
}
