import { useRouter } from "next/router";


export default function Footer() {

  const router = useRouter();

  return (
    <>
      <footer className={router.pathname === '/' ? 'hidden' : 'ztmy-footer text-center p-[21px_25px] h-[90px] z-20'}>
        <div className="ztmy-footer-inner flex items-end justify-between p-[0_5px] md:flex-col md:items-start md:justify-start md:mx-auto md:items-center md:justify-center">
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
            <p className="ztmy-footer-copy ztmy-cmn-txt-sm ztmy-pc text-[8px] text-right whitespace-nowrap md:text-center md:text-white md:text-[14px] md:p-[0_2rem]">
              <small className="f-tt--b">ALL RIGHTS RESERVED 2023&copy;ZUTOMAYO</small>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
