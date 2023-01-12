export default function Footer() {
  return (
    <>
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
            <p className="ztmy-footer-copy ztmy-cmn-txt-sm ztmy-pc">
              <small className="f-tt--b">
                ALL RIGHTS RESERVED 2023&copy;ZUTOMAYO
              </small>
            </p>
          </div>
        </div>
      </footer>
      <style jsx>{`

        .ztmy-footer {
          text-align: center;
          padding: 21px 25px 21px;
          height: 90px;
          z-index:2;
          margin: 0;
        }

        .ztmy-footer-copy {
          font-size: 8px;
          text-align: right;
          white-space: nowrap;
        }
        .ztmy-cmn-txt-sm {
          font-size: 12px;
        }
        .ztmy-footer-inner {
          display: flex;
          align-items: flex-end;
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
            width: 100vw;
            margin: 0;
            padding: 0;
            background: transparent;
          }
        }
        
        @media screen and (min-width: 769px) {
          .ztmy-footer {
            background-color: #000000;
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
          .ztmy-footer-inner {
            margin: 0 auto;
            justify-content: center;
            align-items: center;
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
            font-size: 14px;
            padding: 0 2rem 0 2rem;
          }
        }
        
      `}</style>
    </>
  );
}
