import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article-service/article.service';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articleR=<Article>{};
  @Input()
  article ?:Article; 
  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();
 /* @Output()
  createArticle: EventEmitter<Article> = new EventEmitter();
  @Output()
  getArticle: EventEmitter<Article> = new EventEmitter();*/


  constructor(private router:Router, private routA:ActivatedRoute,private articleService:ArticleService ){

  }
  delete(){
    this.deletedArticle.emit(this.article);
}
create(){
  this.createArticle.emit(this.article);
}
getArticleId()
{
  this.getArticle.emit(this.article);
}
public goBack():void
{
 this.router.navigateByUrl("['/articles']");
}

  ngOnInit(): void {

    
    const id:number=+this.routA.snapshot.paramMap.get('id')!;
    this.articleService.getArticle(id).subscribe((data: Article[])=>
    {this.article=data.find(article=>article.id==id)
    console.log('id',this.article)});
    
  }
}
