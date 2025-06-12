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
          <section key={news.id}>
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
      <div>
        <div>
          <p>{time}</p>
          <h3>{title}</h3>
        </div>
        <div>
          <Link href="/news/[id]" as={`/news/${id}`}>
            <span>View More</span>
          </Link>
        </div>
      </div>
    </>
  );
};
