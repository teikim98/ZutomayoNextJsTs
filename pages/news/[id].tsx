import { useRouter } from 'next/router'
import Detail from '../../components/Detail'
import newsArr from '../../components/News/news.json'


const NewsDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const newsId = parseInt(router.query.id as string, 10)


    return (
        <Detail contentName='News'>
            <p>
                {newsArr.content[newsId - 1].time}
            </p>
            <p>
                {newsArr.content[newsId - 1].title}
            </p>
            <br />
            <p>
                {newsArr.content[newsId - 1].inside}
            </p>
        </Detail>

    )
}

export default NewsDetail
