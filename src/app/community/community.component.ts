import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers : [LanguageService]
})
export class CommunityComponent implements OnInit {

  language: String;

  title: String; 
  pic1Desc: String;
  pic2Desc: String;
  pic3Desc: String;
  pic4Desc: String;
  pic5Desc: String;
  pic6Desc: String;
  pic7Desc: String;
  pic8Desc: String;
  pic9Desc: String;
  pic10Desc: String;

  constructor(private languageSelectedService: LanguageService) {
    this.setUpCmmunityCaptions(); 
   }

  ngOnInit() {
  }


  setUpCmmunityCaptions(){
    this.language = this.languageSelectedService.getNameTest();

    if (this.language.includes('es')) {
      this.title="Nuestra Comunidad"; 
      this.pic1Desc ="La resistencia también se hace bailando en Poch@ House.";
      this.pic2Desc ="ODA, Fundación SM y la Universidad de Dayton dan la bienvenida al segundo grupo del programa de certification Enseñando Inglés como Segunda Lengua (TEFL).  " ;
      this.pic3Desc ="ODA en Guadalajara con nuestros herman@s del Albergue FM4 Paso Libre. " ;
      this.pic4Desc ="Algo de arte afuera de Poch@ House, reclamando nuestros espacios públicos en nuestro barrio." ;
      this.pic5Desc ="Fer y Ceci durante una de nuestra taller de fotografía" ;
      this.pic6Desc ="Rossy y Lalo con compañeros en nuestra comunidad en GDL SUR AC en Guadalajara" ;
      this.pic7Desc ="¡Podemos estar en exilio pero no silenciados!" ;
      this.pic8Desc ="Durante la Asamblea de Vocer@s cada quince días en Poch@ House. " ;
      this.pic9Desc ="¡La inauguración de nuestro espacio cultural! ¡Bienvenid@s!" ;
      this.pic10Desc ="Nuestro viaje a Juárez para participar en Abrazos No Muros." ;
    }
    else{
      this.title="Our Community"; 
      this.pic1Desc ="Resistance while dancing in Poch@ House. ";
      this.pic2Desc ="ODA,Fundación SM and University of Dayton welcome Cohort 2 to the TEFL Certificateprogram ";
      this.pic3Desc ="ODA in Guadalajara with our brothers and sisters from Albergue FM4 Paso Libre. " ;
      this.pic4Desc ="Making art outside of Poch@ House, reclaiming the public spaces in our neighborhood. " ;
      this.pic5Desc ="Fer and Ceci during our photography workshop." ;
      this.pic6Desc ="Rossy and Lalo with some of our community from GDL SUR AC in Guadalajara. " ;
      this.pic7Desc ="We may be in exile but we are not silenced " ;
      this.pic8Desc ="During our Community Assembly’s biweekly meetings at Poch@ House. " ;
      this.pic9Desc ="The inauguration of our cultural space! Welcome! " ;
      this.pic10Desc ="Our trip to Juarez to participate in Hugs Not Walls." ;

    }
  }

}
