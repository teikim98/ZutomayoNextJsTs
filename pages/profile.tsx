import Detail from "../components/Detail";


//프로필 페이지
export default function Profile() {
  return (
    <>
      <Detail contentName="Profile">
        <section className="ztmy-profile-main">
          <img src="/zutomayo_profile.jpeg" alt="" />{" "}
        </section>
        <section className="ztmy-profile-text">
          <div className="ztmy-under-inner">
            <p>
              <img src="/logo2.svg" alt="Profile Logo" />
            </p>
            <p>
              作詞作曲ボーカル ACAね
              <br />
              による、不要な電化製品の始末にお困りの方必見のバンド。
            </p>
            <p>メンバーは特定の形をもたず、特殊な楽器編成をしがち。</p>
            <p>
              今宵もしゃもじでフロアを沸かす。
              <br /> これまでのことはウィキペディア参照するのが分かりやすい。
            </p>
          </div>
        </section>
      </Detail>
      <style jsx>{`
        .ztmy-profile-main {
          font-size: 0;
          line-height: 0;
          margin: 0 0 40px 0;
        }
        .ztmy-profile-text {
          margin: 0 20px 40px 20px;
        }
        @media screen and (min-width: 769px) {
          .ztmy-profile-text {
            margin: 0 50px 120px 50px;
          }
        }

        .ztmy-under-inner {
          margin: auto;
          padding: 0px;
          text-align: center;
        }

        @media screen and (min-width: 769px) {
          .ztmy-under-inner {
            padding: 80px 80px 0px 80px;
          }
        }

        .ztmy-profile-text p {
          margin: 1rem auto;
        }

        .ztmy-profile-text img {
          width: 408px;
          height: 59px;
          max-width: 70%;
          height: auto;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </>
  );
}
