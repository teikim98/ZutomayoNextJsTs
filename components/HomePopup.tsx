import Link from "next/link";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";

// 메인 페이지에 넘겨줄 Props들의 타입
type BoxLayoutProps = {
  width: number;
  height: number;
  top: number;
  left: number;
  time: number;
  title: string;
  content: string;
  id: number;
};

export default function Popup({ width, height, top, left, time, title, content, id }: BoxLayoutProps) {
  //DragableBox를 쓰기위한 types
  interface Position {
    x: number;
    y: number;
  }

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const trackPos = (data: Position) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [active, setActive] = useState(true);

  //클릭시 팝업창을 닫는 onClick 함수
  const onClickClose = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setActive((prev) => !prev);
    event.preventDefault();
  };

  //메인 페이지 렌더링 시 팝업되게 하는 useEffect
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
            style={{ top: `${top}%`, left: `${left}%`, height: `${height}px`, width: `${width}px`, '--popup-time': `${time}s` } as React.CSSProperties}
            id="pcMenu"
          >
            <div className="title f-px">{title}</div>
            <div className="ztmy-pcmove-inner">
              <ul className="ztmy-pcmove-cont">
                <li>
                  <Link href="/news/[id]" as={`/news/${id}`}>
                    <p className="f-px">{content}</p>
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
    </>
  );
}
