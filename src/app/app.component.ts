import {Component, HostBinding, inject} from '@angular/core';
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ShadowCartDirective} from "./directives/shadow-cart.directive";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";
import {MatButton} from "@angular/material/button";
import {AuthService} from "./auth/auth.service";
import {LoginResult} from "./login-dialog/login-result.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, DatePipe, ShadowCartDirective, MatButton, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  dialog = inject(MatDialog);
  authService = inject(AuthService);
  user$ = this.authService.user$

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

  public date:any = new Date().getTime();

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

  currentInfoAboutUser() {
    console.log(this.authService.user$)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
        title: 'Выберите тип входа',
      },
      height: '400px',
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((result: LoginResult) => {
      if (result) {
        this.authService.login(result)
        console.log(result)
      }
    });
  }
}
