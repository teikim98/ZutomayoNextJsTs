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
                    <div className="title">Menu</div>
                    <div>
                        <ul>
                            <li>
                                <Link href="/">
                                    <span>TOP</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/news/">
                                    <span>NEWS</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/release/">
                                    <span>RELEASE</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/">
                                    <span>PROFILE</span>
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
