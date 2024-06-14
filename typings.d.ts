type Article = {
    author: string|null;
    category: string;
    country: string;
    description: string;
    image: string|null;
    language: string;
    published_at: string;
    source: string;
    tittle: string;
    Url: string;


}

type pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
}



type NewsResponse ={
    pagination: PossibleImageFileNameConvention;
    data: Article[];
}

type category =
|"general"
|"business"
|"entertainment"
|"health"
|"science"
|"sports"
|"technology";
