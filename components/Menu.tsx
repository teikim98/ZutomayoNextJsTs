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
                    style={{ top: '280px', left: '26px', height: '220px', width: '150px' }}
                    id="pcMenu"
                >
                    <div className="title f-px">Menu</div>
                    <div className="ztmy-pcmove-inner">
                        <ul className="ztmy-pcmove-cont">
                            <li>
                                <Link href="/">
                                    <span className="f-px">TOP</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/news/">
                                    <span className="f-px">NEWS</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/release/">
                                    <span className="f-px">RELEASE</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/">
                                    <span className="f-px">PROFILE</span>
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
                </div>
            </Draggable>

        </>
    );
}
