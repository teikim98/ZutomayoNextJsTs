import Link from "next/link";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";

type BoxLayoutProps = {
  width: number;
  height: number;
  top: number;
  left: number;
  time: number;
};

export default function Popup({ width, height, top, left, time }: BoxLayoutProps) {
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

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      {showPopup && (
        <Draggable onDrag={(e, data) => trackPos(data)}>
          <div
            className={
              active
                ? `popup-box ${showPopup ? "ztmy-pcmove-menu" : ""}`
                : "windowmini"
            }
            id="pcMenu"
          >
            <div className="title f-px">Popup</div>
            <div className="ztmy-pcmove-inner">
              <ul className="ztmy-pcmove-cont">
                <li>
                  <Link href="/">
                    <p className="f-px">inside</p>
                  </Link>
                </li>
              </ul>
              <a
                href="#"
                className="btn-close-menu"
                data-close="#pcMenu"
                onClick={onClickClose}
              ></a>
            </div>
          </div>
        </Draggable>
      )}
      <style jsx>{`
        .popup-box {
          width: 0;
          height: 0;
          overflow: hidden;
          animation: showBox 0.7s ease-in;
          animation-duration: ${time}s;
          transform-origin: top; /* optional to set the scale starting point*/
        }
        .ztmy-pcmove-menu {
          display: block;
          position: fixed;
          z-index: 300;
          top: ${top}%;
          left: ${left}%;
          height: ${height}px;
          width: ${width}px;
          background-size: 100%;
          background-position: top;
          background-repeat: no-repeat;
          background-color: #e8d2e9;
          border: solid 1px #6f2add;
          box-shadow: 3px 3px 0 #a3919e;
          overflow: hidden;
          transition: height 1.5s linear;
          cursor: move;
          position: fixed;
          z-index: 1000;
          transform: scale(1);
        }

        @keyframes showBox {
          0% {
            width: 0;
            height: 0;
            transform: scale(0);
          }
          100% {
            height: ${height}px;
            width: ${width}px;
            transform: scale(1);
          }
        }

        .windowmini {
            display : none;
            opacity : 0;
        }
        .ztmy-pcmove-inner {
          position: relative;
          padding: 37px 8px 0 8px;
        }
        .ztmy-pcmove-menu .title {
          margin: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 30px;
          line-height: 8px;
          color: #fff;
          background-color: #6f2add;
          padding: 10px;
          font-size: 1rem;
          font-weight: bold;
        }
        .f-px {
          font-size: 1rem;
          font-weight: regular;
          font-style: normal;
          transition: 0.3s;
        }
        .f-px:hover {
          color: red;
        }
        .ztmy-pcmove-cont {
          margin: 0 !important;
        }
        .ztmy-pcmove-inner .btn-close-menu {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 14px;
          height: 14px;
          font-size: 0;
          line-height: 0;
          background-image: url(/btn_news_window_close.png);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}
