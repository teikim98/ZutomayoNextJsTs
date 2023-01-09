import Link from "next/link";
import { useState } from "react";
import Draggable from "react-draggable";

export default function Menu() {
    interface Position {
        x: number;
        y: number;
    }

    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const trackPos = (data: Position) => {
        setPosition({ x: data.x, y: data.y });
    };

    const [active, setActive] = useState(true);

    const onClickClose = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setActive((prev) => !prev);
        event.preventDefault();
    };

    return (
        <>
            <Draggable onDrag={(e, data) => trackPos(data)}>
                <div
                    className={
                        active ? "ztmy-pcmove-menu" : "ztmy-pcmove-menu windowmini"
                    }
                    id="pcMenu"
                >
                    <div className="title f-px">Menu</div>
                    <div className="ztmy-pcmove-inner">
                        <ul className="ztmy-pcmove-cont">
                            <li>
                                <Link href="/">
                                    <p className="f-px">TOP</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/news/">
                                    <p className="f-px">NEWS</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/photo/">
                                    <p className="f-px">PHOTO</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/">
                                    <p className="f-px">PROFILE</p>
                                </Link>
                            </li>
                        </ul>
                        <a
                            href="#"
                            className={active ? "btn-close-menu" : "btn-open-menu"}
                            data-close="#pcMenu"
                            onClick={onClickClose}
                        ></a>
                    </div>
                    <style jsx>{`
            .ztmy-pcmove-menu {
              display: block;
              position: fixed;
              z-index: 300;
              top: 80px;
              left: 26px;
              height: 250px;
              width: 182px;
              background-size: 100%;
              background-position: top;
              background-repeat: no-repeat;
              background-color: #e8d2e9;
              border: solid 1px #6f2add;
              box-shadow: 3px 3px 0 #a3919e;
              overflow: hidden;
              transition: height 0.3s;
              cursor: move;
              position: fixed;
              z-index: 1000;
            }

            .windowmini {
              height: 46px;
            }
            .ztmy-pcmove-inner {
              position: relative;
              padding: 59px 8px 0 8px;
            }
            .ztmy-pcmove-menu .title {
              margin: 0;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 46px;
              line-height: 26px;
              color: #fff;
              background-color: #6f2add;
              padding: 10px;
              font-size: 1.5rem;
            }
            .f-px {
              font-size : 1.5rem; 
              font-weight: bold;
              font-style: normal;
              transition : 0.3s;
            }
            .f-px:hover{
                color : red;
            }
            .ztmy-pcmove-cont {
              margin: 0 !important;
            }
            .ztmy-pcmove-inner .btn-close-menu {
              position: absolute;
              top: 11px;
              right: 11px;
              width: 28px;
              height: 28px;
              font-size: 0;
              line-height: 0;
              background-image: url(/btn_news_window_close.png);
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }
            .btn-open-menu {
              position: absolute;
              top: 11px;
              right: 11px;
              width: 28px;
              height: 28px;
              font-size: 0;
              line-height: 0;
              background-image: url(/btn_news_window_open.png);
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }
          `}</style>
                </div>
            </Draggable>
        </>
    );
}
