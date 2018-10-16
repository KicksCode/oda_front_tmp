import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [LanguageService]
})
export class NewsComponent implements OnInit {

  language : String; 
  
  showThirdLink : boolean; 
  title: String; 
  text1 : String; 
  src1 : String; 
  link1 : String; 

  text2 : String;
  src2 : String;  
  link2 : String; 

  text3 : String;
  src3 : String;  
  link3 : String; 


  constructor(private languageSelectedService : LanguageService) { 
    this.setUpLanguageText(); 
  }

  ngOnInit() {
  }

  private setUpLanguageText(){

    this.language = this.languageSelectedService.getNameTest(); 

    if(this.language.includes('es')){
      this.showThirdLink = true; 
      this.title ="Medios"
      this.text1= "“Se llama “Pocho House” , un nombre que tiene implícito un llamado de atención.” ";
      this.src1 ="CNN en español, 31 de julio 2018";  
      this.link1 = "https://cnnespanol.cnn.com/video/pocho-house-centro-inmigrantes-deportados-ciudad-mexico-pkg-krupskaia-alis/";

      this.text2=" “Muchos enfrentan sentimientos de pérdida y confusión; están a la deriva en un estado transitorio entre dos países.”";  
      this.src2 = "New York Times en español,​ Marzo 2018"; 
      this.link2 = "https://www.nytimes.com/es/2018/03/26/dreamers-mexico-regreso-daca/";
      
      this.text3 = "“​Se reconocen como personas con experiencia de juventud en EUA, que representan la diversidad de quienes salieron del país….” "; 
      this.src3 = "MásporMás, Mayo 2018"; 
      this.link3 = "https://www.maspormas.com/especiales/poch-house/"; 

    }
    else{
      this.showThirdLink = true; 
      this.title ="News"
      this.text1= "“As the community of the deported and returned has grown, it is finding its voice, helping to create a softer landing for new arrivals.” "; 
      this.src1 ="New York Times​, March 2018";  
      this.link1 = "https://www.nytimes.com/2018/03/24/world/americas/mexico-daca-dreamers-immigration.html";

      this.text2="“Otros Dreams En Acción believes in the importance of transborder mobility.” ";  
      this.src2 ="Remezcla, ​March 2018";  
      this.link2 = "http://remezcla.com/features/culture/mexico-city-pocho-house-deportees-returnees/";
      
      this.text3 = "“ODA has called on the López Obrador government to make sure that migrants’ groups are at the table.”";
      this.src3 ="Truthout, July 19, 2018";   
      this.link3 = "https://truthout.org/articles/deported-by-trump-migrants-press-mexican-president-elect-for-support/"; 
    }
  } 

}
