import Detail from "../components/Detail";
import disco from "../components/Disco/disco.json";
import Image from "next/image";
//앨범 내부 data type
interface discoProps {
  id: number;
  time: string;
  title: string;
  titleBr: string;
  img: string;
  imgLink: string;
}

//Release 페이지
export default function Release() {
  return (
    <>
      <Detail contentName="release">
        <section className="ztmy-disco-wrap flex flex-wrap items-start justify-between md:justify-start md:mx-auto md:p-20">
          {disco.content.map((album: discoProps) => (
            <DiscoList key={album.id} {...album} />
          ))}
        </section>
      </Detail>
    </>
  );
}

//DiscoProps에서 객체를 받아와 태그에 뿌려줌
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
      <div className="ztmy-disco-item w-1/2 md:w-1/4 md:max-w-[270px] text-center md:m-[0_auto_80px]">
        <div className="ztmy-disco-inner p-[10px] flex flex-col items-center">
          <p className="ztmy-disco-date text-center h-[1.5rem] font-bold block">
            <time className="">{time}</time>
          </p>
          <h3 className="ztmy-disco-ttl bg-[url('/disco_ttl_bg.png')] bg-center bg-no-repeat bg-contain p-[0_0_6px] h-[16vw] w-full flex items-center justify-center flex-col mb-[10px] text-[0.8rem] md:h-[100px]">
            {title}
            <br></br>
            {titleBr}
          </h3>

          <figure className="ztmy-disco-image leading-none text-center mb-4">
            <a href="/release/28/" className="group block overflow-hidden w-[180px] h-[180px]">
              <img className="transition-transform group-hover:scale-110" src={img} alt="Album Image" />
            </a>
          </figure>

          <div className="align-center">
            <a href="/release/28/" className="btn-link inline-block">
              <span className="block bg-black text-white leading-[33px] px-2 text-[1.5rem] transition-colors hover:bg-violet-500">VIEW MORE</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
