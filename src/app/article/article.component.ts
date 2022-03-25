import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title: string = "Whatever you want";
  content: string = "Some content goes here";
  isTechRelated = true;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    return this.isTechRelated === true ? 'blue' : 'yellow';
  }

  changeTech(){
  this.isTechRelated = !this.isTechRelated
  }
}
