import { Component, HostBinding, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgIf } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ShadowCartDirective } from "./directives/shadow-cart.directive";
import { MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { MatButton } from "@angular/material/button";
import { AuthService } from "./auth/auth.service";
import { LoginResult } from "./login-dialog/login-result.interface";
import { tap } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, DatePipe, ShadowCartDirective, MatButton, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  dialog = inject<MatDialog>(MatDialog);
  authService = inject<AuthService>(AuthService);
  user$ = this.authService.user$;

  title = 'mentoring-first-project';

  @HostBinding('class.dark-theme')
  public isDarkMode: boolean = false;

  public isShowCatalog: boolean = true;

  public isUpperCase: boolean = true;

  public menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

  readonly aboutCompany: string = this.showMessage('О компании');

  readonly headerItem1: string = 'Главная';

  readonly headerItem3: string = 'Каталог';

  public counter: number = 0;

  public currentColorIndex: number = 0;

  public colors: string[] = ['Красный', 'Жёлтый', 'Зелёный'];

  public date: number = new Date().getTime();

  public showMessage(headerItem: string): string {
    return headerItem;
  };

  public changeMenuText(): void {
    this.menuItems = this.menuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase
  }

  public changeCounter(): void {
    if (this.counter < 5) {
      this.counter = this.counter + 1
    } else {
      this.counter = 0;
    }
  }

  public changeColor(): void {
    if (this.currentColorIndex < 2) {
      this.currentColorIndex = this.currentColorIndex + 1;
    } else {
      this.currentColorIndex = 0;
    }
  };

  public toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  };

  public openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {
        title: 'Выберите тип входа',
      },
      height: '400px',
      width: '400px'
    });
    dialogRef.afterClosed().pipe(
      tap((result: LoginResult | undefined) => {
        if (result) this.authService.login(result);
      })
    ).subscribe()
  };
}
