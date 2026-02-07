import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ 
  selector: 'app-main-page', 
  templateUrl: './main.page.html', 
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush })
export class MainPage {
  terms = [{id: "sem1", name: "Semestr 1"}, 
    {id: "sem2", name: "Semestr 2"},
    {id: "sem3", name: "Semestr 3"},
    {id: "sem4", name: "Semestr 4"},
    {id: "sem5", name: "Semestr 5"},
    {id: "sem6", name: "Semestr 6"},
    {id: "sem7", name: "Semestr 7"},
  ]
}
