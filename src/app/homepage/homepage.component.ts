import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  homepagePathImage ="/assets/images/homepage-mobil.jpg";

  conceptText: string = "Alice et Anne, surnommées les '2 A', partagent une passion pour la course à pied. Constatant que beaucoup hésitent à se lancer dans ce sport, elles décident d'organiser des courses gratuites, encourageant ami.e.s et proches à se joindre à elles.";
  //
  // value1Title: string = "Entraite !";
  // value1Description: string = "Chacun se soutient et s’encourage pour donner le meilleur de soi et atteindre le but qu’il s’est fixé !";
  //
  // value2Title: string = "Sourire !";
  // value2Description: string = "Des courses…mais aussi des apéros organisés par l’association !";
  //
  // value3Title: string = "Solidarité !";
  // value3Description: string = "2€ sur l’adhésion annuelle sont reversés à une association caritative.";

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
