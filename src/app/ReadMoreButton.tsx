"use client";
import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/article/${article.title}`)}
      className="cursor-pointer text-blue-500 hover:underline"
    >
      Read more
    </div>
  );
}

export default ReadMoreButton;
