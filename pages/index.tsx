import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="ztmy" className="home">
        <div className="inner-wrapper">
          <picture className="top-bg">
            <source media="(min-width: 769px)" srcSet="/main_kv_pc.jpeg" />
            <source media="(max-width: 769px)" srcSet="/main_kv_sp.jpg" />
            <img src="/main_kv_pc.jpeg" alt="bg" />
          </picture>
        </div>
      </div>

      <style jsx>{`
        .home {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        .top-bg img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
