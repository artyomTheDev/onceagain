import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

for(let i:number = 0; i < 5; i++){
  console.log(i)
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog:boolean = true;

  isShowBanner:boolean = true;

  readonly newPages:number[] = [5, 4, 3, 2, 1];

  readonly aboutCompany:string = this.showMessage('О компании')

  readonly headerItem1:string = 'Главная';

  readonly headerItem2:string = 'О компании';

  readonly headerItem3:string = 'Каталог';

  showMessage(headerItem:string) {

    return headerItem
  }
}
