import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { PochaModel } from './pocha-model';

@Component({
  selector: 'app-pocha-house',
  templateUrl: './pocha-house.component.html',
  styleUrls: ['./pocha-house.component.css'], 
  providers: [LanguageService]
})
export class PochaHouseComponent implements OnInit {

  language: String;
  pochaModelObj:PochaModel; 

  title : String; 
  desc : String; 
  cardTitle1 : String; 
  cardTitle2 : String; 
  cardTitle3 : String; 
  cardDesc1 : String; 
  cardDesc2 : String; 
  cardDesc3 : String; 

  constructor(private languageSelectedService: LanguageService) {
    this.setUpLanguage(); 
   }

  ngOnInit() {
  }

  setUpLanguage(){
    this.language = this.languageSelectedService.getNameTest();

    if (this.language.includes('es')) {

      this.title = "Poch@ House " ; 
      this.desc = "Un espacio cultural ubicado en la Ciudad de México que celebra y reivindica a una nueva cultura híbrida y multifacética en México; la del Spanglish, del exilio, de ser de aquí y de allá. "; 
      this.cardTitle1 = "SANTUARIO"; 
      this.cardTitle2 = "APOYO"; 
      this.cardTitle3 = "CULTURA"; 
      this.cardDesc1 = "Aquí podemos hablar en espanglish, ser nosotr@s mism@s con toda nuestra diversidad, encontrar a quienes nos respaldan, y crear una comunidad transfronteriza en medio de esta crisis. "; 
      this.cardDesc2 = "Asesoría y acompañamiento a las familias retornadas y deportadas en temas de apoyos urgentes, documentos de identidad, canalizaciones a empleo y capacitaciones, revalidación de estudios, movilidad internacional después del retorno/deportación, y la separación familiar."; 
      this.cardDesc3 = "Estamos haciendo arte y comunidad: spoken word, poesía, fotografía, conversaciones en inglés, noche de cine, cursos en español formal, yoga, clase de baile africana, clase de bachata, teatro, coro, y murales. Y a veces, nos echamos a andar…."; 

      this.pochaModelObj = new PochaModel(this.title, this.desc, this.cardTitle1, this.cardTitle2, this.cardTitle3, this.cardDesc1, this.cardDesc2, this.cardDesc3); 
    }
    else{

      this.title = "Poch@ House" ; 
      this.desc = "A cultural space based in Mexico City that celebrates and reclaims a new hybrid and multifaceted culture in Mexico, one of Spanglish, of exile, and of claiming belonging aquí y allá. "; 
      this.cardTitle1 = "SANCTUARY"; 
      this.cardTitle2 = "SUPPORT"; 
      this.cardTitle3 = "CULTURE"; 
      this.cardDesc1 = "Here we can speak Spanglish, be ourselves in all our diversity, find those who have got our backs, and create a cross-border community out of this crisis. "; 
      this.cardDesc2 = "Orientation and accompaniment for returning and deported families in regards to emergency support, ID documents in Mexico, employment training and opportunities, revalidation of education documents, international mobility after return/deportation, and family separation."; 
      this.cardDesc3 = "We are making art and community: spoken word, poetry, photography, English conversation nights, movie nights, Formal Spanish courses, yoga, African dance class, Bachata dance class, theater, choir, and murals. And sometimes, we take it on the road."; 

      this.pochaModelObj = new PochaModel(this.title, this.desc, this.cardTitle1, this.cardTitle2, this.cardTitle3, this.cardDesc1, this.cardDesc2, this.cardDesc3); 
    }
  }

}
