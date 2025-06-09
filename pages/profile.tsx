import Detail from "../components/Detail";


//프로필 페이지
export default function Profile() {
  return (
    <>
      <Detail contentName="Profile">
        <section className="ztmy-profile-main text-[0px] leading-none mb-10">
          <img src="/zutomayo_profile.jpeg" alt="" />{" "}
        </section>
        <section className="ztmy-profile-text m-[0_20px_40px] md:m-[0_50px_120px]">
          <div className="ztmy-under-inner m-auto p-0 text-center md:p-[80px_80px_0]">
            <p>
              <img className="w-[408px] max-w-[70%] h-auto mx-auto" src="/logo2.svg" alt="Profile Logo" />
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
    </>
  );
}
