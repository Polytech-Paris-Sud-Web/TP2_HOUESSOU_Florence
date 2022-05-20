import { Component, EventEmitter, OnInit } from '@angular/core';
import { Next } from 'react-bootstrap/esm/PageItem';

import { ArticleService } from '../article-service/article.service';
import { Article, CreateArticle } from '../article/article.model';
import { catchError, from, Observable} from 'rxjs';
import {map,filter} from 'rxjs/operators';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {
 lastUpdate=new Date(); 
  articles!: Article[];
  status: string | undefined;

  constructor(private articleService: ArticleService) {
    
  }

  ngOnInit() {
    this.articleService
    .getArticles()
    .subscribe((value=>
      {
        this.articles=value;
      }));
  
        
      
    
  }
delete(article:Article){
    
    this.articleService
    .deleteArticle(article.id)
    .subscribe
    (() => { this.articleService.getArticles().subscribe((value)=>{
      this.articles = value;})});
     /* if(article.id>0)
      {
        this.articles.splice(article.id,1);
      */
      for(let article2 of this.articles)
      {
        if(article2==article)
        {
          this.articles.splice(article.id,1);
        }
      }
   
}
create(article:CreateArticle){
  
  const newA={
    id:0,
    title:'',
    content:'',
    author:''
  }

  newA.title=article.title;
  newA.author=article.author;
  newA.content=article.content;
  newA.id=this.articles[this.articles.length-1].id+1;
  this.articles.push(newA);
  /* if(article.id<1)
    {
      this.articleService
      .createArticle(article)
      .subscribe(() =>
       { this.articleService
        .getArticles()
        .subscribe((value)=>
        {
        this.articles = value;})});
        this.articles.push.apply(article);
    }*/
  
    
}
getArticleById(id:number)
{
  
  const article =this.articles.find(
    (data)=>
    {
      return data.id==id;
    }
  )
  return article; 
}
}
