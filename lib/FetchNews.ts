import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: string,
    keywords?: string,
    isDynamic?: boolean
): Promise<NewsResponse> => {
    // GraphQL query
    const query = gql`
        query myQuery($access_key: String!, $categories: String!, $keywords: String) {
            myQuery(access_key: $access_key, categories: $categories, countries: "gb", sort: "published_desc", keywords: $keywords) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;

    try {
        // Log API keys for debugging (remove in production)
        console.log("STEPZEN_API_KEY:", process.env.NEXT_PUBLIC_STEPZEN_API_KEY);
        console.log("MEDIASTACK_API_KEY:", process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY);

        if (!process.env.NEXT_PUBLIC_STEPZEN_API_KEY || !process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY) {
            throw new Error("API keys are missing");
        }

        // Fetch function with next.js 14 caching
        const res = await fetch('https://campoapache.us-east-a.ibm.stepzen.net/api/musty-panther/__graphql', {
            method: 'POST',
            cache: isDynamic ? "no-cache" : "default",
            headers: {
                "content-type": "application/json",
                Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,  // Ensure correct header format
            },
            body: JSON.stringify({
                query,
                variables: {
                    access_key: process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY,
                    categories: category,  // Corrected spelling
                    keywords: keywords,
                }
            })
        });

        console.log("LOADING NEW DATA FROM API for category >>>", category, keywords);

        if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.statusText}`);
        }

        const newsResponse = await res.json();

        // Check if the response contains the expected structure
        if (!newsResponse.data || !newsResponse.data.myQuery) {
            throw new Error(`Unexpected response structure: ${JSON.stringify(newsResponse)}`);
        }

        // Sort function by images vs not images present
        const news = sortNewsByImage(newsResponse.data.myQuery);

        // Return news
        return news;
    } catch (error) {
        console.error("Failed to fetch news:", error);
        // Return a default NewsResponse structure in case of error
        return {
            data: [],
            pagination: {
                count: 0,
                limit: 0,
                offset: 0,
                total: 0,
            },
        };
    }
}

export default fetchNews;
