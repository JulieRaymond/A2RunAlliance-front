import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A2RunAlliance-front';
}
