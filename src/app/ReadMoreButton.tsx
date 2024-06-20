"use client";
import { useRouter } from "next/navigation";

type Article = {
  [key: string]: any; // Ensure that the article type can have any key-value pairs
};

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500 cursor-pointer text-blue-500"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
