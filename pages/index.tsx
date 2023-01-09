import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="ztmy" className="home">
        <div className="inner-wrapper">
          <picture className="top-bg">
            <source media="(min-width: 769px)" srcSet="/main_kv_pc.jpeg" />
            <source media="(max-width: 769px)" srcSet="/main_kv_sp.jpeg" />
            <img src="/main_kv_pc.jpeg" alt="bg" />
          </picture>
        </div>
      </div>


      <style jsx>{`
        .home {
          width: 100vw;
          max-width: 100%;
          margin : 0 auto;
        }
        img{
          object-fit:cover
          overflow:hidden;
          
        }
      `}</style>
    </>
  );
}
