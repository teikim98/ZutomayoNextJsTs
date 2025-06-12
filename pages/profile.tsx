import Detail from "../components/Detail";


//프로필 페이지
export default function Profile() {
  return (
    <>
      <Detail contentName="Profile">
        <section>
          <img src="/zutomayo_profile.jpeg" alt="" />{" "}
        </section>
        <section>
          <div>
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
    </>
  );
}
