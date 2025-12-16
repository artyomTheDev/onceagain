import { Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

//i don't understand for what & how i use export class
export class AppComponent {
  title = 'mentoring-first-project';
count = 0;
}
