
export interface Article
{
    id:number;
    title : string;
    author : string; 
    content: string;
}
export interface CreateArticle
{
    title : string;
    author : string; 
    content: string;
}