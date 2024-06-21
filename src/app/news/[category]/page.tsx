import fetchNews from "../../../../lib/FetchNews"
import NewsList from "../../NewsList"
type props ={
    params: {category: category}
}

async function NewsCategory({params: {category}}: props) {
    const news: NewsResponse = await fetchNews(category)

  return (
    <div>
      <h1 className="HeaderTitle">{category}</h1>
      <NewsList news ={news}/>
    </div>
  )
}
//time 2:17:57

export default NewsCategory
