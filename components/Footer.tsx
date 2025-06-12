import { useRouter } from "next/router";


export default function Footer() {

  const router = useRouter();

  return (
    <>
      <footer className={router.pathname === '/' ? 'hidden' : ''}>
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
              <small>ALL RIGHTS RESERVED 2023&copy;ZUTOMAYO</small>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
