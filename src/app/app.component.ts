import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    templateUrl: './app.component.html',
  template: `
  <nav class="navbar navbar-inverse">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" routerLink="#">Starry Sky</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
        <li>  <a routerLink="/stars" routerLinkActive="active">Stars</a></li>
        <li><a routerLink="/pictures" routerLinkActive="active">Pictures</a></li>
      </ul>
    </div>
  </div>
 </nav>
     <h1>{{title}}</h1>
 <router-outlet></router-outlet>
    `,
})
export class AppComponent {
  title = '';
}