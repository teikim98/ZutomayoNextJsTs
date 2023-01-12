import Detail from "../components/Detail";

export default function Profile() {
    return (
        <>
            <Detail content="Profile">
                <section className="ztmy-profile-main">
                    <img
                        src="/zutomayo_profile.jpeg"
                        alt=""
                    />{" "}
                </section>
                <section className="ztmy-profile-text">
                    <div className="ztmy-under-inner">
                        <p></p>
                        <p>
                            作詞作曲ボーカル ACAね
                            による、不要な電化製品の始末にお困りの方必見のバンド。
                        </p>
                        <p>メンバーは特定の形をもたず、特殊な楽器編成をしがち。</p>
                        <p>
                            今宵もしゃもじでフロアを沸かす。これまでのことはウィキペディア参照するのが分かりやすい。
                        </p>{" "}
                        <p>real</p>
                    </div>
                </section>
            </Detail>
        </>
    );
}
