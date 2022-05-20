import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article-service/article.service';
import { Article ,CreateArticle} from '../article/article.model';
import { ArticlesComponent } from '../articles/articles.component';


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  articleForm : FormGroup;
  router: any;
  articleService: any;
  article!: CreateArticle;
  articles: ArticlesComponent | any;
  constructor(private fb: FormBuilder,articleService: ArticleService, router:Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }
createArticle():void
{
  const formModel=this.articleForm.value;
  const newArticle:CreateArticle=
  {
    title:formModel.title,
    content:formModel.content,
    author:formModel.author
  };
 
this.articles.create(newArticle);
  this.articleService.createArticle(newArticle).subscribe(()=>this.router.navigateByUrl('/'));
 console.log(this.articleForm.value);
 console.log('bien enregistré ')
}

  ngOnInit(): void {
    this.articleForm=new FormGroup({
      title: new FormControl(),
      content : new FormControl(),
      authors :new FormControl(),
    })
  }

}
