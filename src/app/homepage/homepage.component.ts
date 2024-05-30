import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonComponent} from "../button/button.component";
import {ValueCardComponent} from "../value-card/value-card.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ButtonComponent,
    ValueCardComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  homepagePathImage = "/assets/images/homepage-mobil.jpg";
  homepageTitle ="Vous ne courrez plus jamais seul.e !";

  introductionText: string ="A2 Running Bordeaux réunit toutes les personnes qui souhaitent courir en groupe, dans la bonne humeur, l’entraide et surtout sans esprit de compétition.";

  conceptTitle: string = 'Notre concept';
  conceptText: string = 'Ces deux amies dans la vie partagent le plaisir de la course dans un esprit de soutien et d’encouragement ! \n' +
    'Passionnées par ce sport, elles constatent en discutant avec leurs amis que beaucoup n’osent pas se mettre à la course à pied, craignant l’échec ou n’aimant tout simplement pas être seul. \n' +
    'Alors, avec plusieurs centaines de kilomètres à leur actif, Anne et Alice décident de donner rendez-vous à des amis, des proches, pour une course hebdomadaire tout en les encourageant et en communiquant leurs conseils….\n' +
    'Peu à peu, le groupe grandit conduisant ainsi nos deux ambassadrices à concrétiser ce beau projet. \n' +
    'Fin 2013, elles sont rejointes par Sophia, Florence, Marie, Marion, Barbara et Kelly. L’association A2 running est créée.';

  valueTitle: string = 'Nos valeurs';
  value1Title: string = "Entraide !";
  value1Description: string = "Chacun se soutient et s’encourage pour donner le meilleur de soi et atteindre le but qu’il s’est fixé !";
  value2Title: string = "Sourire !";
  value2Description: string = "Des courses…mais aussi des apéros organisés par l’association !";
  value3Title: string = "Solidarité !";
  value3Description: string = "2€ sur l’adhésion annuelle sont reversés à une association caritative.";

  constructor(private router: Router) {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
