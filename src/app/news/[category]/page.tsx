import fetchNews from "../../../../lib/FetchNews"
import NewsList from "../../NewsList"
import { categories } from "../../../../constants"
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

export default NewsCategory

export async function generateStaticParams() {
  return categories.map(category => {
    category: category
  })

  
  
  
}
