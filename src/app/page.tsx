import { categories } from "../../constants";
import fetchNews from "../../lib/FetchNews";
import NewsList from "./NewsList";
import response from "../../response.json"

async function Homepage() {
  // Fetch news data
  const news: NewsResponse | null = await fetchNews(categories.join(','));

  if (!news || news.data.length === 0) {
    // Handle the case where news is null or empty
    console.error("Failed to fetch news or no news available");
    return (
      <div>
        <p>Failed to load news. Please try again later.</p>
      </div>
    );
  }

  console.log(news);

  return (
    <div>
      <NewsList news={news}/>
    </div>
  );
}

export default Homepage;
