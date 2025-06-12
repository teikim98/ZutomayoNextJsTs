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
        <section>
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
      <div>
        <div>
          <p>
            <time>{time}</time>
          </p>
          <h3>
            {title}
            <br></br>
            {titleBr}
          </h3>

          <figure>
            <a href="/release/28/">
              <img src={img} alt="Album Image" />
            </a>
          </figure>

          <div>
            <a href="/release/28/">
              <span>VIEW MORE</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
