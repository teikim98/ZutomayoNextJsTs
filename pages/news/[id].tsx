import { useRouter } from 'next/router'
import Detail from '../../components/Detail'
import newsArr from '../../components/News/news.json'



const NewsDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const newsId = parseInt(router.query.id as string, 10)




    return (
        <Detail contentName='News'>
            <div className='news-container'>
                <h2>
                    {newsArr.content[newsId].title}
                </h2>
                <p className='news-content'>
                    {newsArr.content[newsId].inside}
                </p>
            </div>
            <style jsx>{`
                .news-container{
                    margin-top : 50px;
                }
                .news-content {
                    margin-top : 100px;
                }
            `}</style>
        </Detail>

    )
}

export default NewsDetail
