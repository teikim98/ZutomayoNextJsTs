import Link from "next/link"

type AppLayoutProps = {
    content: string;
};

export default function Header({ content }: AppLayoutProps) {

    return (
        <>
            <header className="ztmy-header">
                <div className="header-inner">
                    <div className="ztmy-header-menu" id="ztmy-header-menu">
                        <div className="ztmy-burger" id="ztmy-burger">
                            <div className="ztmy-burger-icon">
                                <span id="ztmy-burger-1" className="ztmy-burger-line"></span>
                                <span id="ztmy-burger-2" className="ztmy-burger-line"></span>
                                <span id="ztmy-burger-3" className="ztmy-burger-line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="ztmy-header-logo">
                        <h1>
                            <Link href="/">
                                <img src="/logo.svg" alt="" />
                            </Link>
                        </h1>
                    </div>
                    <div className="ztmy-header-title">
                        <h2 className="f-tt--b">
                            <span>{content}</span>
                        </h2>
                    </div>
                </div>
            </header>
            <style jsx>{`
        
        .ztmy-header {
          text-align: center;
          margin: 0;
          position: relative;
          height: 54px;
          min-height: 48px;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header {
            height: 94px;
            margin: 0 auto;
          }
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        @media screen and (min-width: 769px) {
          .header-inner {
            width: 50vw;
            margin: 0 auto;
          }
        }
        .ztmy-header-logo {
          display: block;
          width: 50vw;
          max-width: 360px;
          height: auto;
          margin: 0 auto;
          font-size: 0;
          line-height: 0;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header-logo {
            width: 36vw;
            max-width: 100%;
          }
        }
        .ztmy-header-title {
          text-align: center;
          padding: 0 0 0 3px;
          flex-basis: 18vw;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header-title {
            text-align: center;
          }
        }
        .ztmy-header-title h2 {
          margin: 0;
          padding: 0;
          line-height: 0;
          display: block;
          font-size: 1.5em;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        @media screen and (min-width: 769px) {
          .ztmy-header-title h2 span {
            font-size: 2.5vw;
          }
        }
        .ztmy-header-title h2 span {
          display: inline;
          background-color: #000000;
          color: #ffffff;
          padding: 0 0.2rem;
          line-height: 1.5;
        }
        .f-tt--b {
          font-style: normal;
          font-weight: 700;
        }
        .ztmy-header-menu {
          cursor: pointer;
          position: relative;
          z-index: 1000;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .ztmy-header-menu {
            position: fixed;
            top: 30px;
            left: 30px;
          }
        }

        @media (min-width: 992px) {
          .ztmy-header-menu {
            display: none;
          }
        }

        .ztmy-header-menu .ztmy-burger {
          padding: 5px;
        }

        .ztmy-header-menu .ztmy-burger-icon {
          position: relative;
          width: 24px;
        }

        .ztmy-header-menu .ztmy-burger-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .ztmy-header-menu .ztmy-burger-line:nth-child(1) {
          top: -7px;
        }

        .ztmy-header-menu .ztmy-burger-line:nth-child(2) {
          top: 0px;
        }

        .ztmy-header-menu .ztmy-burger-line:nth-child(3) {
          top: 7px;
        }

      `}</style>
        </>
    )
}