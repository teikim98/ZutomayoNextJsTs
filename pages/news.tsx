import Detail from "../components/Detail";
import newsContent from "../components/News/news.json";

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
                    <section key={news.id} className="ztmy-news-wrap">
                        <NewsList key={news.id} {...news} />
                    </section>
                ))}
                <style jsx>{`

                
          .ztmy-news-wrap {
            margin-botton: 25px;
            padding: 0;
          }
          .ztmy-news-wrap:first-child{
            margin-top: 80px;
          }
        `}</style>
            </Detail>
        </>
    );
}

const NewsList: React.FC<newsProps> = ({ id, time, title }) => {
    return (
        <>
            <div className="ztmy-under-inner">
                <div className="ztmy-topics-head">
                    <p className="bold">{time}</p>
                    <h3 className="bold">{title}</h3>
                </div>
                <div className="ztmy-topics-more">
                    <a className="btn-link" href="#">
                        <span className="bold">View More</span>
                    </a>
                </div>
            </div>
            <style jsx>{`
        @media screen and (min-width: 769px) {
          .ztmy-under-inner {
            padding: 0 80px;
          }
        }
        .ztmy-under-inner {
          margin: 20px auto;
          padding: 0 20px;
        }
        
        .ztmy-topics-head {
          margin-bottom: 15px;
        }
        .bold {
          font-weight: 700;
        }
        .ztmy-topics-more {
          padding: 0 0 1rem 0;
          border-bottom: solid 1px #000;
          text-align: center;
        }
        .btn-link {
          display: inline-block;
          text-decoration: none;
          font-weight: 400;
          color: #000;
        }
        .btn-link span {
          display: block;
          background-color: #000;
          color: #fff;
          line-height: 22px;
          padding: 0 0.5rem;
          font-size: 10px;
          width: auto;
          height: 22px;
          transition: background-color 0.3s;
        }
        .btn-link span:hover {
          background-color: violet;
        }
      `}</style>
        </>
    );
};
