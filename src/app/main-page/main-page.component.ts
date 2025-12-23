import {Component} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'main-page',
  standalone: true,
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.scss',
  imports: [
    NgIf
  ]
})

export class MainPageComponent{
  isShowBanner:boolean = true;
}
