import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { AboutUsModel } from './aboutUs.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'], 
  providers : [LanguageService]
})
export class AboutUsComponent implements OnInit {

  language: String;
  aboutUsModelObj: AboutUsModel;
  titleEng: String;
  desc1Eng: String;
  desc2Eng: String;
  title2Eng : String; 

  titleEsp: String;
  desc1Esp: String;
  desc2Esp: String;
  title2Esp: String; 

  imgSrcEsp : String;

  constructor(private languageSelectedService: LanguageService) {
    this.setUpAboutUsModel();
  }

  ngOnInit() {
  }

  private setUpAboutUsModel() {
    this.language = this.languageSelectedService.getNameTest();

    if (this.language.includes('es')) {
      this.titleEsp = 'Sobre';
      this.desc1Esp = 'Otros Dreams en Acción es una organización dedicada al apoyo mutuo y la acción política por y para quienes crecieron en Estados Unidos y ahora se encuentran en México debido a la deportación, deportación de un familiar, o amenaza a deportación.';
      this.desc2Esp = 'Una ODA es un poema que se debe cantar. Creemos en el poder del arte y de la cultura para ayudarnos a aprender una del otro y para poder contar nuestras historias desde nuestras realidades. Creemos en nuestra potencial como una comunidad para lograr un cambio positivo desde las secuelas de la deportación y el exilio. Creemos en nuestro derecho de estar de nuestros dos países, al pertenecer aquí y allá. '; 
      this.title2Esp = "Organigrama";
    
      this.imgSrcEsp = "assets/OrganigramaEsp.png"; 

      this.aboutUsModelObj = new AboutUsModel(this.titleEsp, this.desc1Esp, this.desc2Esp, this.title2Esp);
  
    }
    else {
      this.titleEng = 'About Us';
      this.desc1Eng = 'Otros Dreams en Acción is an organization dedicated to mutual support and political action for and by those who grew up in the United States and now find themselves in Mexico due to deportation, the deportation of a family member, or the threat of deportation. '; 
      this.desc2Eng = 'In Spanish “ODA” translates to ode, or a poem meant to be sung. We believe in the power of  arts and culture to learn from one another and to tell our stories from the inside out. We believe in our potential as a community to make positive change in the aftermath of deportation and exile. We believe in our right to be from two countries, to belong aquí y allá.'; 
      this.title2Eng = "Organigram";
      this.imgSrcEsp = "assets/OrganigramaEng.png";
      
      this.aboutUsModelObj = new AboutUsModel(this.titleEng, this.desc1Eng, this.desc2Eng, this.title2Eng);
   
    }
  }


}
