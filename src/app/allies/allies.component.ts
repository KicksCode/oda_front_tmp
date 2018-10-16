import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.css'],
  providers : [LanguageService]
})
export class AlliesComponent implements OnInit {

  language: String;

  title: String; 
  desc : String; 

  constructor(private languageSelectedService: LanguageService) {
    this.setUpCmmunityCaptions(); 
   }

  ngOnInit() {
  }

  setUpCmmunityCaptions(){
    this.language = this.languageSelectedService.getNameTest();

    if (this.language.includes('es')) {
      this.title = "Nuestros Aliados"; 
      this.desc = "ODA es parte de un ecosistema en crecimiento que está respondiendo a las necesidades de personas deportadas y sus familias. Formamos parte de un proceso dinámico para construir la convergencia de voces y experiencias en la secuela del retorno y para conectar con otras luchas, como las luchas de género. En colaboración con nuestras contrapartes, apoyamos a proyectos concretos que benefician a nuestra comunidad, nos  unimos a otros movimientos con el fin de luchar y enfrentar a la violencia, la discriminación, amplificando a las voces artísticas y culturales de los que se encuentran en exilio."
    }
    else{
      this.title = "Our Allies"; 
      this.desc = "ODA is part of a growing ecosystem of organizations responding to the needs of deported people and their families. We are a part of a dynamic and ongoing process to build the convergence of voices and experiences in the aftermath of return, and to connect with other movements for justice, such as gender rights. In collaboration with our partners, we support concrete projects to benefit our community, join with other movements to denounce discrimination and violence, and amplify the artistic and cultural voices of those in exile. "; 
    }
  
  }
}
