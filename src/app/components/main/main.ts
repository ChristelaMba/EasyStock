import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article";
import { AsideContainerComponent } from '../aside-container/aside-container';

@Component({
  selector: 'app-main',
  imports: [ArticleComponent, AsideContainerComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainComponent {}
