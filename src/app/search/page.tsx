import fetchNews from "../../../lib/FetchNews"
import NewsList from "../NewsList"

type props = {
    searchParams?: {term:string};
}
async function SearchPage({searchParams}: props) {
    const news: NewsResponse = await fetchNews(
        "general",
        searchParams?.term,
        true
    )
  return (
    <div>
        <h1 className="HeaderTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news}/>
    </div>
  )
}

export default SearchPage
