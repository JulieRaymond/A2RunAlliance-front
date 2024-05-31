import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {MatIconModule} from "@angular/material/icon";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {FooterComponent} from "./footer/footer.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {MAT_DATE_LOCALE} from "@angular/material/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MatIconModule, NavigationBarComponent, FooterComponent, HomepageComponent],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
    templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'A2RunAlliance-front';
}
