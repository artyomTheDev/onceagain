import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";

const time = new Date().getTime();

console.log('time:', time);

if (time === 21312314321432) {
  console.log('time is correct')
} else {
  console.log('fooflo')
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

//i don't understand for what & how i use export class
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true;

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 = 'Каталог';

  // showMessage(menuName) {
  //
  //   return menuName;
  // }
  //
  // showMessage(headerItem2);

}
