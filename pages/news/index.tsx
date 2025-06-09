import Link from "next/link";
import Detail from "../../components/Detail";
import newsContent from "../../components/News/news.json";

interface newsProps {
  id: number;
  time: string;
  title: string;
}

//뉴스 페이지
export default function News() {
  return (
    <>
      <Detail contentName="News">
        {newsContent.content.map((news: newsProps) => (
          <section key={news.id} className="ztmy-news-wrap mb-[25px] p-0 first:mt-[80px]">
            <NewsList key={news.id} {...news} />
          </section>
        ))}
      </Detail>
    </>
  );
}

const NewsList: React.FC<newsProps> = ({ id, time, title }) => {
  return (
    <>
      <div className="ztmy-under-inner m-[20px_auto] p-[0_20px] md:p-[0_80px]">
        <div className="ztmy-topics-head mb-[15px]">
          <p className="font-bold">{time}</p>
          <h3 className="font-bold">{title}</h3>
        </div>
        <div className="ztmy-topics-more pb-4 border-b border-black text-center">
          <Link href="/news/[id]" as={`/news/${id}`} className="inline-block text-black">
            <span className="block bg-black text-white leading-[22px] px-2 text-[20px] transition-colors hover:bg-violet-500 font-bold">View More</span>
          </Link>
        </div>
      </div>
    </>
  );
};
