import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './article-service/article.service';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { HomeComponent } from './home/home.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FourOnFourComponent } from './four-on-four/four-on-four.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreateComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', component: ArticlesComponent },
  {path: 'articles/:id',component:ArticleComponent},
  
  {path: 'not-found', component: FourOnFourComponent},
  { path: '**', redirectTo:'/notfound' }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreateComponent,
    HomeComponent,
    ArticleDetailsComponent,
    FourOnFourComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      
        appRoutes,
        {enableTracing:true}

      
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
