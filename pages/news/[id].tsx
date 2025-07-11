import { useRouter } from 'next/router'
import Detail from '../../components/Detail'
import newsArr from '../../components/News/news.json'



const NewsDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const newsId = parseInt(router.query.id as string, 10)




    return (
        <Detail contentName='News'>
            <div className='news-container mt-[50px]'>
                <h2>
                    {newsArr.content[newsId].title}
                </h2>
                <p className='news-content mt-[100px]'>
                    {newsArr.content[newsId].inside}
                </p>
            </div>
        </Detail>

    )
}

export default NewsDetail
