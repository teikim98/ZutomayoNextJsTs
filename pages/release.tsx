import Detail from "../components/Detail";
import disco from "../components/Disco/disco.json";
import Image from "next/image";

interface discoProps {
    id: number;
    time: string;
    title: string;
    titleBr: string;
    img: string;
    imgLink: string;
}

export default function Release() {
    return (
        <>
            <Detail content="release">
                <section className="ztmy-disco-wrap">
                    {disco.content.map((album: discoProps) => (
                        <DiscoList key={album.id} {...album} />
                    ))}
                </section>
            </Detail>
            <style jsx>{`
        .ztmy-disco-wrap {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        @media (min-width: 769px) {
          .ztmy-disco-wrap {
            justify-content: flex-start;
            margin: 0 auto;
            padding: 80px;
          }
        }
      `}</style>
        </>
    );
}

const DiscoList: React.FC<discoProps> = ({
    id,
    time,
    title,
    titleBr,
    img,
    imgLink,
}) => {
    return (
        <>
            <div className="ztmy-disco-item">
                <div className="ztmy-disco-inner">
                    <p className="ztmy-disco-date">
                        <time className="">{time}</time>
                    </p>
                    <h3 className="ztmy-disco-ttl">
                        {title}
                        <br></br>
                        {titleBr}
                    </h3>

                    <figure className="ztmy-disco-image">
                        <a href="/release/28/">
                            <Image src={img} alt="img" width={180} height={180}></Image>
                        </a>
                    </figure>

                    <div className="align-center">
                        <a href="/release/28/" className="btn-link">
                            <span className="">VIEW MORE</span>
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .ztmy-disco-item {
          width: 50%;
          
        }

        @media (min-width: 769px) {
          .ztmy-disco-item {
            width: 25%;
            max-width: 270px;
            text-align: center;
            margin: 0 auto 80px;
          }
        }

        .ztmy-disco-inner {
          padding: 10px;
        }

        .ztmy-disco-image {
          line-height: 0;
          font-size: 0;
          margin-bottom: 1rem;
          text-align: center;
        }

        .ztmy-disco-image:hover img{
            transform: scale(1.1);
        }

        .ztmy-disco-image a {
          overflow: hidden;
          display: block;
        }

        .ztmy-disco-date {
          text-align: center;
          height: 1.5rem;
          display: block;
          font-weight: bold;
        }

        .ztmy-disco-ttl {
          background-image: url("/disco_ttl_bg.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          padding: 0 0px 6px;
          height: 16vw;
          width: 100%;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          flex-direction: column;
          margin-bottom: 10px;
          font-size: 0.8rem;

        }

        @media (min-width: 769px) {
          .ztmy-disco-ttl {
            height: 100px;
          }
        }
        .btn-link {
          display: inline-block;
          text-decoration: none;
        }
        .btn-link span {
          display: block;
          background-color: #000000;
          color: #ffffff;
          line-height: 33px;
          padding:   0 0.5rem;
          font-size: 1.5rem;
          width: auto;
          height: 33px;
          transition: background-color 0.3s;
          
        }
        .btn-link span:hover{
            background-color : violet;
        }
      `}</style>
        </>
    );
};
