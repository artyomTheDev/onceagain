import { Component, HostBinding } from '@angular/core';
import { NgIf } from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'mentoring-first-project';

  @HostBinding('class.dark-theme')
  isDarkMode:boolean = false;

  isShowCatalog:boolean = true;

  isUpperCase:boolean = true;

  menuItems:string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

  readonly aboutCompany:string = this.showMessage('О компании')

  readonly headerItem1:string = 'Главная';

  readonly headerItem3:string = 'Каталог';

  public counter:number = 0;

  currentColorIndex:number = 0;

  colors:string[] = ['Красный', 'Жёлтый', 'Зелёный']

  showMessage(headerItem:string) {

    return headerItem
  }

  changeMenuText(){
this.menuItems = this.menuItems.map(
  item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
);
    this.isUpperCase = !this.isUpperCase
  };

  changeCounter(){
    if (this.counter < 5){
      this.counter = this.counter + 1
    } else {
      this.counter = 0;
    }
  }
  changeColor(){
    if (this.currentColorIndex < 2){
      this.currentColorIndex = this.currentColorIndex + 1;
    } else {
      this.currentColorIndex = 0;
    }
  }
  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
  }
}
