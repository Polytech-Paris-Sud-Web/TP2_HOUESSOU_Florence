import { Injectable } from '@angular/core';
import { Article, CreateArticle,  } from '../article/article.model';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http'
import { catchError, from, Observable, throwError } from 'rxjs';
import {map,filter,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  constructor(private http : HttpClient,httpM:HttpClientModule) {
  }

public getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>("http://localhost:3000/articles").pipe(
  );
}
/*  handleError(handleError: any): import("rxjs").OperatorFunction<Article[], any> {
    throw new Error('Method not implemented.');
  }*/

public deleteArticle(id:number) {
  
  return this.http.delete<Article[]>(`$http://localhost:3000/articles/${id}`);
}
public createArticle(article:CreateArticle): Observable<Article[]> {
  
  return this.http.post<Article[]>('http://localhost:3000/articles/new',article)
}
public getArticle(id:number) {
  return this.http.get<Article[]>(`http://localhost:3000/articles/${id}`).pipe(
  );
}
}
