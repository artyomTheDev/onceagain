import {Component, HostBinding} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgForOf, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'mentoring-first-project';

  @HostBinding('class.dark-theme')
  isDarkMode:boolean = false;

  isShowCatalog:boolean = true;

  isShowBanner:boolean = true;

  isUpperCase:boolean = true;

  menuItems:string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

  readonly newPages:number[] = [5, 4, 3, 2, 1];

  readonly aboutCompany:string = this.showMessage('О компании')

  readonly headerItem1:string = 'Главная';

  readonly headerItem2:string = 'О компании';

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
