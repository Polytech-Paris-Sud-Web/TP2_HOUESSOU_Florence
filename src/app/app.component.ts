import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-app';
  content='mycontent';
  author='myauthor';


  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {

      if (this.swUpdate.isEnabled) {

          this.swUpdate.available.subscribe(() => {

              if(confirm("New version available. Load New Version?")) {

                  window.location.reload();
              }
          });
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(() => {
              console.log('Installation successful!');
            }, (err) => {
              console.log('Service Worker registration failed: ', err);
            });
          }
      }        
  }
}
